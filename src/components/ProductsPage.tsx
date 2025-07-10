
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

interface ProductsPageProps {
  category: keyof typeof products;
  title: string;
  description: string;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ category, title, description }) => {
  const categoryProducts = products[category] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-blue-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
          
          {categoryProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                Produtos em breve! Fique ligado nas novidades.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
