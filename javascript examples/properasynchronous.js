function giveData(){
    return new Promise(
        function(resolve,reject){
        setTimeout(()=>{
            console.log("Processing")
            resolve("INDIA");
        },9000)
    })
}
async function caller(){
    data=await giveData()
    console.log("Data is",data)
} 
caller()