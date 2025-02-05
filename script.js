let playerAttack = 20;
// rabbit
let rabbitFurCount = 0;
let healthCount = 100;
// fox
let foxPeltCount = 0;
let foxHealthCount = 150;
let foxUnlocked = false;
// boar
let boarHealthCount = 200;
let boarUnlocked = false;
let boarHideCount = 0; // FIXED: Initialized boarHideCount

function collectRabbitFur() {
    if (healthCount > 0) {
        healthCount -= playerAttack; 
        document.getElementById("healthCount").textContent = healthCount;
    }
    if (healthCount <= 0) {
        rabbitFurCount++;
        document.getElementById("rabbitFurCount").textContent = rabbitFurCount;
        setTimeout(respawnRabbit, 10);
    }
}

function respawnRabbit() {
    healthCount = 100;
    document.getElementById("healthCount").textContent = healthCount;
}

function collectFoxPelt() {
    if (!foxUnlocked) return;

    if (foxHealthCount > 0) {
        foxHealthCount -= playerAttack; 
        document.getElementById("foxHealthCount").textContent = foxHealthCount;
    }
    if (foxHealthCount <= 0) {
        foxPeltCount++;
        document.getElementById("foxPeltCount").textContent = foxPeltCount;
        setTimeout(respawnFox, 10);
    }
}

function respawnFox() {
    foxHealthCount = 150;
    document.getElementById("foxHealthCount").textContent = foxHealthCount;
}

function unlockFox() {
    if (rabbitFurCount >= 1) {
        rabbitFurCount -= 1;
        var image = document.getElementById("fox");
        image.src = "/images/fox.png";
        var image2 = document.getElementById("fox_pelt");
        image2.src = "/images/fox_pelt.png";
        document.getElementById("rabbitFurCount").textContent = rabbitFurCount;
        document.getElementById("fox").classList.remove("locked");
        document.getElementById("unlockFox").style.display = "none";
        foxUnlocked = true;
    }
}

function collectBoarHide() {
    if (!boarUnlocked) return; // Ensure the boar is unlocked

    if (boarHealthCount > 0) {
        boarHealthCount -= playerAttack; 
        document.getElementById("boarHealthCount").textContent = boarHealthCount;
    }

    if (boarHealthCount <= 0) {
        boarHideCount++; // Ensure pelt count is increasing
        document.getElementById("boarHideCount").textContent = boarHideCount;
        setTimeout(respawnBoar, 10);
    }
}


function respawnBoar() {
    boarHealthCount = 200; // FIXED: Assigning the correct variable
    document.getElementById("boarHealthCount").textContent = boarHealthCount;
}


function unlockBoar() {
    if (foxPeltCount >= 1) {  // FIXED: Changed foxFurCount to foxPeltCount
        foxPeltCount -= 1;
        var image = document.getElementById("boar");
        image.src = "/images/boar.png";
        var image2 = document.getElementById("boar_hide");
        image2.src = "/images/boar_hide.png";
        document.getElementById("foxPeltCount").textContent = foxPeltCount; // FIXED: Corrected element ID
        document.getElementById("boar").classList.remove("locked");
        document.getElementById("unlockBoar").style.display = "none";
        boarUnlocked = true;
    }
}
