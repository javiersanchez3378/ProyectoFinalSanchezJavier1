import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Camiseta deportiva", price: 5000, img: "https://via.placeholder.com/150", category: "ropa", description: "Camiseta cómoda para hacer deporte." },
  { id: 2, name: "Zapatillas running", price: 12000, img: "https://via.placeholder.com/150", category: "calzado", description: "Zapatillas ideales para correr largas distancias." },
  { id: 3, name: "Short de entrenamiento", price: 4500, img: "https://via.placeholder.com/150", category: "ropa", description: "Short ligero y transpirable para entrenar." },
];

const ItemListContainer = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  
  if (productId) {
    const product = products.find((item) => item.id === parseInt(productId));
    return product ? (
      <div className="p-4 max-w-md mx-auto border rounded-lg shadow-lg">
        <img src={product.img} alt={product.name} className="w-full h-60 object-cover mb-4" />
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-semibold text-blue-600">${product.price}</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Agregar al Carrito</button>
      </div>
    ) : (
      <h2 className="text-center text-red-500 text-xl">Producto no encontrado</h2>
    );
  }
  
  const [items, setItems] = useState(
    categoryId ? products.filter((item) => item.category === categoryId) : products
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-lg">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
            <button 
              onClick={() => navigate(`/product/${item.id}`)} 
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Ver Detalle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
