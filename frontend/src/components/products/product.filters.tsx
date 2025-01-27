import ProductoModal from "./product.modal";

function ProductFilter() {
  return (
    <div className="flex flex-col gap-5 my-5">
      <span className="self-center text-2xl font-semibold">
        Encuentra tus productos
      </span>
      <div className="join self-center">
        <input
          className="input inout-bordered w-96 input-primary join-item"
          placeholder="Buscar..."
        />
        <button className="btn btn-primary join-item">
          <span
            className="icon-[solar--magnifer-bold-duotone]"
            role="img"
            aria-hidden="true"
          />
        </button>
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
            defaultValue={0}
            className="select select-bordered bg-primary text-white"
          >
            <option className="bg-white text-primary" value={0} disabled>
              Categoria
            </option>
            {categorias.map((categoria, index) => (
              <option
                className="bg-white text-primary"
                value={categoria.name}
                key={index}
              >
                {categoria.name}
              </option>
            ))}
          </select>
          <button className="btn btn-primary flex items-center gap-1">
            <span>A - Z</span>
          </button>
          <button className="btn btn-primary flex items-center gap-1">
            <span>Z - A</span>
          </button>
        </div>
        <ProductoModal />
      </div>
    </div>
  );
}

export default ProductFilter;

const categorias = [
  { name: "Lacteos" },
  { name: "Carnes" },
  { name: "Verduras" },
  { name: "Frutas" },
  { name: "Dulces" },
  { name: "Bebidas" },
];
