const segCount = 5;

document.addEventListener("DOMContentLoaded", () => {
    const boxElement = document.querySelector("#box");
    drawSegments(boxElement, 5, 4);
    button = getResizeButton("crop-button-bottom-left");
    boxElement.appendChild(button);
    repositionButton(boxElement, button);
    
    let buttonDown;
    button.addEventListener("mousedown", (event) => {
        event.preventDefault();
        buttonDown = true;
    });
    button.addEventListener("mouseup", (event) => {
        event.preventDefault();
        buttonDown = false;
    });
    boxElement.addEventListener("mousemove", (event) => {
        // console.log(`BUT clientX: ${event.clientX}, clientY: ${event.clientY}`);
        console.log(this);
        if (buttonDown) {
            repositionButton(boxElement, button);
            boxElement.style.width = `${event.clientX - 20}px`;
            boxElement.style.height = `${event.clientY - 50}px`;
            
    }
    });
    
    let buttonDown;
    button.addEventListener("mousedown", (event) => {
        event.preventDefault();
        buttonDown = true;
    });
    button.addEventListener("mouseup", (event) => {
        event.preventDefault();
        buttonDown = false;
    });
    boxElement.addEventListener("mousemove", (event) => {
        // console.log(`BUT clientX: ${event.clientX}, clientY: ${event.clientY}`);
        console.log(this);
        if (buttonDown) {
            repositionButton(boxElement, button);
            boxElement.style.width = `${event.clientX - 20}px`;
            boxElement.style.height = `${event.clientY - 50}px`;
            
        }
    });

});

function drawSegments(boxElement, horSegCount, verSegCount) {

    const segWidth = boxElement.clientWidth / horSegCount;
    const horSegElement = document.createElement("div");
    horSegElement.style.height = `${boxElement.clientHeight}px`;
    horSegElement.classList.add("seg", "seg-horizontal");
    for (let x = 1; x < horSegCount; x++) {
        let segCopy = horSegElement.cloneNode(false);
        segCopy.style.left = `${segWidth * x}px`;
        boxElement.appendChild(segCopy);
    }

    const segHeight = boxElement.clientHeight / verSegCount;
    const verSegElement = document.createElement("div");
    verSegElement.style.width = `${boxElement.clientWidth}px`;
    verSegElement.classList.add("seg", "seg-vertical");
    for (let y = 1; y < verSegCount; y++) {
        let segCopy = verSegElement.cloneNode(false);
        segCopy.style.top = `${segHeight * y}px`;
        boxElement.appendChild(segCopy);
    }
}

function getResizeButton(buttonPosition) {
    const button = document.createElement("div");
    button.classList.add("crop-button", buttonPosition);
    return button;
}

function repositionButton(boxElement, button) {
    button.style.left = `${boxElement.clientWidth - button.clientWidth / 2}px`;
    button.style.top = `${boxElement.clientHeight - button.clientHeight / 2}px`;
}