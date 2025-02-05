let playerAttack = 20;
// rabbit
let rabbitFurCount = 0;
let rabbitHealthCount = 100;
// fox
let foxPeltCount = 0;
let foxHealthCount = 150;
let foxUnlocked = false;
// boar
let boarHealthCount = 200;
let boarUnlocked = false;
let boarHideCount = 0;
// rabbit hunter
let rabbitHunterCount = 0;
let rabbitHunterAttack = 1

function updateRabbitHunterDamage() {
    let rabbitHunterDamage = rabbitHunterAttack * rabbitHunterCount;
    document.getElementById("rabbitHunterDamage").textContent = rabbitHunterDamage;
    return rabbitHunterDamage;
}

function buyAttackUpgrade() {
    if (rabbitFurCount >= 1) {  // Ensure enough resources
        rabbitFurCount -= 1;  // Deduct cost
        playerAttack += 1;  // Increase attack power
        document.getElementById("rabbitFurCount").textContent = rabbitFurCount;
        document.getElementById("attackPower").textContent = playerAttack;  // Update UI
    }
}

function rabbitHunterCollect() {
	while (rabbitHunterCount > 0) {
		if (rabbitHealthCount > 0) {
			rabbitHealthCount -= rabbitHunterDamage; // Decrease health based on hunter attack
		}
		if (rabbitHealthCount <= 0) {
			rabbitFurCount++;
			document.getElementById("rabbitFurCount").textContent = rabbitFurCount;
			setTimeout(respawnRabbit, 0);
		}
	}
}

function buyRabbitHunter() {
    if (rabbitFurCount >= 1) {
        rabbitFurCount -= 1;
        rabbitHunterCount++;
        document.getElementById("rabbitHunterCount").textContent = rabbitHunterCount; // Update UI
        document.getElementById("rabbitFurCount").textContent = rabbitFurCount; // Update Rabbit Fur UI
		updateRabbitHunterDamage(); // Update damage
    }
}

function buyRabbitHunterUpgrade() {
	if (rabbitFurCount >= 1) {
		rabbitFurCount -= 1;
		rabbitHunterAttack++;
		document.getElementById("rabbitHunterAttack").textContent = rabbitHunterAttack; // Update UI
		document.getElementById("rabbitFurCount").textContent = rabbitFurCount; // Update Rabbit Fur UI
		updateRabbitHunterDamage(); // Update damage
	}
}

// Passive damage from rabbit hunters every second
setInterval(() => {
    if (rabbitHunterCount > 0) {
		let rabbitHunterDamage = updateRabbitHunterDamage(); // gets the current damage
        let rabbitsKilled = Math.floor(rabbitHunterDamage / 100); // Full rabbits hunted
        let remainingDamage = rabbitHunterDamage % 100; // Remaining damage on a new rabbit

        if (rabbitsKilled > 0) {
            rabbitFurCount += rabbitsKilled; // Grant multiple fur based on full rabbits killed
        }

        rabbitHealthCount -= remainingDamage; // Apply leftover hunter damage

        if (rabbitHealthCount <= 0) {
            rabbitFurCount++; // Normal fur gain if a single rabbit is finished
            setTimeout(respawnRabbit, 100);
        }

        // Update UI
        document.getElementById("rabbitFurCount").textContent = rabbitFurCount;
        document.getElementById("rabbitHealthCount").textContent = rabbitHealthCount;
    }
}, 1000);


function collectRabbitFur() {
    if (rabbitHealthCount > 0) {
        rabbitHealthCount -= playerAttack; 
        document.getElementById("rabbitHealthCount").textContent = rabbitHealthCount;
    }
    if (rabbitHealthCount <= 0) {
        rabbitFurCount++;
        document.getElementById("rabbitFurCount").textContent = rabbitFurCount;
        setTimeout(respawnRabbit, 10);
    }
}

function respawnRabbit() {
    rabbitHealthCount = 100;
    document.getElementById("rabbitHealthCount").textContent = rabbitHealthCount;
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
    if (!boarUnlocked) return;

    if (boarHealthCount > 0) {
        boarHealthCount -= playerAttack; 
        document.getElementById("boarHealthCount").textContent = boarHealthCount;
    }

    if (boarHealthCount <= 0) {
        boarHideCount++;
        document.getElementById("boarHideCount").textContent = boarHideCount;
        setTimeout(respawnBoar, 10);
    }
}


function respawnBoar() {
    boarHealthCount = 200;
    document.getElementById("boarHealthCount").textContent = boarHealthCount;
}


function unlockBoar() {
    if (foxPeltCount >= 1) {  
        foxPeltCount -= 1;
        var image = document.getElementById("boar");
        image.src = "/images/boar.png";
        var image2 = document.getElementById("boar_hide");
        image2.src = "/images/boar_hide.png";
        document.getElementById("foxPeltCount").textContent = foxPeltCount;
        document.getElementById("boar").classList.remove("locked");
        document.getElementById("unlockBoar").style.display = "none";
        boarUnlocked = true;
    }
}
