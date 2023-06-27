
const LoopEx2 = ({start , end}) => {
    // props -> start , end 값을 준다고 가정

    console.log("start" ,start , "end" , end)

    const arr = []

    for(let i = start; i< end; i++){
        // 배열에 값을 넣어주는 건 push
        // jsx에 값을 넣어줘서 return에서 jsx 값 주기
        arr.push(<li key={i}>AAA{i}</li>)
    }
    
    return ( 
        <>
        {arr}
        </>
     );
}
 
export default LoopEx2;