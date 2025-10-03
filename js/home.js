(function(){
  const list = window.products?.length ? window.products : JSON.parse(localStorage.getItem('products')||'[]');
  const grid = document.getElementById('grid'); if(!grid) return;
  grid.innerHTML = list.map(p=>`
    <article class="card">
      <a class="card-link" href="product.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}" class="product-img"/>
        <h2 class="card-title">${p.name}</h2>
        <div class="price">₹${p.price}</div>
        <p class="card-desc">${p.description}</p>
      </a>
    </article>`).join('');
})();
