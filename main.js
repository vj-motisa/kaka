var song = "";
var lex = "";
var ley = "";
var rex = "";
var rey = "";

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 700, 500);
}

function preload() {
    song = loadSound("music.mp3");
}

function play() {
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function modelLoaded() {
    console.log("fdjesls");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        lex = results[0].pose.leftWrist.x;
        ley = results[0].pose.leftWrist.y;
        console.log("Left Wrist X= " + lex + " Left Wrist Y= " +ley);

        rex = results[0].pose.rightWrist.x;
        rey = results[0].pose.rightWrist.y;
        console.log("Right Wrist X= " + rex + " Right Wrist Y= " +rey);
    }
}