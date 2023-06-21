class Student{
    constructor(sno,name){
        this.sno=sno
        this.name=name
    }
    display(){
        console.log(this.sno,this.name)
    }
}
a=new Student(1,'chida')
b=new Student(2,'chidanand')
a.display()
b.display()
