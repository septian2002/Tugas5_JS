document.getElementById('add-product-btn').addEventListener('click', () => {
    const name = document.getElementById('product-name').value;
    const price = parseInt(document.getElementById('product-price').value);
    const stock = parseInt(document.getElementById('product-stock').value);
    const newProduct = { id: products.length + 1, name, price, stock };
    addProduct(newProduct);
});

document.getElementById('remove-product-btn').addEventListener('click', () => {
    const productId = parseInt(document.getElementById('remove-product-id').value);
    removeProduct(productId);
});