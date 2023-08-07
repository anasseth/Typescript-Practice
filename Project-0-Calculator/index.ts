import inquirer from "inquirer";

async function calculate() {
    let promptRecord = await inquirer.prompt(
        [
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
        ]
    )
    switch (promptRecord.Operator) {
        case 'Addition':
            console.log(`${promptRecord.Number1} + ${promptRecord.Number2} = ${promptRecord.Number1 + promptRecord.Number2}`)
            break;
        case 'Subraction':
            console.log(`${promptRecord.Number1} - ${promptRecord.Number2} = ${promptRecord.Number1 - promptRecord.Number2}`)
            break;
        case 'Multiplication':
            console.log(`${promptRecord.Number1} * ${promptRecord.Number2} = ${promptRecord.Number1 * promptRecord.Number2}`)
            break;
        case 'Division':
            console.log(`${promptRecord.Number1} / ${promptRecord.Number2} = ${promptRecord.Number1 / promptRecord.Number2}`)
            break;
        default:
            console.log("")
            break;
    }
}

async function startCalculation() {
    await calculate();
    let shallWeStartAgain = await inquirer.prompt(
        [
            {
                type: "list",
                name: "Descision",
                message: "Start the Calculation Again",
                choices: ["Yes", "No"]
            }
        ]
    )
    if (shallWeStartAgain.Descision == 'Yes') {
        await startCalculation();
    }
}

startCalculation();