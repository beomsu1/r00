import styled from "styled-components";

const BlueDiv = styled.div`
background-color: blue
`

const ProductDetail = ({product}) => {

    const {pno , pname, price , img} = product
    
    return ( 
        <li>
            <BlueDiv>PNO {pno}</BlueDiv>
            <div>NAME {pname}</div>
            <div>PRICE {price}</div>
            <div><Img src={require(`../img/${img}`)}/></div>
            <button>BUY</button>
        </li>
     );
}
 
export default ProductDetail;