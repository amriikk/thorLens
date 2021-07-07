let video;

function setup() {
    createCanvas(640,480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('Model is Loaded!');
}

function draw() {
    image(video, 0, 0)
}