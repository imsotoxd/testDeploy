import React from "react";
import WidgetCard from "../../../ui/dashboard/WidgetCard";

const WidgetsCards = () => {
  return (
    <div className="flex justify-center">
      <WidgetCard
        title="Producto mas vendido"
        bg="bg-primary"
        action="Pinturas"
      />
      <WidgetCard title="Productos disponibles" bg="bg-success" action="5820" />
      <WidgetCard
        title="Productos de bajo stock"
        bg="bg-warning"
        action="300"
      />
      <WidgetCard title="Productos sin stock " bg="bg-alert" action="10" />
    </div>
  );
};

export default WidgetsCards;
