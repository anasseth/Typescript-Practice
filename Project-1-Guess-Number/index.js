var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
function generateNumber(range = 10) {
    let x = Math.floor((Math.random() * range) + 1);
    return x;
}
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        let guessNumber = 0;
        let numberRange = [10, 100, 1000];
        let numberGuessingquestion = '';
        let difficultyLevel = yield inquirer.prompt({
            type: "list",
            name: "Difficulty",
            message: "Please Select the Difficulty Level : ",
            choices: ["Easy", "Medium", "Hard"]
        });
        switch (difficultyLevel.Difficulty) {
            case 'Easy':
                guessNumber = generateNumber(numberRange[0]);
                numberGuessingquestion = `Guess a number between 1 & ${numberRange[0]}`;
                break;
            case 'Medium':
                guessNumber = generateNumber(numberRange[0]);
                numberGuessingquestion = `Guess a number between 1 & ${numberRange[1]}`;
                break;
            case 'Hard':
                guessNumber = generateNumber(numberRange[0]);
                numberGuessingquestion = `Guess a number between 1 & ${numberRange[2]}`;
                break;
            default:
                guessNumber = generateNumber(numberRange[0]);
                numberGuessingquestion = `Guess a number between 1 & ${numberRange[0]}`;
                break;
        }
        let verifyAnswer = yield inquirer.prompt({
            type: "number",
            name: "Answer",
            message: numberGuessingquestion,
        });
        if (verifyAnswer.Answer == guessNumber) {
            console.log("Congratulations ! You have won.");
        }
        else {
            console.log("Failed ! Better luck Next Time.");
        }
    });
}
function startCalculation() {
    return __awaiter(this, void 0, void 0, function* () {
        yield startGame();
        let shallWeStartAgain = yield inquirer.prompt([
            {
                type: "list",
                name: "Descision",
                message: "Sall we play again ?",
                choices: ["Yes", "No"]
            }
        ]);
        if (shallWeStartAgain.Descision == 'Yes') {
            yield startCalculation();
        }
    });
}
startCalculation();
