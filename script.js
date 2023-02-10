const canvas = document.getElementById("image-canvas");
const ctx = canvas.getContext("2d");
const testButton = document.getElementById("test-button");

canvas.height = 600;
canvas.width = 800;

testButton.addEventListener("click", () => {
    drawCropOverlay(ctx, 10, 50, 600, 300, 5, 5);
});

function drawCropOverlay(ctx, x, y, width, height, horizontalSegmentCount, verticalSegmentCount) {
    drawMainRectangle(ctx, x, y, width, height);
    drawSegments(ctx, x, y, width, height, horizontalSegmentCount, true);
    drawSegments(ctx, x, y, width, height, verticalSegmentCount, false);
    // drawReshapeButton(ctx, x + width, y + width);
    drawReshapeButton(ctx, width + x, height + y);
}

function drawMainRectangle(ctx, x, y, width, height) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(32, 45, 21, 0.3)";
    ctx.rect(x, y, width, height);
    ctx.fill();
}

function drawSegments(ctx, x, y, width, height, segmentCount, isHorizontal) {
    const segmentSize = (isHorizontal ? width : height) / segmentCount;
    console.log(isHorizontal ? "h" : "v");
    console.log(`seg size: ${segmentSize}`);
    ctx.beginPath();
    ctx.lineWidth = 1;
    for (let step = 1; step < segmentCount; step++) {
        let segmentPosition = (isHorizontal ? x : y) + segmentSize * step;
        console.log(segmentPosition);
        ctx.moveTo(isHorizontal ? segmentPosition : x, isHorizontal ? y : segmentPosition);
        ctx.lineTo(isHorizontal ? segmentPosition : x + width, isHorizontal ? y + height : segmentPosition);
    }
    ctx.stroke();
}

function drawReshapeButton(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}