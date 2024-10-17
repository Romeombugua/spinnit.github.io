const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank'];
let predeterminedWinner = 'Alice';

function updateSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.innerHTML = '';
    const totalSections = names.length;
    
    names.forEach((name, index) => {
        const angle = (index / totalSections) * 360;
        const sectionAngle = 360 / totalSections;
        
        const nameElement = document.createElement('div');
        nameElement.className = 'name';
        nameElement.textContent = name;

        // Rotate each section based on its position in the spinner
        nameElement.style.transform = `rotate(${angle}deg) translate(0, -135px) rotate(${sectionAngle / 2}deg)`;
        spinner.appendChild(nameElement);
    });
}

function spin() {
    const spinner = document.getElementById('spinner');
    let winnerIndex;
    
    if (predeterminedWinner && names.includes(predeterminedWinner)) {
        winnerIndex = names.indexOf(predeterminedWinner);
    } else {
        winnerIndex = Math.floor(Math.random() * names.length);
    }

    const rotation = 360 * 5 + (340 - (winnerIndex / names.length) * 360);
    console.log(`Spinning to ${rotation} degrees`);
    spinner.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        alert(`The winner is: ${names[winnerIndex]}!`);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
    }, 5000);
}

// Initialize the spinner
updateSpinner();

// Add event listener to the spin button
document.getElementById('spin-button').addEventListener('click', spin);


