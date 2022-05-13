import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import ProductList from './Components/ProductList.js'
import Footer from './Components/Footer.js';
import AddItem from './Components/AddItem';



function App() {
  const products = [
    {
      price : 89999,
      name : 'Iphone 10S Max',
      quantity: 0,
    },

    {
      price : 12999,
      name : 'Redmi Note 10S Max',
      quantity: 0,
    }
  ];

  let [productList , setProductList] = useState(products);
  let [totalAmount , setTotalAmount] = useState(0);

const incrementQuantity = (index) => {
  let newProductList = [...productList];
  let newToatalAmount = totalAmount;
  newProductList[index].quantity++;
  newToatalAmount += newProductList[index].price;
  setTotalAmount(newToatalAmount)
  setProductList(newProductList);
};

const decrementQuantity = (index) => {
  let newProductList = [...productList];
  let newToatalAmount = totalAmount;

  if(newProductList[index].quantity > 0) { 
    newProductList[index].quantity--;
  newToatalAmount -= newProductList[index].price;
   }
setTotalAmount(newToatalAmount)
  setProductList(newProductList);
};

const resetQuantity =() => {
let newProductList = [...productList];
newProductList.map((products) => {
products.quantity=0
})
setProductList(newProductList);
setTotalAmount(0);
};

const removeItem =(index) =>{
  let newProductList= [...productList];
  let newToatalAmount= totalAmount;
  newToatalAmount -= newProductList[index].quantity * newProductList[index].price;
newProductList.splice(index, 1); //if we give 'index+1' it removes 1 last item, if index+2(no items removes, bcoz 2 itmes only there.)
//so only (index, 1) works, to remove all items.
console.log(newProductList);
  setProductList(newProductList);
  setTotalAmount(newToatalAmount);
};

const addItem =(name, price) => {
  let newProductList= [...productList];
  newProductList.push({
    name:name,
    price:price,
    quantity:0
  })
  setProductList(newProductList);

};

  return ( 
 <>
 <Navbar />
 <main className='container mt-5'>
   <AddItem addItem={addItem}/>
 <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} 
 removeItem={removeItem} /> 
 </main>
 {/* // using props  that is product. */}
 <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
 </>
  );
}

export default App;
