function fun(call,randomNumberPlease){
    console.log("fun has started and the random number is",randomNumberPlease)
    for(let x=0;x<randomNumberPlease;x++)
        call()
    console.log("fun has ended")
}
fun(function(){
    console.log('Anonymous fun')
},Math.round(Math.random()*10))