function updateRabbitHunterDamage() {
    return rabbitHunterAttack * rabbitHunterCount;
}

function buyRabbitHunter() {
    if (rabbitFurCount >= 1) {
        rabbitFurCount -= 1;
        rabbitHunterCount++;
        updateUI();
    }
}

function buyRabbitHunterUpgrade() {
    if (rabbitFurCount >= 1) {
        rabbitFurCount -= 1;
        rabbitHunterAttack++;
        updateUI();
    }
}

function startRabbitHunterInterval() {
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
}

