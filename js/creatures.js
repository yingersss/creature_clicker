function collectRabbitFur() {
    if (rabbitHealthCount > 0) {
        rabbitHealthCount -= playerAttack;
        document.getElementById("rabbitHealthCount").textContent = rabbitHealthCount;
    }

    if (rabbitHealthCount <= 0) {
        rabbitFurCount++;
        document.getElementById("rabbitFurCount").textContent = rabbitFurCount;
        setTimeout(respawnRabbit, 0);
    }

    updateUI();
}

function respawnRabbit() {
    rabbitHealthCount = 100;
    document.getElementById("rabbitHealthCount").textContent = rabbitHealthCount;
}


function collectFoxPelt() {
    if (!foxUnlocked) return;

    if (foxHealthCount > 0) {
        foxHealthCount = Math.max(0, foxHealthCount - playerAttack);
    }
    if (foxHealthCount === 0) {
        foxPeltCount++;
        setTimeout(respawnFox, 10);
    }
    updateUI();
}

function respawnFox() {
    foxHealthCount = 150;
    updateUI();
}

function unlockFox() {
    if (rabbitFurCount >= 1) {
        rabbitFurCount -= 1;
        document.getElementById("fox").src = "/images/fox.png";
        document.getElementById("fox_pelt").src = "/images/fox_pelt.png";
        document.getElementById("fox").classList.remove("locked");
        document.getElementById("unlockFox").style.display = "none";
        foxUnlocked = true;
        updateUI();
    }
}

function collectBoarHide() {
    if (!boarUnlocked) return;

    if (boarHealthCount > 0) {
        boarHealthCount = Math.max(0, boarHealthCount - playerAttack);
    }

    if (boarHealthCount === 0) {
        boarHideCount++;
        setTimeout(respawnBoar, 10);
    }
    updateUI();
}

function respawnBoar() {
    boarHealthCount = 200;
    updateUI();
}

function unlockBoar() {
    if (foxPeltCount >= 1) {
        foxPeltCount -= 1;
        document.getElementById("boar").src = "/images/boar.png";
        document.getElementById("boar_hide").src = "/images/boar_hide.png";
        document.getElementById("boar").classList.remove("locked");
        document.getElementById("unlockBoar").style.display = "none";
        boarUnlocked = true;
        updateUI();
    }
}
