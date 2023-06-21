class info{
    constructor(data){
        this.data=data
    }
    display(){
        console.log(this.data,"is this data")
    }
    ChangeIt(){
        // givenNewData(function(value){
        //     this.data=value
        // }.bind(this))
        givenNewData((value)=>this.data=value)
    }
}
function givenNewData(logic){
    let x=["india","earth","pak","chida","hii","hello"]
    logic(x[Math.floor(Math.random()*6)])
}
obj=new info("cricket")
obj.display()
obj.ChangeIt()
obj.display()



//blocking /synchronous(java)
//non-blocking/Asynchronous(javascript)
//ajax
//xml
