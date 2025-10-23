const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const detail = document.getElementById('product-detail');
const emptyState = document.getElementById('product-empty');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productDescription = document.getElementById('product-description');
const productFeatures = document.getElementById('product-features');
const productImage = document.getElementById('product-image');
const productStatus = document.getElementById('product-status');
const sizeSelect = document.getElementById('size-select');

function renderProduct(product) {
  productName.textContent = product.name;
  productPrice.textContent = formatCurrency(product.price);
  productDescription.textContent = product.description;
  productImage.src = product.image;
  productImage.alt = product.name;

  productFeatures.innerHTML = '';
  product.features.forEach((feature) => {
    const li = document.createElement('li');
    li.textContent = feature;
    productFeatures.appendChild(li);
  });

  sizeSelect.innerHTML = '';
  product.sizes.forEach((size) => {
    const option = document.createElement('option');
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  if (product.status === 'agotado') {
    productStatus.textContent = 'Agotado';
    productStatus.style.background = 'rgba(226, 95, 126, 0.9)';
  } else if (product.status === 'nuevo') {
    productStatus.textContent = 'Nuevo';
    productStatus.style.background = 'rgba(152, 199, 239, 0.9)';
  } else {
    productStatus.textContent = '';
    productStatus.style.background = 'transparent';
  }

  productStatus.hidden = !productStatus.textContent;
  detail.hidden = false;
}

function showEmpty() {
  detail.hidden = true;
  emptyState.hidden = false;
}

if (Array.isArray(PRODUCTS)) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (product) {
    renderProduct(product);
  } else {
    showEmpty();
  }
} else {
  showEmpty();
}
