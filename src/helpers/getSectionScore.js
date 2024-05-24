

export function getSectionScore({ currentDieRoll, sectionID }) {

    // Turn the currentDieRoll into an array of the die face values
    const dieArray = Object.values(currentDieRoll).map(die => die.num)

    // Turn the currentDieRoll into a Map for easy processing
    const countMap = new Map()
    for (let num of dieArray) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1)
        } else {
            countMap.set(num, 1)
        }
    }

    // Add the roll together for easy processing
    let dieTotal = 0
    for (let num of dieArray) {
        dieTotal = dieTotal + num
    }

     // Helper function to check for a straight
    function checkStraight(requiredLength) {
        const uniqueDieFaces = [...new Set(dieArray)].sort();
        let maxLength = 1;
        let currentLength = 1;

        for (let i = 1; i < uniqueDieFaces.length; i++) {
            if (uniqueDieFaces[i] === uniqueDieFaces[i - 1] + 1) {
                currentLength++;
            } else {
                currentLength = 1;
            }
            maxLength = Math.max(maxLength, currentLength);
        }

        return maxLength >= requiredLength;
    }

    // for each section run through the die rolls and check for the final outcome
    if (sectionID === "ones") {
        if (countMap.has(1)) return countMap.get(1)
        return 0
    } else if (sectionID === "twos") {
        if (countMap.has(2)) return countMap.get(2) * 2
        return 0
    } else if (sectionID === "threes") {
        if (countMap.has(3)) return countMap.get(3) * 3
        return 0
    } else if (sectionID === "fours") {
        if (countMap.has(4)) return countMap.get(4) * 4
        return 0
    } else if (sectionID === "fives") {
        if (countMap.has(5)) return countMap.get(5) * 5
        return 0
    } else if (sectionID === "sixes") {
        if (countMap.has(6)) return countMap.get(6) * 6
        return 0
    } else if (sectionID === "threeOfAKind") {
        for (let count of countMap.values()) {
            if (count === 3 || count === 4 || count === 5) return dieTotal;
        }
        return 0
    } else if (sectionID === "fourOfAKind") {
        for (let count of countMap.values()) {
            if (count === 4 || count === 5) return dieTotal;
        }
        return 0
    } else if (sectionID === "fullHouse") {
        let hasThree = false;
        let hasTwo = false;
        let hasYahtzee = false

        // checks for the full house or yahtzee
        for (let count of countMap.values()) {
            if (count === 3) hasThree = true;
            if (count === 2) hasTwo = true;
            if (count === 5) hasYahtzee = true
        }

        if ((hasThree && hasTwo) || hasYahtzee) return 25; // Typically, full house scores 25 points in Yahtzee
        return 0;
    } else if (sectionID === 'smallStraight') {
        if (checkStraight(4)) return 30; // Typically, small straight scores 30 points
        return 0;
    } else if (sectionID === 'largeStraight') {
        if (checkStraight(5)) return 40; // Typically, large straight scores 40 points
        return 0;
    } else if (sectionID === "yahtzee") {
        for (let count of countMap.values()) {
            if (count === 5) return 50; // Typically, Yahtzee scores 50 points
        }
        return 0;
    } else if (sectionID === "chance") {
        return dieTotal
    }

    return "I don't know bro"
}

