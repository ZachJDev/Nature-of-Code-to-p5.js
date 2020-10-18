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

// Exercise I.2 -- Probability of pulling two aces in a row from a deck of cards.
addTitleAndDesc(Chap0.block5);
const five = p => {
    const probability = (4/52) *(4/51);
    p.setup = function() {
        p.createCanvas(500,300);
        p.background(255);
        p.noLoop();
    }

    p.draw = function() {
        p.textSize(32);
        p.text(`${probability}`, 10, 90)
    }

    setButton(Chap0.block5.id, p)
}
new p5(five, Chap0.block5.id)

// Example I.3: Walker that moves to the right
addTitleAndDesc(Chap0.block6)

const six = p => {
    let w;
    p.setup = function() {
        p.createCanvas(600, 300);
        p.background(255);
        w = new RightWalker(p.width/2, p.height/2, p);
        p.noLoop();
    }

    p.draw = function() {
        w.step();
        w.display();
    }

    setButton(Chap0.block6.id, p)
}

new p5(six, Chap0.block6.id);

// Exercise I.3: Dyanmic Walker

addTitleAndDesc(Chap0.block7)

const seven = p => {
    let w;
    p.setup = function() {
        p.createCanvas(600, 300);
        p.background(255);
        w = new DynamicWalker(p.width/2, p.height/2, p)
        p.noLoop();
    }

    p.draw = function() {
        w.step();
        w.display();
    }
    setButton(Chap0.block7.id, p);
}

new p5(seven, Chap0.block7.id)

// Example I.4 Normal Distribution

addTitleAndDesc(Chap0.block8)