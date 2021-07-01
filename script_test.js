let video;
let poseNet;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO)
    video.hide();
    poseNet = ml5.poseNet(video, gotPoses);
}

function gotPoses(poses) {
    console.log(poses)
}

function modelLoaded(poses) {
    console.log('poseNet reaady!')
}

function draw() {
    image(video, 0, 0);
}