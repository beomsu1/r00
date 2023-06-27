import ProductDetail from "./ProductDetail";

const ProductList = () => {


    const product= [
        {pno:1 , pname:'상품1' , price : 3000 , img:'무민.jpg'},
        {pno:2 , pname:'상품2' , price : 5000, img:'미피.jpg'},
        {pno:3 , pname:'상품3' , price : 7000, img:'시나모롤.jpg'},
        {pno:4 , pname:'상품4' , price : 9000, img:'오리.gif'},
        {pno:5 , pname:'상품5' , price : 10000, img:'헬로키티.jpg'},
      ]

    return ( 
     <ul className="productList">
        {product.map( product => <ProductDetail key={product.pno} product={product}/>)}
     </ul>
     );
}
 
export default ProductList;