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
        let choice = Math.floor(this.context.random(4));
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
        let stepX = Math.floor(this.context.random(3) -1)
        let stepY = Math.floor(this.context.random(3) -1)

        this.x += stepX;
        this.y += stepY;
    }
}

class DownRightWalker extends Walker {
    constructor(x,y,con) {
        super(x,y,con);
    }

    step() {
        let stepX = Math.floor(this.context.random(5) -1) >= 1 ? 1 : -1
        let stepY = Math.floor(this.context.random(5) -1) >= 1 ? 1 : -1

        this.x += stepX;
        this.y += stepY;
    }
}