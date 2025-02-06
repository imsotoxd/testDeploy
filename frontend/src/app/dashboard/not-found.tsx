import React from "react";

const DashboardNotFound = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-500">
        Lo sentimos, no pudimos encontrar esta página dentro del dashboard.
      </p>
      <a
        href="/dashboard"
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light"
      >
        Volver al inicio del dashboard
      </a>
    </div>
  );
};

export default DashboardNotFound;
