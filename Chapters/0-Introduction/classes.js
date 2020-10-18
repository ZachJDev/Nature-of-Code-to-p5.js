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
        const x = this.context.mouseX >= this.context.width/2 ? 1: -1
        const y = this.context.mouseY >= this.context.height/2 ? 1: -1
        
        const num = this.context.random(1);

        if(num < .25) this.x += x
        else if(num < .5) this.y += y
        else if(num < .6) this.x++
        else if(num < .7) this.x--
        else if(num < .8) this.y++
        else if(num < .9) this.y--
    }
}