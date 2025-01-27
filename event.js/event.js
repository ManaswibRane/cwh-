let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    alert("I was clicked")
})
let bon = document.getElementById("butn");
bon.addEventListener("click", () => {
    window.document.querySelector(".box").innerHTML = "I was clicked";
});