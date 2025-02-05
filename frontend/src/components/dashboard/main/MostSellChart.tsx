"use client";

import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getTopSoldProducts } from "@/app/api/movements.api";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface ProductData {
  productId: string;
  total_quantity: string;
  product_name: string;
}

export default function MostSellChart() {
  const [chartData, setChartData] = useState<ChartData<"doughnut"> | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopSoldProducts();
      if (response.error) {
        setError(response.error);
        return;
      }
      if (response.data) {
        const labels = response.data.map(
          (product: ProductData) => product.product_name
        );
        const values = response.data.map((product: ProductData) =>
          Number.parseInt(product.total_quantity, 10)
        );

        setChartData({
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: [
                "#0066cc",
                "#0077cc",
                "#0088cc",
                "#0099cc",
                "#00aacc",
                "#00bbcc",
                "#00cccc",
                "#00ddcc",
                "#00eecc",
                "#00ffcc",
              ].slice(0, response.data.length),
              borderColor: Array(response.data.length).fill("#ffffff"),
              borderWidth: 1,
            },
          ],
        });
      }
    };
    fetchData();
  }, []);

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        color: "#333333",
        formatter: (value: number, context: any) => {
          return `${context.chart.data.labels[context.dataIndex]}: ${value}`;
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

  if (error) {
    return <div>Error al cargar los datos: {error}</div>;
  }

  if (!chartData) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
