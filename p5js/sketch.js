let circles = [];               // Define the circles
let circleIndex = 0;            // Define the circleindex value

let startTime;                  // Define start time

let colorRed;                   // Color Definition
let colorGreen;                
let colorYellow;                
let colorDarkLine;              
let colorLightLine;             

let song;                       // song
let songAmp;                    // Songamp
let currentSongVolume;          // The volume of the current song (value range 0-1)
let sondDuration;               // Song duration
let playButton;                 // Play Button
let pauseButton;                // Pause button
let volumeSlider;               // VolumeSlider
let songPlayed;                 // Song played
let isClickedPaused;            // Whether the pause sign is clicked

// Constant value 
const DESIGN_WIDTH = 1140;                  
const DESIGN_HEIGHT = 1700;                 
const BORN_FREQUENCY = 10;                  // frequency of apple
const LINEWEIGHT = 3;                       // Line Weight
const BOLD_LINE_WEIGHT = 5;                 // Weight of bold line segments
const REFRESH_INTERVAL = 15;                //  15s to refresh

function setup()
{
    createCanvas(DESIGN_WIDTH, DESIGN_HEIGHT, P2D);
    colorMode(RGB);
    initSong();

    //Function reference from Wk9 tutorial, in Responsive design in p5.js part 2
    windowResized();

    initColor();
    initCircles();
    createBackgroundTexture();
    
    //Using millis() to keeps trqck how long sketch been running
    //http://gp5js.org/reference/p5/millis/
    startTime = millis() / 1000;
}

function draw()
{
    // Draw the background
    image(textureImage, 0, 0, width, height);
    
    // Update volume data
    updateSong();

    // Draw the colored squares below
    drawColoredGrid();

    // Update all the sketching of apples
    updateCircles();
    
    // Check whether the time point for refreshing has been reached
    // detectRefresh();  
    // Delete this part based on the group code.
}


// When the window size changes, the canvas adapts to the window size
function windowResized()
{
    let w, h;
    //Define the window width and height
    // When the width of the window is greater than the height, the height is fully covered
    if (windowWidth > windowHeight * (DESIGN_WIDTH / DESIGN_HEIGHT))
    {
        h = windowHeight;
        w = h * (DESIGN_WIDTH / DESIGN_HEIGHT);
    }
    else //Otherwise the width is fully covered
    {
        w = windowWidth;
        h = w / (DESIGN_WIDTH / DESIGN_HEIGHT);
    }
    resizeCanvas(w, h);
    
    adjustButton(); // Fit button to window
}

// Initialize the color values used for drawing, the colors from Artwork we choosen
function initColor()
{
    colorRed = color(246, 82, 80);
    colorGreen = color(93, 172, 122);
    colorYellow = color(219, 187, 104);
    colorDarkLine = color(13, 18, 30);
    colorLightLine = color(215,182,103);
}

// Initialize the apples (we using circles to draw the apple)
//The coding from wk11 tutorial part 4
//https://canvas.sydney.edu.au/courses/64347/pages/week-11-tutorial-2?module_item_id=2585765
function initCircles()
{
    circles = [];
    circleIndex = 0;
    circles.push(new SplitCircle(0.349, 0.766, 0.100, 90, 0.5));
    circles.push(new SplitCircle(0.426, 0.768, 0.056, -90, 0.6));
    circles.push(new SplitCircle(0.484, 0.742, 0.090, 0, 0.3));
    circles.push(new SplitCircle(0.564, 0.763, 0.075, 90, 0.4));
    circles.push(new SplitCircle(0.658, 0.772, 0.110, -90, 0.5));
    circles.push(new SplitCircle(0.525, 0.701, 0.062, 180, 0.34));
    circles.push(new SplitCircle(0.509, 0.658, 0.075, 180, 0.5));
    circles.push(new SplitCircle(0.504, 0.576, 0.174, 0, 0.45));
    circles.push(new SplitCircle(0.538, 0.483, 0.121, 180, 0.45));
    circles.push(new SplitCircle(0.566, 0.415, 0.090, 90, 0.55));
    circles.push(new SplitCircle(0.637, 0.408, 0.060, 90, 0.5));
    circles.push(new SplitCircle(0.705, 0.405, 0.083, -90, 0.55));
    circles.push(new SplitCircle(0.496, 0.405, 0.059, -90, 0.55));
    circles.push(new SplitCircle(0.434, 0.409, 0.070, 90, 0.56));
    circles.push(new SplitCircle(0.360, 0.403, 0.077, -90, 0.5));
    circles.push(new SplitCircle(0.285, 0.357, 0.145, 180, 0.46));
    circles.push(new SplitCircle(0.264, 0.280, 0.095, 0, 0.43));
    circles.push(new SplitCircle(0.282, 0.232, 0.056, 185, 0.5));
    circles.push(new SplitCircle(0.732, 0.355, 0.086, 5, 0.4));
    circles.push(new SplitCircle(0.750, 0.302, 0.072, 180, 0.55));
    circles.push(new SplitCircle(0.756, 0.239, 0.123, 0, 0.5));
    circles.push(new SplitCircle(0.750, 0.182, 0.057, 180, 0.6));
    circles.push(new SplitCircle(0.802, 0.171, 0.044, 100, 0.6));
    circles.push(new SplitCircle(0.861, 0.179, 0.087, 280, 0.5));
    circles.push(new SplitCircle(0.926, 0.196, 0.059, 110, 0.55));
    circles.push(new SplitCircle(0.961, 0.166, 0.049, 180, 0.45));
    circles.push(new SplitCircle(0.252, 0.190, 0.074, 270, 0.5));
    circles.push(new SplitCircle(0.185, 0.168, 0.080, 180, 0.5));
    circles.push(new SplitCircle(0.165, 0.108, 0.110, -10, 0.45));
    circles.push(new SplitCircle(0.185, 0.037, 0.106, 180, 0.45));
    circles.push(new SplitCircle(0.525, 0.371, 0.057, 0, 0.5));
    circles.push(new SplitCircle(0.530, 0.323, 0.088, 180, 0.5));
    circles.push(new SplitCircle(0.473, 0.291, 0.064, 270, 0.5));
    circles.push(new SplitCircle(0.414, 0.292, 0.044, 90, 0.55));
    circles.push(new SplitCircle(0.448, 0.259, 0.044, 180, 0.4));
    circles.push(new SplitCircle(0.592, 0.292, 0.059, 90, 0.5));
    circles.push(new SplitCircle(0.624, 0.266, 0.047, 180, 0.55));
}

// Adding the background and texture
function createBackgroundTexture()
{
    textureImage = createGraphics(DESIGN_WIDTH, DESIGN_WIDTH);

    // Blue
    textureImage.background(37, 53, 93);

    // Draw a green grid
    textureImage.stroke(colorDarkLine);
    textureImage.strokeWeight(BOLD_LINE_WEIGHT);
    textureImage.fill(57, 125, 82);
    let middleLen = textureImage.width * 0.75;
    let leftLen = (textureImage.width - middleLen) / 2;
    let rightLen = leftLen;

    let y = textureImage.height * 0.82;
    let rectH = textureImage.width * 0.1;
    //Make sure the sketching always in the middle
    //The coding reference from p5js centre() and rectMode() tutorial
    //https://www.youtube.com/watch?v=F7iRdN50jf8
    textureImage.rectMode(CENTER);
    textureImage.rect(textureImage.width / 2, y, middleLen, rectH);
    textureImage.rect(leftLen / 2, y, leftLen, rectH);
    textureImage.rect(textureImage.width - rightLen / 2, y, rightLen, rectH);
    
     // Define the texture of sketching, we used random lines coding to created
    let numLines = 50000;
    textureImage.strokeWeight(0.5);
    textureImage.stroke(180, 190, 220, 30);

    //The coding reference from Wk 11 tutorial part 1
    //https://canvas.sydney.edu.au/courses/64347/pages/week-11-tutorial-2?module_item_id=2585765
    for (let i = 0; i < numLines; i++)
    {
        let x1 = textureImage.random(textureImage.width);
        let y1 = textureImage.random(textureImage.height);
        let angle = textureImage.random(TWO_PI);
        let len = textureImage.random(10, 30);
        let x2 = x1 + cos(angle) * len;
        let y2 = y1 + sin(angle) * len;
        textureImage.line(x1, y1, x2, y2);
    }
}

// Draw the bottom colored grid
function drawColoredGrid()
{
    let gridW = width * 0.10;
    let gridH = height * 0.10;
    let cornerY = height * 0.76;

    //Using p5js rectMode(corner)to sperate the buttom into different square
    //https://p5js.org/reference/p5/rectMode/
    rectMode(CORNER);
    strokeWeight(LINEWEIGHT);
    stroke(colorLightLine);
    fill(colorYellow);
    rect(width/2 - gridW*3, cornerY, gridW, gridH);
    fill(colorRed);
    rect(width/2 - gridW*2, cornerY, gridW, gridH);
    fill(colorGreen);
    rect(width/2 - gridW*1, cornerY, gridW, gridH);
    fill(colorYellow);
    rect(width/2 + gridW*0, cornerY, gridW, gridH);
    fill(colorGreen);
    rect(width/2 + gridW*1, cornerY, gridW, gridH);
    fill(colorYellow);
    rect(width/2 + gridW*2, cornerY, gridW, gridH);
    
    // Using angleMode(RADIANS) to darwing the are beyond the buttom 
    // https://p5js.org/reference/p5/RADIANS/
    angleMode(RADIANS);
    stroke(colorLightLine);
    fill(colorGreen);
    arc(width/2 - gridW*3 + gridW/2, cornerY + gridH, gridW*0.95, gridW*1.1, -PI, 0, OPEN);
    fill(colorYellow);
    arc(width/2 - gridW*2 + gridW/2, cornerY + gridH, gridW*0.95, gridW*0.6, -PI, 0, OPEN);
    fill(colorRed);
    arc(width/2 - gridW*1 + gridW/2, cornerY + gridH, gridW*0.95, gridW*1.2, -PI, 0, OPEN);
    fill(colorRed);
    arc(width/2 + gridW*0 + gridW/2, cornerY + gridH, gridW*0.95, gridW*1.12, -PI, 0, OPEN);
    fill(colorYellow);
    arc(width/2 + gridW*1 + gridW/2, cornerY + gridH, gridW*0.95, gridW*0.3, -PI, 0, OPEN);
    fill(colorGreen);
    arc(width/2 + gridW*2 + gridW/2, cornerY + gridH, gridW*0.95, gridW*0.7, -PI, 0, OPEN);

    stroke(colorDarkLine);
    noFill();
    rect(width/2 - gridW*3, cornerY, gridW * 6, gridH);
}

// Update all circles
function updateCircles()
{
    
    if (frameCount % BORN_FREQUENCY === 0 && circleIndex < circles.length && songPlayed && !isClickedPaused)
    { 
        circleIndex++;
    }
    for (let i = 0; i < circleIndex; i++)
    {
        let circle = circles[i];
        circle.update();
        circle.display(currentSongVolume);
    }
    if (circleIndex >= circles.length)
    {
        for (let i = 0; i < circleIndex; i++)
        {
            circles[i].activatedRotation = true;
        }
    }
}

// // Split the cirles, drawing the color of apple
function drawSplitCircle(cx, cy, size, rotation, redRatio)
{
    angleMode(DEGREES);
    push();
    translate(cx, cy);
    rotate(rotation);
    stroke(colorDarkLine);
    fill(colorGreen);
    circle(0, 0, size);
    fill(colorRed);
    arc(0, 0, size, size, 180 * redRatio, -180 * redRatio, OPEN);
    pop();
}

// Detect whether it's time to refresh the canvas (Delate base on the group work)
// function detectRefresh()
// {
//     let currentTime = millis() / 1000;
//     if (currentTime - startTime > sondDuration)
//     {
//         initCircles();
//         startTime = currentTime;
//     }
// }

// Initialize Music
function initSong()
{
    // The audio can only be started after user interaction (click)
    //  Refer: https://p5js.org/reference/p5/userStartAudio/
    //  Refer: https://p5js.org/reference/p5/getAudioContext/
    userStartAudio();
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }

    // Loading Songs
    song = loadSound('song.MP3', () => {
        // The content of the song ends
        // https://p5js.org/reference/p5.SoundFile/onended/
        song.onended(onSongEnded);

        // Get song duration
        sondDuration = song.duration();
    });

    // Create a song volume object
    songAmp = new p5.Amplitude();

    // Creating a Button
    playButton = createButton('Play');
    playButton.mousePressed(onPlayClick);
    pauseButton = createButton('Pause');
    pauseButton.mousePressed(onPauseClick);
    volumeSlider = createSlider(0, 1, 1, 0.01);  // https://p5js.org/reference/p5/createSlider/
    adjustButton();

    songPlayed = false;
    isClickedPaused = true;
}

// Adjust the button position and size to suit
function adjustButton()
{
    let buttonW = width * 0.15;         
    let buttonH = height * 0.05;        
    let fontSize = width * 0.03;        
    // position
    playButton.position(width / 2 - buttonW * 1.5, height * 0.88);
    pauseButton.position(width / 2 + buttonW * 0.5, height * 0.88);
    // size
    playButton.size(buttonW, buttonH);
    pauseButton.size(buttonW, buttonH);
    // font size
    playButton.style('font-size', fontSize + 'px');
    pauseButton.style('font-size', fontSize + 'px');
    // Center font
    playButton.style('text-align', 'center');
    pauseButton.style('text-align', 'center');

    // Slider position size. refer: https://p5js.org/reference/p5/createSlider/
    let sliderW = width * 0.44;          
    let sliderH = height * 0.02;         
    volumeSlider.position(width / 2 - buttonW * 1.5, height * 0.95);
    volumeSlider.size(sliderW, sliderH);
}

// When the song ends
function onSongEnded()
{
    if (isClickedPaused) return;
    // reset
    initCircles();
    isClickedPaused = true;
    songPlayed = false;
} 

// When click the play button
// https://p5js.org/reference/p5.SoundFile/play/
function onPlayClick()
{
    if (!isClickedPaused) return;
    song.play();
    songPlayed = true;
    isClickedPaused = false;
}

// When click the Pause button
function onPauseClick()
{
    song.pause();
    isClickedPaused = true;
}

// Update music data
function updateSong()
{
    // Update song volume
    // https://p5js.org/reference/p5.SoundFile/setVolume/
    song.setVolume(volumeSlider.value());
    if (songAmp != null)
    {
        currentSongVolume = songAmp.getLevel(); //https://p5js.org/reference/p5.Amplitude/getLevel/
    }
}
