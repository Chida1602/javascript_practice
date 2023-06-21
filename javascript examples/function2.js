function sample(){
    console.log("This is a sample function")
}
store=sample()
//sample reference is hold by store
//now store and sample are one and the same
store
fun=function(){
    console.log("on the spot")
}
//above function does not have name
// and hence it is called anonymous function
fun()