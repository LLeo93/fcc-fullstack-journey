let inventory=[]
function findProductIndex(name) {
  const lowerName = name.toLowerCase();
  return inventory.findIndex(item => item.name.toLowerCase() === lowerName);
}
function addProduct(product) {
  const name = product.name.toLowerCase();
  const quantity = product.quantity;
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name: name, quantity: quantity });
    console.log(`${name} added to inventory`);
  }
}
function removeProduct(name, quantity) {
  const lowerName = name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index === -1) {
    console.log(`${lowerName} not found`);
    return;
  }

  const currentProduct = inventory[index];

  if (currentProduct.quantity < quantity) {
    console.log(`Not enough ${lowerName} available, remaining pieces: ${currentProduct.quantity}`);
  } else {
    currentProduct.quantity -= quantity;
    
    if (currentProduct.quantity === 0) {
      inventory.splice(index, 1);
    }
    console.log(`Remaining ${lowerName} pieces: ${currentProduct.quantity}`);
  }
}