import "./Product.css"
import Price from "./Price";

function Product({title,idx}){
    let oldprice=["2000","4000","7000"];
    let newprice=["1000","3000","6000"];
    return(
        <div className="Product"> 
        <h2>{title}</h2>
        <h3>Description</h3>
        <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
        </div>
    )
}

export default Product;