function buyUpgrade(upgradeType, cost) {
    if (rabbitFurCount >= cost) {
        rabbitFurCount -= cost;

        if (upgradeType === "attack") {
            playerAttack += 1;
        } else if (upgradeType === "hunter") {
            rabbitHunterCount += 1;
        } else if (upgradeType === "hunterAttack") {
            rabbitHunterAttack += 1;
        }

        updateUI();
    }
}
