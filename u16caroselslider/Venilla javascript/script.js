let tabBox = document.querySelector(".unOrderedList");
let isDragging = false;

tabBox.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    tabBox.scrollLeft -= e.movementX;
})

tabBox.addEventListener("mousedown", () => {
    isDragging = true
    console.log(isDragging)
})

tabBox.addEventListener("mouseup", () => {
    isDragging = false
    console.log(isDragging)
})