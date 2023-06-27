import ProductDetail from "./ProductDetail";

const ProductList = () => {


    const product= [
        {pno:1 , pname:'상품1' , price : 3000},
        {pno:2 , pname:'상품2' , price : 5000},
        {pno:3 , pname:'상품3' , price : 7000},
        {pno:4 , pname:'상품4' , price : 9000},
        {pno:5 , pname:'상품5' , price : 10000},
      ]

    return ( 
     <ul className="productList">
        {product.map( product => <ProductDetail key={product.pno} product={product}/>)}
     </ul>
     );
}
 
export default ProductList;