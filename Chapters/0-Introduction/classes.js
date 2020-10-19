class Walker {
    constructor(x,y, con) {
        this.x = x;
        this.y = y;
        this.context = con
    }
    display () {
        this.context.stroke(0);
        this.context.point(this.x,this.y)
    }
    step() {
        let choice = this.context.int(this.context.random(4));
        if(choice === 0) this.x++
        else if(choice === 1) this.x--;
        else if(choice === 2) this.y++;
        else this.y--;
    }
}

class EightStepWalker extends Walker {
    constructor(x,y,con) {
        super(x,y,con);
    }

    step() {
        let stepX = this.context.int(this.context.random(3)) -1;
        let stepY = this.context.int(this.context.random(3)) -1;

        this.x += stepX;
        this.y += stepY;
    }
}

class DownRightWalker extends Walker {
    constructor(x,y,con) {
        super(x,y,con);
    }
    
    step() {
        let stepX = this.context.int(this.context.random(5)) -1 >= 1 ? 1 : -1
        let stepY = this.context.int(this.context.random(5)) -1 >= 1 ? 1 : -1

        this.x += stepX;
        this.y += stepY;
    }
}

class RightWalker extends Walker {
    constructor(x,y,con) {
        super(x,y,con);
    }

    step() {
        const num = this.context.random(1);

        if(num < .4) this.x++
        else if (num < .6) this.x--
        else if (num < .8) this.y++
        else this.y--;
    }
}

class DynamicWalker extends Walker {
    constructor(x, y, con) {
        super(x,y,con);

    }

    step() {
        const x = this.context.mouseX >= this.x ? 1: -1
        const y = this.context.mouseY >= this.y ? 1: -1
        
        const num = this.context.random(1);

        if(num < .25) this.x += x
        else if(num < .5) this.y += y
        else if(num < .6) this.x++
        else if(num < .7) this.x--
        else if(num < .8) this.y++
        else if(num < .9) this.y--
    }
}

class GaussianWalker extends Walker {
    constructor(x,y, con, mean, stdDev) {
        super(x,y,con);
        this.mean = mean;
        this.stdDev = stdDev;
    }

    step() {
        let stepSizeX = this.context.randomGaussian(this.mean, this.stdDev)
        let stepSizeY = this.context.randomGaussian(this.mean, this.stdDev)
        let stepX = this.context.int(this.context.random(3)) -1;
        let stepY = this.context.int(this.context.random(3)) -1;

        this.x += stepX * stepSizeX;
        this.y += stepY * stepSizeY;
    }
}

class NearlyLevyWalker extends Walker {
    constructor(x, y, con) {
        super(x,y,con);
    }

    step() {
        let r = this.context.random(1)
        let xStep, yStep;
        if(r < 0.009) {
            xStep = this.context.random(-100, 100)
            yStep = this.context.random(-100, 100)
        } else {
            xStep = this.context.random(-1, 1);
            yStep = this.context.random(-1, 1);
        }

        this.x += xStep
        this.y += yStep
    }
}

class MonteCarloWalker extends Walker {
    constructor(x, y, con) {
        super(x,y,con);
        this.stepX = 0;
        this.stepY = 0;
    }

    step() {
        let stepSize = this.monteCarlo(10)
        this.x += this.stepX = this.context.random(-stepSize, stepSize) 
        this.y += this.stepY = this.context.random(-stepSize, stepSize) 
        
    }

    monteCarlo(max) {
        let r1, r2
        do {
             r1 = this.context.random(max)
             r2 = this.context.random(max ** 2)
        } while(r2 > r1 ** 2)

        return r1;
    }
}

class PerlinNoiseWalker extends Walker {
    constructor(x,y,con){
        super(x,y,con);
        this.tX = 0;
        this.tY = 10000;
    }

    step() {
        this.x = this.context.map(this.context.noise(this.tX), 0, 1, 0, this.context.width)
        this.y = this.context.map(this.context.noise(this.tY), 0, 1, 0, this.context.height)
        this.tY += .005;
        this.tX += .005;
    }

    PerlinSizeStep() {
        this.stepSize = this.context.map(this.context.noise(this.tX), 0, 1, 0, 5)
        this.tX += .005;

        let sX = this.context.int(this.context.random(3)) -1;
        let sY = this.context.int(this.context.random(3)) -1;

        this.x += sX * this.stepSize;
        this.y += sY * this.stepSize;

    }
}
