function preload() {

}

function setup() {
    canvas=createCanvas(320, 300);
    canvas.position(300, 150);
    video= createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 320, 300);

    circle(10, 10, 50, 50);
    circle(300, 10, 50, 50);
    circle(10, 300, 50, 50);
    circle(300, 300, 50, 50);

    fill(0, 128, 0)


    rect(-30, 30, 50, 250);
    rect(300, 30, 50, 250);
    rect(30, -30, 250, 50);
    rect(30, 280, 250, 50);

    fill(128, 0, 128)
}

function take_snapshot() {
    save('Frame_Img.png');
}