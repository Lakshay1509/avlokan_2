import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, sortProducts, setCurrentPage } from '../redux/productSlice';
import './ProductList.css';

const ITEMS_PER_PAGE = 6;

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts, searchQuery, currentPage } = useSelector(state => state.products);

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;
  const totalPages = Math.ceil(displayProducts.length / ITEMS_PER_PAGE);
  const currentProducts = displayProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="product-catalog">
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <select onChange={(e) => dispatch(sortProducts(e.target.value))}>
          <option value="">Sort by...</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="product-grid">
        {currentProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>Rating: {product.rating}/5</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => dispatch(setCurrentPage(i + 1))}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
