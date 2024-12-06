const container = document.querySelector("#container")
const love = document.querySelector("#love")

container.addEventListener("dblclick", () => {
    love.style.transform = "translate(-50%, -50%) scale(1)"
    love.style.opacity = 0.6

    setTimeout(() => {
    love.style.opacity = 0
    love.style.transform = "translate(-50%, -50%) scale(0)"
    }, 1000);
})