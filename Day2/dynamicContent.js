document.addEventListener('DOMContentLoaded', function() {
    const products = [
      { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
      { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
      { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] }
    ];
  
    const filters = {
      category: document.getElementById('category'),
      ecoFriendly: document.getElementById('ecoFriendly'),
      new: document.getElementById('new'),
      sale: document.getElementById('sale')
    };
  
    const productsContainer = document.getElementById('products');
  
    function renderProducts(productsArray) {
      productsContainer.innerHTML = '';
      productsArray.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<p>${product.name}</p>`;
        productsContainer.appendChild(productElement);
      });
    }
  
    function applyFilters() {
      let filteredProducts = products;
  
      if (filters.category.value) {
        filteredProducts = filteredProducts.filter(product => product.category === filters.category.value);
      }
  
      if (filters.ecoFriendly.checked) {
        filteredProducts = filteredProducts.filter(product => product.tags.includes('eco-friendly'));
      }
  
      if (filters.new.checked) {
        filteredProducts = filteredProducts.filter(product => product.tags.includes('new'));
      }
  
      if (filters.sale.checked) {
        filteredProducts = filteredProducts.filter(product => product.tags.includes('sale'));
      }
  
      renderProducts(filteredProducts);
  
      if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p>No products found.</p>';
      }
    }
  
    Object.values(filters).forEach(filter => {
      filter.addEventListener('change', applyFilters);
    });
  
    renderProducts(products);
  });