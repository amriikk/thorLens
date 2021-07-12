let video;
let noseX = 0;
let noseY = 0;

function setup() {
    createCanvas(640,480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(poses) {
    console.log(poses);
    if (poses.length > 0) {
        let newX = poses[0].pose.keypoints[0].position.x;
        let newY = poses[0].pose.keypoints[0].position.y;
        noseX =  lerp(noseX, newX, 0.5);
        noseY =  lerp(noseY, newY, 0.5);
    }
}

function modelLoaded() {
    console.log('model loaded!');
}

function draw() {
    image(video, 0, 0)
    // filter(GRAY);

    fill(255,0,0);
    ellipse(noseX, noseY, 30);


}