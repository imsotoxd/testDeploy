"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useState } from "react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  ChartDataLabels
);

interface Producto {
  nombre: string;
  unidades: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export default function MostSellChart() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [data, setData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await fetch('/api/movement/query?type=top&motive=sales');
        const { data } = await response.json();
        
        
        const mappedProductos = data.map((producto: any) => ({
          nombre: producto.name,
          unidades: producto.sales || 0
        }));

        setProductos(mappedProductos);
      } catch (error) {
        console.error('Error fetching top products:', error);
      }
    };

    fetchTopProducts();
  }, []);

  useEffect(() => {
    if (productos.length > 0) {
      const labels = productos.map((producto) => producto.nombre);
      const values = productos.map((producto) => producto.unidades);

      setData({
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "#0066cc", "#0077cc", "#0088cc", "#0099cc", "#00aacc",
              "#00bbcc", "#00cccc", "#00ddcc", "#00eecc", "#00ffcc"
            ].slice(0, productos.length),
            borderColor: Array(productos.length).fill("#ffffff"),
            borderWidth: 1,
          },
        ],
      });
    }
  }, [productos]);

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        color: "#333333",
        formatter: (value: number, context: any) => {
          return context.chart.data.labels[context.dataIndex];
        },
        font: { size: 11, weight: "bold" },
        anchor: "end",
        align: "end",
        offset: 8,
        textAlign: "center",
      },
    },
    cutout: "60%",
    radius: "90%",
  };

  if (!data) return <p className="text-center my-3 text-gray-500">No hay ventas registradas </p>;

  return (
    
      <div className="w-48 my-3  h-48 mx-auto p-4 bg-white rounded-2xl">
        
        <Doughnut data={data} options={options} />
      </div>
  
  );
}