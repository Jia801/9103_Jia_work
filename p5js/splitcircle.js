// Splitcircle function, using the drawing apple's color
//Using constructor() method to created the splitcircle function
//https://p5js.org/reference/p5/class/
class SplitCircle 
{
    constructor(nx, ny, nRadius, angle, greenRatio) 
    {
        this.nx = nx;                       // Normalized coordinates of the center x of the circle
        this.ny = ny;                       // Normalized coordinates of the center y of the circle
        this.nRadius = nRadius;             // Circle normalization radius
        this.nStartRadius = nRadius;        // Initial normalized radius of the circle
        this.curRadius = 0;                 // The actual radius of the current circle
        this.angle = angle;                 // Initial rotation of the circle
        this.greenRatio = greenRatio;       // Green part ratio
        this.startGreenRatio = greenRatio;  // The initial green portion of the circle

        this.rotatedSpeed = random(1, 4);   // Rotation speed
        this.activatedRotation = false;     // Flag to enable autorotation
    }

    // Update
    update()
    {
        if (!this.activatedRotation || isClickedPaused) return;
        this.angle += this.rotatedSpeed;
    }

    //  Display the apples
    display(currentSongVolume) 
    {
        // Calculate the position in the canvas
        let xpos = width * this.nx;
        let ypos = height * this.ny;
        let startRadius = width * this.nStartRadius;

        // The value of the volume amplification
        let vol = constrain(currentSongVolume * 2, 0, 1);
        // smooth effect
        let smooth = 0.25;
        // The radius of the volume control circle
        let tarRadius = lerp(startRadius * 0.9, startRadius * 2.0, vol);
        this.curRadius += (tarRadius - this.curRadius) * smooth;
        // Volume control red and green ratio
        let tarRatio = lerp(this.startGreenRatio, 1.5, vol);
        this.greenRatio += (tarRatio - this.greenRatio) * smooth;

        drawSplitCircle(xpos, ypos, this.curRadius, this.angle, this.greenRatio);
    }
}