// Sketch 1: random walk with 4 equally 
addTitleAndDesc(Chap0.block1)

const one = p => {
    let w;
    p.setup = function() {
        p.createCanvas(600,300)
        p.background(255);
        p.noLoop();
        w = new Walker(p.width/2, p.height/2, p)
    }
    p.draw = function() {
        w.step();
        w.display(); 
    }

    setButton(Chap0.block1.id, p)
    
} 
new p5(one, Chap0.block1.id);

// Sketch 2 8-directon random walk.
addTitleAndDesc(Chap0.block2)
const two = p => {
    let w;
    p.setup = function() {
        p.createCanvas(600, 300);
        p.background(255);
        p.noLoop();
        w = new EightStepWalker(p.width/2, p.height/2, p)
    }
    p.draw = function() {
        w.step();
        w.display(); 
    }

    setButton(Chap0.block2.id, p)
    
} 
new p5(two, Chap0.block2.id);

// sketch 3: Random Number distribution

addTitleAndDesc(Chap0.block3);

const three = p => {
    const randomCounts = Array.from({length: 20}, () => 0);

    p.setup = function() {
        p.createCanvas(640,240);
        p.noLoop();
    }
    p.draw = function() {
        p.background(255);
        const index = Math.floor(p.random(randomCounts.length));
        randomCounts[index]++;
        p.stroke(0);
        p.fill(175);
        const w = p.width/randomCounts.length;

        for(let x = 0; x < randomCounts.length; x++) {
            p.rect(x*w, p.height - randomCounts[x], w-1, randomCounts[x])
        }
    }
    setButton(Chap0.block3.id, p)
}

new p5(three, Chap0.block3.id)
// Exercise i.1 -- Random walk tends toward bottom right.
addTitleAndDesc(Chap0.block4)
const four = p => {
    let w;
    p.setup = function() {
        p.createCanvas(600, 300);
        p.background(255);
        p.noLoop();
        w = new DownRightWalker(p.width/2, p.height/2, p)
    }
    p.draw = function() {
        w.step();
        w.display(); 
    }

    setButton(Chap0.block4.id, p)
    
} 
new p5(four, Chap0.block4.id);