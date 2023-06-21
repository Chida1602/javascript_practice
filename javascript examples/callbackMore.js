function filterThis(arrayFilter,array){
    result=[]
    for(let x of array)
        if(arrayFilter(x))
            result.push(x)
    return result
}
//  fresult=filterThis(function(x){
//      return x%2==0?true:false
//  },[23,254,23,235,23,122,254,235])
//  console.log(fresult)
// fresult2=filterThis(function(x){
//     if(x.length>5)
//        return true
//     return false
// },['joseph','jason','arjun','peterson','nareshkumar'])
// console.log(fresult2)

candidates = [
    {sno:1,name:"Jose",skills:['C++','Java','Javascript']},
    {sno:2,name:"Kiran",skills:['C++','C#','Javascript','CSS','SQL']},
    {sno:3,name:"Mohit",skills:['C++','Java','Javascript','Angular','React']},
    {sno:4,name:"Vinay",skills:['C++','Java','Javascript','Android','IOS','Angular']},
    {sno:5,name:"Arjun",skills:['C++','Java','Javascript','angular','IOS','MongoDB']},
]
fresult=filterThis(
    function(candidate){
        for(let x of candidate.skills)
        if(x.toUpperCase()=="ANGULAR" || x.toUpperCase()=="C#")
            return true
        return false

},candidates)
console.log(result)