const signin = document.querySelector("#signin-btn");
const signup = document.querySelector("#signup-btn");
const signin2 = document.querySelector("#signin-btn2");
const signup2= document.querySelector("#signup-btn2");

const container = document.querySelector (".container")

signup.addEventListener("click", () => {
    container.classList.add("sign-up-mode")
})

signin.addEventListener("click", () => {
    container.classList.remove("sign-up-mode")
})

signup2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2")
})

signin2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2")
})