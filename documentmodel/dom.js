document.title="Harry is good"
console.log(document.body)
document.body.style.backgroundColor="green"
console.log(window)
console.log(window.document)
console.log(window.document.body)
let cont=document.body.childNodes[1];
console.log(cont.firstChild)
cont.lastElementChild.style.backgroundColor="green"
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children[1].nextElementSibling)
console.log(document.body.firstElementChild.children[1].parentElement)