// Sketch 1: random walk with 4 equally
addTitleAndDesc(Chap0.block1);

const one = (p) => {
  let w;
  p.setup = function () {
    p.createCanvas(600, 300);
    p.background(255);
    p.noLoop();
    w = new Walker(p.width / 2, p.height / 2, p);
  };
  p.draw = function () {
    w.step();
    w.display();
  };

  setButton(Chap0.block1.id, p);
};
new p5(one, Chap0.block1.id);

// Sketch 2 8-direction random walk.
addTitleAndDesc(Chap0.block2);
const two = (p) => {
  let w;
  p.setup = function () {
    p.createCanvas(600, 300);
    p.background(255);
    p.noLoop();
    w = new EightStepWalker(p.width / 2, p.height / 2, p);
  };
  p.draw = function () {
    w.step();
    w.display();
  };

  setButton(Chap0.block2.id, p);
};
new p5(two, Chap0.block2.id);

// sketch 3: Random Number distribution

addTitleAndDesc(Chap0.block3);

const three = (p) => {
  const randomCounts = Array.from(
    {
      length: 20,
    },
    () => 0
  );

  p.setup = function () {
    p.createCanvas(640, 240);
    p.noLoop();
  };
  p.draw = function () {
    p.background(255);
    const index = Math.floor(p.random(randomCounts.length));
    randomCounts[index]++;
    p.stroke(0);
    p.fill(175);
    const w = p.width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
      p.rect(x * w, p.height - randomCounts[x], w - 1, randomCounts[x]);
    }
  };
  setButton(Chap0.block3.id, p);
};
new p5(three, Chap0.block3.id);

// Exercise i.1 -- Random walk tends toward bottom right.
addTitleAndDesc(Chap0.block4);

const four = (p) => {
  let w;
  p.setup = function () {
    p.createCanvas(600, 300);
    p.background(255);
    p.noLoop();
    w = new DownRightWalker(p.width / 2, p.height / 2, p);
  };
  p.draw = function () {
    w.step();
    w.display();
  };

  setButton(Chap0.block4.id, p);
};
new p5(four, Chap0.block4.id);

// Exercise I.2 -- Probability of pulling two aces in a row from a deck of cards.
addTitleAndDesc(Chap0.block5);
const five = (p) => {
  const probability = (4 / 52) * (4 / 51);
  p.setup = function () {
    p.createCanvas(500, 300);
    p.background(255);
    p.noLoop();
  };

  p.draw = function () {
    p.textSize(32);
    p.text(`${probability}`, 10, 90);
  };

  setButton(Chap0.block5.id, p);
};
new p5(five, Chap0.block5.id);

// Example I.3: Walker that moves to the right
addTitleAndDesc(Chap0.block6);

const six = (p) => {
  let w;
  p.setup = function () {
    p.createCanvas(600, 300);
    p.background(255);
    w = new RightWalker(p.width / 2, p.height / 2, p);
    p.noLoop();
  };

  p.draw = function () {
    w.step();
    w.display();
  };

  setButton(Chap0.block6.id, p);
};

new p5(six, Chap0.block6.id);

// Exercise I.3: Dyanmic Walker

addTitleAndDesc(Chap0.block7);

const seven = (p) => {
  let w;
  p.setup = function () {
    p.createCanvas(600, 300);
    p.background(255);
    w = new DynamicWalker(p.width / 2, p.height / 2, p);
    p.noLoop();
  };

  p.draw = function () {
    w.step();
    w.display();
  };
  setButton(Chap0.block7.id, p);
};

new p5(seven, Chap0.block7.id);

// Example I.4 Normal Distribution

addTitleAndDesc(Chap0.block8);

const eight = (p) => {
  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
    p.noLoop();
  };
  p.draw = () => {
    let x = p.randomGaussian(320, 60);
    p.noStroke();
    p.fill(0, 10);
    p.ellipse(x, 180, 16, 16);
  };

  setButton(Chap0.block8.id, p);
};
new p5(eight, Chap0.block8.id);

// a Gaussian paint splatter.
addTitleAndDesc(Chap0.gaussianSplatter);

const splatter = (p) => {
  p.setup = () => {
    p.createCanvas(600, 300);
    p.noLoop();
    p.noStroke();
  };
  p.draw = () => {};

  setButton(Chap0.gaussianSplatter.id, p);

  p.mousePressed = (e) => {
    let { mouseX, mouseY } = p;
    if (mouseX >= 0 && mouseX <= 600 && mouseY >= 0 && mouseY <= 300) {
      let splats = p.randomGaussian(7, 1.5);
      p.fill(p.random(255), p.random(255), p.random(255));

      for (let i = 0; i < splats; i++) {
        let x = p.randomGaussian(20, 30);
        let y = p.randomGaussian(20, 30);

        let sizeX = p.randomGaussian(20, 3);
        let sizeY = p.randomGaussian(20, 3);

        p.ellipse(mouseX + x, mouseY + y, sizeX, sizeY);
      }
    }

    // Per the p5js docs recommendation.
    return false;
  };
};
new p5(splatter, Chap0.gaussianSplatter.id);

// Gaussian Random Walk

addTitleAndDesc(Chap0.gaussianWalk);

const gWalk = (p) => {
  let w;
  p.setup = () => {
    p.createCanvas(600, 300);
    w = new GaussianWalker(p.width / 2, p.height / 2, p, 3, 1);
    p.noLoop();
  };
  p.draw = () => {
    w.step();
    w.display();
  };

  setButton(Chap0.gaussianWalk.id, p);
};
new p5(gWalk, Chap0.gaussianWalk.id);

// an Almost Levy Flight

addTitleAndDesc(Chap0.custDist);

const custDist = (p) => {
  let w;
  p.setup = () => {
    p.createCanvas(640, 320);
    w = new NearlyLevyWalker(p.width / 2, p.height / 2, p);
    p.noLoop();
  };
  p.draw = () => {
    w.step();
    w.display();
  };

  setButton(Chap0.custDist.id, p);
};
new p5(custDist, Chap0.custDist.id);

// Exercise 6

addTitleAndDesc(Chap0.monteCarloWalker);

const monteCarlo = (p) => {
  let w;
  let stepSize = 0;
  p.setup = () => {
    p.createCanvas(640, 320);
    w = new MonteCarloWalker(p.width / 2, p.height / 2, p);
    p.noLoop();
    p.textSize(16);
  };
  p.draw = () => {
    w.step();
    w.display();
    stepSize += Math.sqrt(w.stepX ** 2 + w.stepY ** 2);
    p.noStroke();
    p.rect(460, 25, 400, 32);

    p.text(
      `Average Step size: ${Math.round(stepSize / p.frameCount)}`,
      460,
      50
    );
  };

  setButton(Chap0.monteCarloWalker.id, p);
};
new p5(monteCarlo, Chap0.monteCarloWalker.id);

// Monte Carlo Distribution y=x^2

addTitleAndDesc(Chap0.monteCarloDist);

const monteCarloDist = (p) => {
  const randomCounts = Array.from(
    {
      length: 100,
    },
    () => 0
  );

  let total = 0;
  p.setup = function () {
    p.createCanvas(640, 320);
    p.noLoop();
    p.textSize(16);
  };
  p.draw = function () {
    p.background(255);
    const mc = monteCarlo(randomCounts.length);
    const index = Math.floor(mc);
    // const index = Math.floor(p.random(randomCounts.length));
    randomCounts[index]++;
    p.stroke(0);
    p.fill(175);
    const w = p.width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
      p.rect(x * w, p.height - randomCounts[x], w - 1, randomCounts[x]);
    }

    total += mc;

    p.noStroke();
    p.fill(255);
    p.rect(460, 25, 400, 32);
    p.fill(0);
    p.text(`Average: ${Math.round(total / p.frameCount)}`, 460, 50);
  };

  const monteCarlo = (max) => {
    let r1, r2;

    do {
      r1 = p.random(max);
      r2 = p.random(max);
    } while (r2 > r1 ** 2);
    // console.log(r1)
    return r1;
  };

  setButton(Chap0.monteCarloDist.id, p);
};
new p5(monteCarloDist, Chap0.monteCarloDist.id);

addTitleAndDesc(Chap0.perlinPearl);
const perlinPearl = (p) => {
  let t = 0;

  p.setup = () => {
    p.createCanvas(640, 480);
    p.noLoop();
    p.frameRate(60);
  };
  p.draw = () => {
    p.background(0);
    p.fill(255);

    t += 0.005;
    const x = p.map(p.noise(t), 0, 1, 0, p.width, p.width);
    p.ellipse(x, p.height / 2, 40, 40);
  };

  setButton(Chap0.perlinPearl.id, p);
};
new p5(perlinPearl, Chap0.perlinPearl.id);

addTitleAndDesc(Chap0.perlinGraph);
const perlinNoiseGraph = (p) => {
  let t = 1;

  p.setup = () => {
    p.createCanvas(1000, 200);
    let t = p.random(0, 1000);
    let prev = { x: 0, y: 0 };
    for (let i = 0; i < p.width; i += 1) {
      let y = p.map(p.noise(t), 0, 1, p.height * 0.25, p.height * 0.75);
      p.point(i, y);
      p.line(prev.x, prev.y, i, y);
      prev = { x: i, y: y };
      t += 0.05;
    }
    p.noLoop();
  };
  p.draw = () => {
    p.background(255);
    let prev = { x: 0, y: 0 };
    for (let i = 0; i < p.width; i += 1) {
      let y = p.map(p.noise(t), 0, 1, p.height * 0.25, p.height * 0.75);
      // p.point(i,y);
      p.line(prev.x, prev.y, i, y);
      prev = { x: i, y: y };
      t += 0.05;
    }
    t = 1 + p.frameCount * 0.05;
  };

  setButton(Chap0.perlinGraph.id, p);
};
new p5(perlinNoiseGraph, Chap0.perlinGraph.id);

addTitleAndDesc(Chap0.perlinWalker);

const pWalker = (p) => {
  let w;
  p.setup = () => {
    p.createCanvas(600, 600);
    w = new PerlinNoiseWalker(p.width / 2, p.height / 2, p);
    p.noLoop();
  };
  p.draw = () => {
    w.step();
    w.display();
  };

  setButton(Chap0.perlinWalker.id, p);
};
new p5(pWalker, Chap0.perlinWalker.id);

addTitleAndDesc(Chap0.perlinWalkerByStepSize);

const pWalkSize = (p) => {
  let w;
  p.setup = () => {
    p.createCanvas(600, 600);
    w = new PerlinNoiseWalker(p.width / 2, p.height / 2, p);
    p.noLoop();
  };
  p.draw = () => {
    w.PerlinSizeStep();
    w.display();
  };

  setButton(Chap0.perlinWalkerByStepSize.id, p);
};
new p5(pWalkSize, Chap0.perlinWalkerByStepSize.id);

// 2d Noise

addTitleAndDesc(Chap0.perlin2d);

const nosie2d = (p) => {
  let xOff = 0;
  let zOff = 0;
  p.setup = () => {
    p.createCanvas(300, 300);
    p.loadPixels();

    // p.noiseDetail(10, .71)

    for (let x = 0; x < p.width; x++) {
      let yOff = 0;
      for (let y = 0; y < p.height; y++) {
        let bright = p.map(p.noise(xOff, yOff, zOff), 0, 1, 0, 255);
        // console.log(bright)
        changePixelColor(x, y, bright, bright, bright);
        yOff += 0.005;
      }
      xOff += 0.005;
    }
    p.updatePixels();
    xOff = 0;
    yOff = 0;

    p.noLoop();
  };
  p.draw = () => {};

  function changePixelColor(x, y, r, g, b) {
    var index = (x + y * p.width) * 4;
    p.pixels[index + 0] = r;
    p.pixels[index + 1] = g;
    p.pixels[index + 2] = b;
    p.pixels[index + 3] = 255;
  }
};
new p5(nosie2d, Chap0.perlin2d.id);

// 3d Terrain

addTitleAndDesc(Chap0.perlinTerrain);

const noiseElevation = (p) => {
  let cols = 0;
  let rows = 0;
  const SCL = 20;
  let w = 1000;
  let h = 1000;

  let xOff = 0;
  let yOff = 0;
  let terrain

  p.setup = () => {
      p.createCanvas(600, 600, p.WEBGL);

      cols = w / SCL;
      rows = h / SCL;

       terrain = Array.from({length: rows}, () => {
          return Array.from({length: cols})
        })

      for(let i = 0; i <rows; i++) {
          xOff = 0;
          for(let k = 0; k < cols; k++) {
              terrain[k][i] = p.map(p.noise(xOff,yOff), 0, 1, -100, 100)
              xOff += .1
            }
            yOff += .1;
      }
      p.background(0);
      p.stroke(255);
      p.fill(200, 200, 200, 50);
  
      // p.translate(p.width /2, p.height /2 )
      p.rotateX(p.PI / 3)
      p.translate(-w/2, -h/2)
  
      for (let y = 0; y < rows - 1; y++) {
          p.beginShape(p.TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
          p.vertex(x* SCL, y * SCL,terrain[x][y])
          p.vertex(x* SCL, (y + 1) * SCL, terrain[x][y + 1])
        }
        p.endShape();
      }

  };
  p.draw = () => {
   
  };
};
new p5(noiseElevation);

