interface Products {
  name: string,
  model: string,
  speed: number,
  isEv:boolean,
}

// Product → type/blueprint
// product → actual object
async function getProduct(): Promise<Products> {
  return {
    name: "swift",
    model: "90x",
    speed: 90,
    isEv: true,
  }
}

getProduct().then((product)=> {
  console.log(product.name);
  console.log(product.speed);
})
