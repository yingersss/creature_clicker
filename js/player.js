function buyAttackUpgrade() {
    if (rabbitFurCount >= 1) {
        rabbitFurCount -= 1;
        playerAttack += 1;
        updateUI();
    }
}
