// TODO: add support for hourly wages
const frequencies = {
    'Daily': 365,
    'Weekly': 52,
    'Bi-weekly': 26,
    'Monthly': 12,
    'Quarterly': 4,
    'Yearly': 1
};

const standardDeduction = {
    single: 12550,
    marriedSeparate: 12550,
    headOfHousehold: 18800,
    marriedJoint: 25100,
};

export const calculateIncomeTotal = (incomeList) => {
    if (incomeList.length > 0) {
        const amounts = incomeList.map((income) => parseFloat(income.amount) * frequencies[income.frequency]);
        return amounts.reduce((total, amount) => {
            return total + amount;
        });
    } else {
        return 0;
    };
};

export const calculateExpenseTotal = (expenseList) => {
    const costs = expenseList.map((expense) => parseFloat(expense.cost) * frequencies[expense.frequency]);
    return costs.reduce((total, amount) => {
        return total + amount;
    });
};

export const calculateIncomeTax = (grossIncome, filingStatus) => {
    if (grossIncome === 0) {
        return 0;
    };

    const deductedIncome = grossIncome - standardDeduction[filingStatus];
    const calculateBracket = (rate, lowerBound, upperBound) => {
        return (upperBound - lowerBound) * rate;
    };

    const brackets = {
        single: {
            10: {
                rate: 0.1,
                lowerBound: 0,
                upperBound: 10275,
                full: calculateBracket(0.1, 0, 10275)
            },
            12: {
                rate: 0.12,
                lowerBound: 10276,
                upperBound: 41775,
                full: calculateBracket(0.12, 10276, 41775)
            },
            22: {
                rate: 0,
                lowerBound: 41776,
                upperBound: 89075,
                full: calculateBracket(0.22, 41776, 89075)
            },
            24: {
                rate: 0.24,
                lowerBound: 89076,
                upperBound: 170050,
                full: calculateBracket(0.24, 89076, 170050)
            },
            32: {
                rate: 0.32,
                lowerBound: 170051,
                upperBound: 215950,
                full: calculateBracket(0.32, 170051, 215950)
            },
            35: {
                rate: 0.35,
                lowerBound: 215951,
                upperBound: 539900,
                full: calculateBracket(0.35, 215951, 539900)
            },
            37: {
                rate: 0.37,
                lowerBound: 539901,
                upperBound: Infinity,
            }

        },
        marriedJoint: {
            10: {
                rate: 0.1,
                lowerBound: 0,
                upperBound: 20550,
                full: calculateBracket(0.1, 0, 20550)
            },
            12: {
                rate: 0.12,
                lowerBound: 20551,
                upperBound: 83550,
                full: calculateBracket(0.12, 20551, 83550)
            },
            22: {
                rate: 0.22,
                lowerBound: 83551,
                upperBound: 178150,
                full: calculateBracket(0.22, 83551, 178150)
            },
            24: {
                rate: 0.24,
                lowerBound: 178151,
                upperBound: 340100,
                full: calculateBracket(0.24, 178151, 340100)
            },
            32: {
                rate: 0.32,
                lowerBound: 340101,
                upperBound: 431900,
                full: calculateBracket(0.32, 340101, 431900)
            },
            35: {
                rate: 0.35,
                lowerBound: 431901,
                upperBound: 647850,
                full: calculateBracket(0.35, 431901, 647850)
            },
            37: {
                rate: 0.37,
                lowerBound: 647851,
                upperBound: Infinity,
            }
        },
        marriedSeparate: {
            10: {
                rate: 0.1,
                lowerBound: 0,
                upperBound: 10275,
                full: calculateBracket(0.1, 0, 10275)
            },
            12: {
                rate: 0.12,
                lowerBound: 10276,
                upperBound: 41775,
                full: calculateBracket(0.12, 10276, 41775)
            },
            22: {
                rate: 0.22,
                lowerBound: 41776,
                upperBound: 89075,
                full: calculateBracket(0.22, 41776, 89075)
            },
            24: {
                rate: 0.24,
                lowerBound: 89076,
                upperBound: 170050,
                full: calculateBracket(0.24, 89076, 170050)
            },
            32: {
                rate: 0.32,
                lowerBound: 170051,
                upperBound: 215950,
                full: calculateBracket(0.32, 170051, 215950)
            },
            35: {
                rate: 0.35,
                lowerBound: 215951,
                upperBound: 323925,
                full: calculateBracket(0.35, 215951, 323925)
            },
            37: {
                rate: 0.37,
                lowerBound: 323926,
                upperBound: Infinity,
            }
        }
    }

    let remainder = deductedIncome;
    let status = brackets[filingStatus];
    let tax = 0;
    for (let bracket in status) {
        if (remainder > status[bracket].upperBound) {
            remainder = remainder - (status[bracket].upperBound - status[bracket].lowerBound);
            tax = tax + status[bracket].full;
        } else {
            tax = tax + (remainder * status[bracket].rate);
            break;
        }
    }
    return tax;
}





// const headOfHousehold = {
// };
