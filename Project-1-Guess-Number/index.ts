import inquirer from "inquirer";

function generateNumber(range: number = 10): number {
    let x = Math.floor((Math.random() * range) + 1);
    return x
}

async function startGame() {
    let guessNumber: number = 0;
    let numberRange: number[] = [10, 100, 1000];
    let numberGuessingquestion: string = '';
    let difficultyLevel = await inquirer.prompt(
        {
            type: "list",
            name: "Difficulty",
            message: "Please Select the Difficulty Level : ",
            choices: ["Easy", "Medium", "Hard"]
        }
    )

    switch (difficultyLevel.Difficulty) {
        case 'Easy':
            guessNumber = generateNumber(numberRange[0]);
            numberGuessingquestion = `Guess a number between 1 & ${numberRange[0]}`
            break;
        case 'Medium':
            guessNumber = generateNumber(numberRange[0]);
            numberGuessingquestion = `Guess a number between 1 & ${numberRange[1]}`
            break;
        case 'Hard':
            guessNumber = generateNumber(numberRange[0]);
            numberGuessingquestion = `Guess a number between 1 & ${numberRange[2]}`
            break;
        default:
            guessNumber = generateNumber(numberRange[0]);
            numberGuessingquestion = `Guess a number between 1 & ${numberRange[0]}`
            break;
    }

    let verifyAnswer = await inquirer.prompt(
        {
            type: "number",
            name: "Answer",
            message: numberGuessingquestion,
        }
    )

    if (verifyAnswer.Answer == guessNumber) {
        console.log("Congratulations ! You have won.");
    }
    else {
        console.log("Failed ! Better luck Next Time.");
    }

}

async function startCalculation() {
    await startGame();
    let shallWeStartAgain = await inquirer.prompt(
        [
            {
                type: "list",
                name: "Descision",
                message: "Sall we play again ?",
                choices: ["Yes", "No"]
            }
        ]
    )
    if (shallWeStartAgain.Descision == 'Yes') {
        await startCalculation();
    }
}

startCalculation();