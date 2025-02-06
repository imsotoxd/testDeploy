"use client";

import { useState, useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { getAllCategories } from "@/app/api/categories.api";

interface Category {
  id: string;
  name: string;
}

const Page = () => {
  const { data } = useUserStore();
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllCategories();

      if (response.error) {
        setError(response.error);
      } else {
        setCategories(response.data);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8 bg-white  rounded-lg">
      <p className="text-2xl font-bold text-primary mb-4">
        Información del usuario
      </p>
      <div className="mb-4">
        <label
          className="block text-sm font-semibold mb-2 text-primary"
          htmlFor="name"
        >
          Nombre
        </label>
        <input
          disabled
          id="name"
          type="text"
          readOnly
          className="input input-ghost input-primary placeholder:text-gray-700 w-full sm:w-96 md:w-[500px] lg:w-[600px] max-w-full px-4 py-2 bg-background"
          placeholder={data?.firstname}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-sm font-semibold mb-2 text-primary"
          htmlFor="lastname"
        >
          Apellido
        </label>
        <input
          disabled
          id="lastname"
          type="text"
          readOnly
          className="input input-ghost input-primary placeholder:text-gray-700 w-full sm:w-96 md:w-[500px] lg:w-[600px] max-w-full px-4 py-2 bg-background"
          placeholder={data?.lastname}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-sm font-semibold mb-2 text-primary"
          htmlFor="email"
        >
          Email
        </label>
        <input
          disabled
          id="email"
          type="text"
          readOnly
          className="input input-ghost input-primary placeholder:text-gray-700 w-full sm:w-96 md:w-[500px] lg:w-[600px] max-w-full px-4 py-2 bg-background"
          placeholder={data?.email}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-sm font-semibold mb-2 text-primary"
          htmlFor="nombre"
        >
          Nombre de la Empresa
        </label>
        <input
          disabled
          id="nombre"
          type="text"
          readOnly
          className="input input-ghost input-primary placeholder:text-gray-700 w-full sm:w-96 md:w-[500px] lg:w-[600px] max-w-full px-4 py-2 bg-background"
          placeholder={data?.nameCompany}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-sm font-semibold mb-2 text-primary"
          htmlFor="rubro"
        >
          Rubro de la Empresa
        </label>
        <input
          disabled
          id="rubro"
          type="text"
          readOnly
          className="input input-ghost input-primary w-full sm:w-96 md:w-[500px] lg:w-[600px] max-w-full px-4 py-2 bg-background"
          placeholder={data?.businessArea}
        />
      </div>

      <div className="p-4 bg-background   rounded-lg flex flex-col items-start">
        <h3 className="text-lg font-semibold mb-4 text-primary">
          Categorias actuales
        </h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center bg-primary text-white py-2 px-4 rounded-lg"
            >
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
