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
function calculate() {
    return __awaiter(this, void 0, void 0, function* () {
        let promptRecord = yield inquirer.prompt([
            {
                type: "list",
                name: "Operator",
                message: "Please Select the Type of Operation : ",
                choices: ["Addition", "Subraction", "Multiplication", "Division"]
            },
            {
                type: "number",
                name: "Number1",
                message: "Please Enter First Number : ",
                default: 0
            },
            {
                type: "number",
                name: "Number2",
                message: "Please Enter Second Number : ",
                default: 0
            }
        ]);
        switch (promptRecord.Operator) {
            case 'Addition':
                console.log(`${promptRecord.Number1} + ${promptRecord.Number2} = ${promptRecord.Number1 + promptRecord.Number2}`);
                break;
            case 'Subraction':
                console.log(`${promptRecord.Number1} - ${promptRecord.Number2} = ${promptRecord.Number1 - promptRecord.Number2}`);
                break;
            case 'Multiplication':
                console.log(`${promptRecord.Number1} * ${promptRecord.Number2} = ${promptRecord.Number1 * promptRecord.Number2}`);
                break;
            case 'Division':
                console.log(`${promptRecord.Number1} / ${promptRecord.Number2} = ${promptRecord.Number1 / promptRecord.Number2}`);
                break;
            default:
                console.log("");
                break;
        }
    });
}
function startCalculation() {
    return __awaiter(this, void 0, void 0, function* () {
        yield calculate();
        let shallWeStartAgain = yield inquirer.prompt([
            {
                type: "list",
                name: "Descision",
                message: "Start the Calculation Again",
                choices: ["Yes", "No"]
            }
        ]);
        if (shallWeStartAgain.Descision == 'Yes') {
            yield startCalculation();
        }
    });
}
startCalculation();
