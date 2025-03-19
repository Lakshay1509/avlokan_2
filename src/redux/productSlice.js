import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', rating: 4.5, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics', rating: 4.2, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Headphones', price: 99.99, category: 'Electronics', rating: 4.0, image: 'https://picsum.photos/200' },
    { id: 4, name: 'Fridge', price: 199.99, category: 'Electronics', rating: 3.9, image: 'https://picsum.photos/200' },
    { id: 5, name: 'IPhone', price: 1299.99, category: 'Electronics', rating: 4.5, image: 'https://picsum.photos/200' },
    { id: 6, name: 'S25Ultra', price: 1499.99, category: 'Electronics', rating: 4.9, image: 'https://picsum.photos/200' },
    { id: 7, name: 'S25', price: 899.99, category: 'Electronics', rating: 4.7, image: 'https://picsum.photos/200' },
    
  ],
  filteredProducts: [],
  searchQuery: '',
  currentPage: 1,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
        product.category.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    sortProducts: (state, action) => {
      const products = state.filteredProducts.length > 0 ? state.filteredProducts : state.products;
      if (action.payload === 'price') {
        state.filteredProducts = [...products].sort((a, b) => a.price - b.price);
      } else if (action.payload === 'rating') {
        state.filteredProducts = [...products].sort((a, b) => b.rating - a.rating);
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchQuery, sortProducts, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;
