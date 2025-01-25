let a=[1,2,3,4,5]

let newArr=[]
for(let i=0;i<a.length;i++){
    const element=a[i]
    newArr.push(element**2);
}
console.log(newArr)
const greaterThanOne=(e)=>{
    if(e>1){
        return true;
    }
    else{
        return false;
    }
}
console.log(newArr.filter(greaterThanOne))