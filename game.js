const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const exitButton = document.querySelector('.exit-button');
const levelButtons = document.querySelector('.level-buttons');
const storyButton = document.querySelector('.story-button');
const readStory = document.getElementById('read-story');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 20;
const spacing = 20;

let circleData = [];

let guesses = 0;
let score = 1;

function drawCenteredSquare(numCircles, maxNum, fill, stroke) {
    const circlePositions = [];
    const usedNumbers = new Set();
    circleData = [];

    switch(numCircles) {
        case 1:
            circlePositions.push({ x: centerX, y: centerY, fill: "#F1F08A", stroke: "#C6CD78" });
            break;
        case 5:
            circlePositions.push(
                { x: centerX, y: centerY, fill: "#F1F08A", stroke: "#C6CD78" },

                { x: centerX, y: centerY - 50, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX + 50, y: centerY, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX, y: centerY + 50, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX - 50, y: centerY, fill: "#FECEA8", stroke: "#FF847C" }
            );
            break;
        case 13:
            circlePositions.push(
                { x: centerX, y: centerY, fill: "#F1F08A", stroke: "#C6CD78" },

                { x: centerX, y: centerY - 50, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX + 50, y: centerY, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX, y: centerY + 50, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX - 50, y: centerY, fill: "#FECEA8", stroke: "#FF847C" },

                { x: centerX, y: centerY - 100, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 50, y: centerY - 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 100, y: centerY, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 50, y: centerY + 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX, y: centerY + 100, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 50, y: centerY + 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 100, y: centerY, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 50, y: centerY - 50, fill: "#F4E557", stroke: "#F5A855" }
            );
            break;
        case 25:
            fill = "#EEC89F";
            stroke = "#EA5FF2D";
            circlePositions.push(
                { x: centerX, y: centerY, fill: "#F1F08A", stroke: "#C6CD78" },

                { x: centerX, y: centerY - 50, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX + 50, y: centerY, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX, y: centerY + 50, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX - 50, y: centerY, fill: "#FECEA8", stroke: "#FF847C" },

                { x: centerX, y: centerY - 100, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 50, y: centerY - 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 100, y: centerY, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 50, y: centerY + 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX, y: centerY + 100, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 50, y: centerY + 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 100, y: centerY, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 50, y: centerY - 50, fill: "#F4E557", stroke: "#F5A855" },

                { x: centerX, y: centerY - 150, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 50, y: centerY - 100, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 100, y: centerY - 50, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 150, y: centerY, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 100, y: centerY + 50, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 50, y: centerY + 100, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX, y: centerY + 150, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 50, y: centerY + 100, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 100, y: centerY + 50, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 150, y: centerY, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 100, y: centerY - 50, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 50, y: centerY - 100, fill: "#EEC89F", stroke: "#EA5FF2D" }
            );
            break;
        case 41:
            fill = "#FFCCCC";
            stroke = "#FB7777";
            circlePositions.push(
                { x: centerX, y: centerY, fill: "#F1F08A", stroke: "#C6CD78" },

                { x: centerX, y: centerY - 50, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX + 50, y: centerY, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX, y: centerY + 50, fill: "#FECEA8", stroke: "#FF847C" },
                { x: centerX - 50, y: centerY, fill: "#FECEA8", stroke: "#FF847C" },

                { x: centerX, y: centerY - 100, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 50, y: centerY - 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 100, y: centerY, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX + 50, y: centerY + 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX, y: centerY + 100, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 50, y: centerY + 50, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 100, y: centerY, fill: "#F4E557", stroke: "#F5A855" },
                { x: centerX - 50, y: centerY - 50, fill: "#F4E557", stroke: "#F5A855" },

                { x: centerX, y: centerY - 150, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 50, y: centerY - 100, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 100, y: centerY - 50, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 150, y: centerY, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 100, y: centerY + 50, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX + 50, y: centerY + 100, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX, y: centerY + 150, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 50, y: centerY + 100, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 100, y: centerY + 50, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 150, y: centerY, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 100, y: centerY - 50, fill: "#EEC89F", stroke: "#EA5FF2D" },
                { x: centerX - 50, y: centerY - 100, fill: "#EEC89F", stroke: "#EA5FF2D" },

                { x: centerX, y: centerY - 200, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX + 50, y: centerY - 150, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX + 100, y: centerY - 100, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX + 150, y: centerY - 50, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX + 200, y: centerY, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX + 150, y: centerY + 50, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX + 100, y: centerY + 100, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX + 50, y: centerY + 150, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX, y: centerY + 200, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX - 50, y: centerY + 150, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX - 100, y: centerY + 100, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX - 150, y: centerY + 50, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX - 200, y: centerY, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX - 150, y: centerY - 50, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX - 100, y: centerY - 100, fill: "#FFCCCC", stroke: "#FB7777" },
                { x: centerX - 50, y: centerY - 150, fill: "#FFCCCC", stroke: "#FB7777" }
            );
            break;
        default:
            console.error("Unsupported number of circles");
            return;
    }

    const minNum = 1;
    if (maxNum - minNum + 1 < numCircles) {
        console.error("The range of numbers is too small to ensure unique values.");
        return;
    }

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Arial";

    circlePositions.forEach((pos) => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        }
        while (usedNumbers.has(randomNumber));
        
        usedNumbers.add(randomNumber);

        circleData.push({
            x: pos.x,
            y: pos.y,
            radius: radius,
            number: randomNumber,
            visible: false
        });

        ctx.fillStyle = pos.fill;
        ctx.strokeStyle = pos.stroke;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
        ctx.fill(); ctx.stroke();
    });

    updateScore();
}

function updateScore() {
    ctx.clearRect(0, 0, canvas.width, 50);
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${score}`, 50, 20);
    ctx.fillText(`Guesses: ${guesses}`, canvas.width - 150, 20);
}

function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    circleData.forEach(circle => {
        const distance = Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2);
        if (distance < circle.radius && !circle.visible) {
            circle.visible = true;
            ctx.fillStyle = '#F1F08A';
            ctx.strokeStyle = '#C6CD78';
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            guesses++;

            ctx.fillStyle = '#000000';
            ctx.fillText(circle.number, circle.x, circle.y);

            if (circle.number === 13) {
                if (score > 130) {
                    score = score * 13 - guesses;
                } else {
                    score *= 13;
                }
                winAlert();
            } else {
                if (score > 130)
                    score -= 10;
            }
            updateScore();
        }
    });
}

function winAlert() {
    canvas.style.display = "block";
    readStory.style.display = "none";
    exitButton.style.display = "block";
    levelButtons.style.display = "none";
    storyButton.style.display = "none";

    ctx.fillStyle = "#EBC49F";
    ctx.strokeStyle = "#D37676";
    ctx.fillRect(centerX - 200, centerY - 100, 300, 100);
    ctx.strokeRect(centerX - 200, centerY - 100, 300, 100);

    ctx.fillStyle = "#FF6868";
    ctx.font = "24px Arial";
    ctx.fillText("You found the number 13!", centerX - 50, centerY - 50);
    ctx.fillText(`Within ${guesses} guesses!`, centerX - 50, centerY - 20);

    canvas.removeEventListener('click', handleClick, false);
}

function startGame(levelNumber) {
    canvas.style.display = "block";
    readStory.style.display = "none";
    exitButton.style.display = "none";
    levelButtons.style.display = "none";
    storyButton.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    guesses = 0;
    
    switch (levelNumber) {
        case 13:
            drawCenteredSquare(13, 13);
            break;
        case 25:
            drawCenteredSquare(25, 25);
            break;
        case 41:
            drawCenteredSquare(41, 41);
            break;
        default:
            console.error("Unsupported level!");
            return;
    }

    canvas.addEventListener("click", handleClick);
}

function viewStory() {
    canvas.style.display = "none";
    readStory.style.display = "block";
    exitButton.style.display = "block";
    levelButtons.style.display = "none";
    storyButton.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    readStory.innerHTML += "The number \"13\" is the third centered square number.  In elementary number theory, a centered square number is a centered figurate number that gives the number of dots in a square with a dot in the center and all other dots surrounding the center dot in successive square layers.";
    
    readStory.innerHTML += "<span style='font-style: italic;'>&laquo; <a href='https://en.wikipedia.org/wiki/Centered_square_number'>Wikipedia</a> &raquo;";
}

function exitGame() {
    canvas.style.display = "none";
    readStory.style.display = "none";    
    exitButton.style.display = "none";
    levelButtons.style.display = "block";
    storyButton.style.display = "block";
}

document.getElementById('level1').addEventListener('click', () => startGame(13));
document.getElementById('level2').addEventListener('click', () => startGame(25));
document.getElementById('level3').addEventListener('click', () => startGame(41));

document.getElementById('story').addEventListener('click', viewStory);

document.getElementById('exit').addEventListener('click', exitGame);
drawCenteredSquare(41, 41);
