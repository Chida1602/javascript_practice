// a=[10,20,30,40,50]
// b=a
// c=[...a]
// b.push(60)
// console.log(b)
// console.log(a)
// c.push(70)
// console.log(c)
// console.log(a)
// console.log(b)

//--------------------------
personAskills=["c","HTML","CSS"]
//personB has  sameskills as that of a in addition to that possess java ,python
personBskills=[...personAskills,"python","angular","java"]
console.log(personAskills)
console.log(personBskills)
categoryA=["sql","MangoDB"]
categoryB=["js","node","chida"]
categoryC=["git","hi","and"]
personCskills=[...PersonAskills,...categoryB,...categoryC,"react.js"]
console.log(personCskills)


LaptopA ={
    sno: 1,
    ram : "4GB",
    disk: "256GB",
    cpu:"intel I7",
    os: "windows 10"
}
LaptopB={...LaptopA,sno:"ABC"}
console.log(LaptopA)
console.log(LaptopB)