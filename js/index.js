const grid = document.getElementById('catalog-grid');

function createCard(product) {
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <img src="${product.image}" alt="${product.name}" loading="lazy" />
    <div class="card-body">
      <h3 class="card-title">${product.name}</h3>
      <p class="card-price">${formatCurrency(product.price)}</p>
    </div>
    <div class="card-actions">
      <a class="cta" href="product.html?id=${product.id}">Ver detalle</a>
    </div>
  `;

  if (product.status === 'agotado') {
    const badge = document.createElement('span');
    badge.className = 'product-status';
    badge.textContent = 'Agotado';
    badge.setAttribute('aria-label', 'Producto agotado');
    article.appendChild(badge);
  }

  return article;
}

if (grid && Array.isArray(PRODUCTS)) {
  PRODUCTS.forEach((product) => {
    const card = createCard(product);
    grid.appendChild(card);
  });
}
