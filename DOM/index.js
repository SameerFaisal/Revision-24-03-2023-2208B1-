// function val(){
//    let heading=document.getElementById("h1").innerText
//    alert(heading)
// }

// function val(){
//     let user=prompt("Enter your name")
//     document.getElementById("h1").innerHTML=user
   
//  }

// function fullName(){
//     let fname=document.getElementById("fname").value
//     let lname=document.getElementById("lname").value
//     document.getElementById("output").innerHTML=fname+" "+lname
// }

function add(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    document.getElementById("output").innerHTML=num1+num2
}
function sub(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    document.getElementById("output").innerHTML=num1-num2
}
function mul(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    document.getElementById("output").innerHTML=num1*num2
}
function div(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    document.getElementById("output").innerHTML=num1/num2
}