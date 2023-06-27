
const LoopEx = () => {
    
    const arr = [1,2,3,4,5,6]

    const result = arr.map((ele,idx) => {
        if(ele % 2 ===0 ){
            return <li key={idx}>{ele}</li>
        } 
        // 필요가 없는 것들은 return을 안 해줘도 됨.
    })


    return (
        <>
        <ul>
            {result}
        </ul>
        <hr/>

        </>

     );
}
 
export default LoopEx;