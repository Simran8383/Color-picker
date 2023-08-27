const color= document.getElementById("color-picker")


color.addEventListener("input",()=>{
   let finalColor = color.value
   
   document.body.style.backgroundColor= finalColor
})
