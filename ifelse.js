console.log("Hello World");
let a=1;
for(var i=0; i<10 ;i++){
    i+=a;
    console.log(i);

}
if(a<18){
    console.log("You Cannot Drive");
}
else {
    console.log("Youcan drive");
}
let obj={
    name: "Harry",
    role: "Programmer"
}
for (const key in obj) {
    const element=obj[key];
        console.log(key,"--->",element);
    }
for(const c of "Harry"){
    console.log(c);
}    
