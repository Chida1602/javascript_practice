function sample(callback1,callback2,number1,number2){
    console.log("Sample function started");
    result = callback1(number1)+callback2(number2)
    console.log("sample function ended and the result is ",result)
}
// sample(
//     function callback1(){
//         number1=123;
//     res1=Number(string(number1).split('').reverse().join(''));
//     })
// function callback2(){
//     value = 345;
//     sum = 0;
//     while (value) {
//         sum += value % 10;
//         value = Math.floor(value / 10);
// }
// }
sample(
    function(n){
        x=n
        result=0
        while(x>0){
            y=x%10
            result=result*10+current
            x=Math.floor(x/10)
        }
        return ""+result
    }
)

