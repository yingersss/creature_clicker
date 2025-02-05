function updateUI() {
    document.getElementById("rabbitFurCount").textContent = rabbitFurCount;
    document.getElementById("attackPower").textContent = playerAttack;
    document.getElementById("rabbitHunterCount").textContent = rabbitHunterCount;
    document.getElementById("rabbitHunterDamage").textContent = rabbitHunterAttack * rabbitHunterCount;
    document.getElementById("rabbitHealthCount").textContent = rabbitHealthCount;
}
