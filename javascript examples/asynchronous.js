function giveData(){
    setTimeout(()=>{
        console.log("Processing")
        return "INDIA";
    },2000)
}

info=giveData()
console.log("SOMETHING ELSE")
console.log(info)