let video;

function setup() {
    createCanvas(640,480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}

function gotPoses(poses) {
    console.log(poses);
}

function modelLoaded() {
    console.log('model loaded!');
}

function draw() {
    image(video, 0, 0)
    filter(GRAY);
}