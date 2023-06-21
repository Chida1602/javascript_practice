a=[12,24,36,48,60,72]
console.log(a)
a.push(84)
console.log(a)
b=a
b.push("dhoni")
//here array a is effected if changes are made in array b
console.log(a)


c=[]
for(let x of a)
c.push(x)
console.log(c)
c.push("virat")
// old method for backup
//here new array c is created if any changes 
//are made in array it does effect array a
console.log(b)
console.log(c)
console.log(a)