function Student(sno,name){
    this.sno=sno
    this.name=name
    console.log(this)

}
new Student(3,'chida')

Student.prototype.display=function(){
    console.log("Sno:"+this.sno + "Name:"+this.name)
}
a=new Student(1,'chida')
b=new Student(2,'chidanand')
a.display()
b.display()
