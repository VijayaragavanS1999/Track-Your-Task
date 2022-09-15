const inputBox=document.querySelector(".input")
const addBtn = document.querySelector(".addBtn")


function displayfunction(){
  const newElement=document.createElement("div")
  newElement.setAttribute("class","task")
  const divValue=inputBox.value

  function completed(){
    if(this.style.color==="green"){
      this.style.color="red"
      this.style.textDecoration="none"
      this.style.opacity="1"
    }
    
    else{
      this.style.color="green"
      this.style.textDecoration="line-through"
      this.style.opacity="0.5"
    }

  }
 
  newElement.innerText=divValue
  if(divValue.length != 0 ){
     const newContainer=document.getElementById("container")
  newContainer.append(newElement)}
  else{
    window.alert("Enter some task")
  }
  newElement.addEventListener("click", completed)

 

  newElement.addEventListener("dblclick",function (){
    this.remove();
  })
}  

addBtn.addEventListener("click",displayfunction)

inputBox.addEventListener("keyup",function(e){
if(e.keyCode===13)
displayfunction()

})






