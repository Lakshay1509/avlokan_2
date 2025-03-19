import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './components/ProductList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Product Catalog</h1>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
