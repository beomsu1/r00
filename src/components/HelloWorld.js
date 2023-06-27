const HelloWorld = ({product}) => { // product 도 props에 포함되어 있는 값이기에 product도 구조 분해 할당이 된 것 

    if( !product ){

        return <h1>상품이 없습니다,</h1>}

    //구조 분해 할당
    const {pno,pname,price} = product || {pno:-1 , panme:'' , price:0}

    return ( 
        <div>
        <div>{pno}</div>
        <div>{pname}</div>
        <div>{price}</div>
        {price > 5000 && <div>비싸요</div>}
        {price > 5000 ? <div>비싸요</div> : <div>싸요</div>}
        </div> 
        );
}
 
export default HelloWorld;