import inquirer from "inquirer";

var todoData: string[] = [];

async function startTodoApp() {

    let askUserAboutOperation = await inquirer.prompt(
        [
            {
                type: "list",
                name: "operationType",
                message: "Please Choose an Operation to Start With ?",
                choices: ["Add New Todo", "View All Todo", "Delete Single Todo", "Delete All"]
            }
        ]
    )

    switch (
    askUserAboutOperation.operationType
    ) {
        case "Add New Todo":
            await addNewTodo();
            break;
        case "View All Todo":
            await viewAllTodo();
            break;
        case "Delete Single Todo":
            await deleteTodo("single");
            break;
        case "Delete All":
            await deleteTodo();
            break;
        default:
            break;
    }

}

async function addNewTodo() {
    let response = await inquirer.prompt(
        [
            {
                type: "string",
                name: "newTodo",
                message: "Please Enter Todo ?",
            }
        ]
    );

    todoData.push(response.newTodo);
    console.log("********* Todo Added Successfully ! *********")
}

function viewAllTodo() {
    console.log("********* Todo List *********")
    todoData.forEach((todo, i) => {
        console.log(`${i + 1}) ${todo}`);
    });
    console.log("*****************************")
}

async function deleteTodo(action?: string) {
    if (action == "single") {
        let askAboutTodoNumber = await inquirer.prompt(
            [
                {
                    type: "number",
                    name: "todoIndex",
                    message: "Please Specify Todo Number to Delete ?",
                    choices: ["Add New Todo", "View All Todo", "Delete Single Todo", "Delete All"]
                }
            ]
        )

        if (askAboutTodoNumber.todoIndex > 0 && askAboutTodoNumber.todoIndex <= todoData.length) {
            todoData = todoData.filter((x, i) => i != (askAboutTodoNumber.todoIndex - 1))
            console.log("********* Todo Deleted Successfully ! *********")
        }
        else {
            console.log("Error! Please specify a valid Todo Number")
        }
    }
    else {
        todoData = [];
        console.log("********* All Todo Deleted Successfully ! *********")
    }
}

async function startOperation() {
    await startTodoApp();
    let shallWeStartAgain = await inquirer.prompt(
        [
            {
                type: "list",
                name: "Descision",
                message: "Do you want to perform any operation again ?",
                choices: ["Yes", "No"]
            }
        ]
    )
    if (shallWeStartAgain.Descision == 'Yes') {
        await startOperation();
    }
}

startOperation();