const frequencies = {
    'Daily': 365,
    'Weekly': 52,
    'Bi-weekly': 26,
    'Monthly': 12,
    'Quarterly': 4
};

export const calculateIncomeTotal = (incomeList) => {
    const amounts = incomeList.map((income) => parseInt(income.amount) * frequencies[income.frequency]);
    return amounts.reduce((total, amount) => {
        return total + amount;
    });
};

export const calculateExpenseTotal = (expenseList) => {
    return expenseList.reduce((total, amount) => {
        return total + amount;
    }, 0);
};

export const calculateBracket = (rate, lowerBound, upperBound) => {
    return Math.round((upperBound - lowerBound) * rate);
}

export const calculateSingleTax = (grossIncome) => {
    // TODO: add standard deduction? does it matter?
    const brackets = {
        10: {
            rate: 0.1,
            lowerBound: 0,
            upperBound: 9950,
            full: calculateBracket(0.1, 0, 9950)
        },
        12: {
            rate: 0.12,
            lowerBound: 9951,
            upperBound: 40525,
            full: calculateBracket(0.12, 9951, 40525)
        },
        22: {
            rate: 0,
            lowerBound: 40526,
            upperBound: 86375,
            full: calculateBracket(0.22, 40526, 86375)
        },
        24: {
            rate: 0.24,
            lowerBound: 86376,
            upperBound: 167925,
            full: calculateBracket(0.24, 86376, 167925)
        },
        32: {
            rate: 0.32,
            lowerBound: 167926,
            upperBound: 209425,
            full: calculateBracket(0.32, 167926, 209425)
        },
        35: {
            rate: 0.35,
            lowerBound: 209426,
            upperBound: 523600,
            full: calculateBracket(0.35, 209426, 523600)
        },
        37: {
            rate: 0.37,
            lowerBound: 523601,
            upperBound: Infinity,
        }
    };

    let remainder = grossIncome;
    let tax = 0;
    for (let bracket in brackets) {
        if (remainder > brackets[bracket].upperBound) {
            remainder = remainder - (brackets[bracket].upperBound - brackets[bracket].lowerBound);
            tax = tax + brackets[bracket].full;
        } else {
            tax = tax + (remainder * brackets[bracket].rate);
            break;
        }
    }
    return tax;
}

// const marriedJoint = {

// };

// const marriedSeparate = {

// };

// const headOfHousehold = {
// };