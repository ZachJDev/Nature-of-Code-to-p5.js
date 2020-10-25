{  // Example 1.1 Bouncing Ball with no Vectors
addTitleAndDesc(Chap1.ballNoVectors)
const noVecBall = p => {
    let x = 100;
    let y = 100;
    let xSpeed = 1;
    let ySpeed = 3.3;

    p.setup = () => {
        p.noLoop()
        p.createCanvas(640, 360);
        p.background(255);
    };
    p.draw = () => {
        x = x + xSpeed;
        y = y + ySpeed;

        if(x > p.width || x < 0) {
            xSpeed = xSpeed * -1;
        }
        if(y > p.height || y < 0) {
            ySpeed = ySpeed * -1;
        }

        p.stroke(0);
        p.fill(175);
        p.ellipse(x,y,16,16);
    };

    setButton(Chap1.ballNoVectors.id, p )
};
new p5(noVecBall)
}