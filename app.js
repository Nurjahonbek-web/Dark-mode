const darkBtn = document.querySelector(".dark-btn")
const lightBtn = document.querySelector(".light-btn")
const blueBtn = document.querySelector(".blue-btn")
const body = document.querySelector("body")




darkBtn.addEventListener("click", function(){
    body.classList.add("dark-mode")
    body.classList.remove("blue-mode")
    
})

lightBtn.addEventListener("click", function(){
    body.classList.remove("dark-mode")
    body.classList.remove("blue-mode")
    
})

blueBtn.addEventListener("click", function(){
    body.classList.remove("dark-mode")
    body.classList.add("blue-mode")

})
