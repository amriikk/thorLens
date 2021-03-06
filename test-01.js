let video;
let noseX = 0;
let noseY = 0;
let eyeLX = 0;
let eyeLY = 0;

function setup() {
    createCanvas(640,480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(poses) {
    // console.log(poses);
    if (poses.length > 0) {
        let nX = poses[0].pose.keypoints[0].position.x;
        let nY = poses[0].pose.keypoints[0].position.y;
        let eX = poses[0].pose.keypoints[1].position.x;
        let eY = poses[0].pose.keypoints[1].position.y;
        // lerp() to smooth the transition of the points
        noseX =  lerp(noseX, nX, 0.5);
        noseY =  lerp(noseY, nY, 0.5);
        eyeLX =  lerp(eyeLX, eX, 0.5);
        eyeLY =  lerp(eyeLY, eY, 0.5);
    }
}

function modelLoaded() {
    console.log('model is loaded!');
}

function draw() {
    image(video, 0, 0)
    filter(GRAY);
    let d = dist(noseX, noseY, eyeLX, eyeLY);

    fill(255,0,0);
    ellipse(noseX, noseY, d);


}