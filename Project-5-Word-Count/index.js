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
var todoData = [];
function startTodoApp() {
    return __awaiter(this, void 0, void 0, function* () {
        let askUserAboutOperation = yield inquirer.prompt([
            {
                type: "list",
                name: "operationType",
                message: "Please Choose an Operation to Start With ?",
                choices: ["Add New Todo", "View All Todo", "Delete Single Todo", "Delete All"]
            }
        ]);
        switch (askUserAboutOperation.operationType) {
            case "Add New Todo":
                yield addNewTodo();
                break;
            case "View All Todo":
                yield viewAllTodo();
                break;
            case "Delete Single Todo":
                yield deleteTodo("single");
                break;
            case "Delete All":
                yield deleteTodo();
                break;
            default:
                break;
        }
    });
}
function addNewTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield inquirer.prompt([
            {
                type: "string",
                name: "newTodo",
                message: "Please Enter Todo ?",
            }
        ]);
        todoData.push(response.newTodo);
        console.log("********* Todo Added Successfully ! *********");
    });
}
function viewAllTodo() {
    console.log("********* Todo List *********");
    todoData.forEach((todo, i) => {
        console.log(`${i + 1}) ${todo}`);
    });
    console.log("*****************************");
}
function deleteTodo(action) {
    return __awaiter(this, void 0, void 0, function* () {
        if (action == "single") {
            let askAboutTodoNumber = yield inquirer.prompt([
                {
                    type: "number",
                    name: "todoIndex",
                    message: "Please Specify Todo Number to Delete ?",
                    choices: ["Add New Todo", "View All Todo", "Delete Single Todo", "Delete All"]
                }
            ]);
            if (askAboutTodoNumber.todoIndex > 0 && askAboutTodoNumber.todoIndex <= todoData.length) {
                todoData = todoData.filter((x, i) => i != (askAboutTodoNumber.todoIndex - 1));
                console.log("********* Todo Deleted Successfully ! *********");
            }
            else {
                console.log("Error! Please specify a valid Todo Number");
            }
        }
        else {
            todoData = [];
            console.log("********* All Todo Deleted Successfully ! *********");
        }
    });
}
function startOperation() {
    return __awaiter(this, void 0, void 0, function* () {
        yield startTodoApp();
        let shallWeStartAgain = yield inquirer.prompt([
            {
                type: "list",
                name: "Descision",
                message: "Do you want to perform any operation again ?",
                choices: ["Yes", "No"]
            }
        ]);
        if (shallWeStartAgain.Descision == 'Yes') {
            yield startOperation();
        }
    });
}
startOperation();
