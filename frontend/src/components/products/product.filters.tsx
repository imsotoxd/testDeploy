"use client";
import { useQuery } from "@tanstack/react-query";
import ProductoModal from "./product.modal";
import { getAllCategories } from "@/app/api/categories.api";
import { Categorie } from "@/types/categories.type";
import { ChangeEvent, useEffect, useState } from "react";
import { useCategoriesStore, useFilterProduct } from "@/store/product.store";
import { useDebounce } from "use-debounce";

function ProductFilter() {
  const { data, isError, isLoading, error } = useQuery<CategoriesResponse>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    refetchOnWindowFocus: false,
  });

  const { setData } = useCategoriesStore();
  const { setFilter, cleanFilter } = useFilterProduct();
  const [selectValue, setSelectValue] = useState<string>("0");
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedInputValue] = useDebounce(inputValue, 600);

  if (isLoading) return <p>Loading...</p>;
  if (isError && !data) return <p>{error.message}</p>;

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    setFilter(event.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClean = () => {
    cleanFilter();
    setInputValue("");
    setSelectValue("");
  };

  useEffect(() => {
    if (data) setData(data.data);
  }, [data]);

  useEffect(() => {
    setFilter(debouncedInputValue);
  }, [debouncedInputValue]);

  return (
    <div className="flex flex-col gap-5 my-5">
      <span className="self-center text-2xl font-semibold">
        Encuentra tus productos
      </span>
      <div className="self-center">
        <input
          className="input input-bordered w-96 input-primary join-item"
          placeholder="Buscar..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button className="btn btn-ghost">
            <span
              className="icon-[solar--tuning-bold-duotone]"
              role="img"
              aria-hidden="true"
            />
            <span>Filtros</span>
          </button>
          <select
            onChange={handleChangeSelect}
            value={selectValue}
            className="select select-bordered bg-primary text-white"
          >
            <option className="bg-white text-primary" value="0" disabled>
              Categoria
            </option>
            <option className="bg-white text-primary" value="">
              Todos
            </option>
            {data?.data.map((categoria, index) => (
              <option
                className="bg-white text-primary"
                value={categoria.id}
                key={index}
              >
                {categoria.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleClean}
            className="btn btn-primary flex items-center gap-1"
          >
            <span>Limpiar</span>
            <span
              className="icon-[material-symbols--cleaning-services]"
              role="img"
              aria-hidden="true"
            />
          </button>
        </div>
        <ProductoModal />
      </div>
    </div>
  );
}

export default ProductFilter;

export interface CategoriesResponse {
  data: Categorie[];
}
