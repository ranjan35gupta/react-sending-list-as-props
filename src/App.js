import logo from './logo.svg';
import './App.css';
import {Cart} from './Component/Cardsdetails'


function App() {
  const arrayObjects=[
   {
    productId:"1",
    productPic:"https://assets.ajio.com/medias/sys_master/root/20210917/jW76/61439967aeb269a268948016/-473Wx593H-4921741550-multi-MODEL.jpg",
    productName:"Watch",
    Brand:"Titan",
    productDescription:"Titan watches, a product of TATA, is one of India's leading w to India with its exquisite watch collections. Apart from our own brands like Zoop, Fastrack and more, we also offer top international brands like Police, Tommy Hilfiger, Anne Klein, and more.",
    Price:"Price-$60",
    Rating:"Rating-4",
    name1:"blue"

  },
   {
    productId:"2",
    productPic:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf34e3cf2ea74279ad3cae890002d5e3_9366/Response_Super_3.0_Shoes_Grey_GW1376_01_standard.jpg",
    productName:"Shoes",
    Brand:"Adidas",
    productDescription:"Adidas, in full Adidas AG, German manufacturer of athletic shoes and apparel and sporting goods. In the early 21st century it was the largest sportswear manufacturer in Europe and the second largest (after Nike) in the world.",
    Price:"Price-$30",
    Rating:"Rating-5",
    name1:"green"

  },
   {
    productId:"3",
    productPic:"https://contents.mediadecathlon.com/p1484240/ab565f3675dbdd7e3c486175e2c16583/p1484240.jpg",
    productName:"Mens Shirt",
    Brand:"POLO",
    productDescription:"Apolo shirt is a knitted, set, a small opening at the neckline, and attached collar. Polo shirts were first knit from wool jersey but soon were knit with cotton and other soft materials. The first polo shirts were part of the uniforms worn by polo players on teams in England and the United States starting at the beginning of the nineteenth century. ",
    Price:"Price-$20",
    Rating:"Rating-5",
    name1:"red"

  }
  
  ]
  return(
    <div className="cart">
 {arrayObjects.map((element,Index,array)=>{return (
  <div >
    <div><Cart
    product={array[Index]}
    // addColor={addColor1}
    
    /></div></div>)}
  
      
      /* <div><Cart product={productdetails2} addColor={addColor2}/></div>
      <div><Cart product={productdetails3} addColor={addColor3}/></div> */
      
    
  )}
  </div>)
}


export default App;
