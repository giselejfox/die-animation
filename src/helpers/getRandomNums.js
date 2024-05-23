export function getRandomRotation() {
    return Math.floor(Math.random() * (560 - (-560) + 1)) + (-560);
}

export function getRandomDieNum() {
    return Math.floor(Math.random() * 6) + 1;
}
