const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const exitButton = document.querySelector('.exit-button');
const levelButtons = document.querySelector('.level-buttons');
const storyButton = document.querySelector('.story-button');
const readStory = document.getElementById('read-story');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 20;      // Radius of each dot
const spacing = 20;     // Spacing between dots
// Array to store the random number assigned to each circle
let circleData = [];

let guesses = 0;        // Number of guesses
let score = 1;          // Player's score

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

    // Validate that the range of numbers is sufficient
    const minNum = 1;
    if (maxNum - minNum + 1 < numCircles) {
        console.error("The range of numbers is too small to ensure unique values.");
        return;
    }

    // Set the styles
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Arial";

    // Draw the circles and unique random numbers inside them
    circlePositions.forEach((pos) => {
        // Generate a random number within the specified range
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        }
        while (usedNumbers.has(randomNumber));
        
        // Add the number to the set of used numbers
        usedNumbers.add(randomNumber);

        circleData.push({
            x: pos.x,
            y: pos.y,
            radius: radius,
            number: randomNumber,
            visible: false      // Initially the number is hidden
        });

        ctx.fillStyle = pos.fill;
        ctx.strokeStyle = pos.stroke;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
        ctx.fill(); ctx.stroke();
    });

    // Display initial score and guesses
    updateScore();
}

// Update Player score and Guess count
function updateScore() {
    ctx.clearRect(0, 0, canvas.width, 50);      // Clear the area where score and guesses are displayed
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${score}`, 50, 20);
    ctx.fillText(`Guesses: ${guesses}`, canvas.width - 150, 20);
}

// Function to handle user clicks on the canvas
function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if the click was inside the circle
    circleData.forEach(circle => {
        const distance = Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2);
        if (distance < circle.radius && !circle.visible) {
            // Reveal the numer for the clicked circle
            circle.visible = true;
            ctx.fillStyle = '#F1F08A';
            ctx.strokeStyle = '#C6CD78';
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            // Increment guesses
            guesses++;

            // Check if the revealed number is 13
            ctx.fillStyle = '#000000';
            ctx.fillText(circle.number, circle.x, circle.y);

            if (circle.number === 13) {
                if (score > 130) {
                    score = score * 13 - guesses;
                } else {
                    score *= 13;       // Award current score * 13 for finding the number 13
                }
                winAlert();
            } else {
                // Deduct points for incorrect guesses
                if (score > 130)
                    score -= 10;
            }

            // Update score and guesses display
            updateScore();
        }
    });
}

// When Player Wins the game
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

// Show the ame and hide the level buttons
function startGame(levelNumber) {
    canvas.style.display = "block";
    readStory.style.display = "none";
    exitButton.style.display = "none";
    levelButtons.style.display = "none";
    storyButton.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Reset the number of guesses
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
    readStory.innerHTML = "";
    
    const paraStory1 = document.createElement("p");
    
    paraStory1.innerHTML += "The number \"13\" is the third centered square number.  In elementary number theory, a centered square number is a centered <a href='https://en.wikipedia.org/wiki/Figurate_number' class='link-3d-perspective'>figurate number</a> that gives the number of dots in a square with a dot in the center and all other dots surrounding the center dot in successive square layers.";
    
    paraStory1.innerHTML += "<span style='font-style: italic;'><a href='https://en.wikipedia.org/wiki/Centered_square_number' class='link-3d-push'>&laquo; Wikipedia &raquo;</a>";

    readStory.appendChild(paraStory1);

    const paraStory2 = document.createElement("p");

    paraStory2.innerHTML += "There is another part to this game I wish to continue with.  The number \"13\" is the second star number, still a centered <a href='https://en.wikipedia.org/wiki/Figurate_number' class='link-3d-perspective'>figurate number</a>, but a centered hexagram, which is a 6-pointed star, such as the Star of David, or the board <a href='https://en.wikipedia.org/wiki/Chinese_checkers' class='link-3d-perspective'>Chinese checkers</a>.";

    paraStory2.innerHTML += "<span style='font-style: italic;'><a href='https://en.wikipedia.org/wiki/Star_number' class='link-3d-push'>&laquo; Wikipedia &raquo;</a>"

    readStory.appendChild(paraStory2);
}

// Hide the game and show the level buttons again
function exitGame() {
    canvas.style.display = "none";
    readStory.style.display = "none";    
    exitButton.style.display = "none";
    levelButtons.style.display = "block";
    storyButton.style.display = "block";
}

// Add event listeners for the level buttons
document.getElementById('level1').addEventListener('click', () => startGame(13));
document.getElementById('level2').addEventListener('click', () => startGame(25));
document.getElementById('level3').addEventListener('click', () => startGame(41));

// Add event listener for the story button
document.getElementById('story').addEventListener('click', viewStory);

// Add event listener for the exit button
document.getElementById('exit').addEventListener('click', exitGame);
drawCenteredSquare(41, 41);
