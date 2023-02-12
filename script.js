const segCount = 6;

document.addEventListener("DOMContentLoaded", () => {
    const one = document.querySelector("div");
    const two = document.createElement("div");
    two.className = "two";
    for (let i = 0; i < segCount; i++) {
        const twoB = two.cloneNode(false);
        twoB.style.left = `${100 * i}px`;
        one.appendChild(twoB);  
    }
    
});