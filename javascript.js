let count=0;
let adder=document.getElementById("counter")
let saveel=document.getElementById("save-ele")
function increment(){
    count+=1   
    adder.innerText=count
}
function save(){
    let counter=count+" - "
    saveel.textContent+=counter
    count=0
    adder.innerText=count
}