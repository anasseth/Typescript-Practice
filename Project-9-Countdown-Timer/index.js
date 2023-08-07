var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from 'inquirer';
function startCountdown() {
    return __awaiter(this, void 0, void 0, function* () {
        const { targetDate } = yield inquirer.prompt([
            {
                type: 'input',
                name: 'targetDate',
                message: 'Enter the target date for the countdown (YYYY-MM-DD HH:mm:ss):',
                validate: validateDateInput,
            },
        ]);
        const targetTimestamp = new Date(targetDate).getTime();
        if (isNaN(targetTimestamp)) {
            console.log('Invalid date format.');
            return;
        }
        console.log('Countdown started...\n');
        while (true) {
            const remainingTime = targetTimestamp - Date.now();
            if (remainingTime <= 0) {
                console.log('Countdown completed!');
                break;
            }
            const remainingSeconds = Math.floor(remainingTime / 1000);
            console.log(`Time remaining: ${formatTime(remainingSeconds)}`);
            // Wait for 1 second before updating the countdown
            yield sleep(1000);
        }
    });
}
function validateDateInput(input) {
    const timestamp = new Date(input).getTime();
    return isNaN(timestamp) ? 'Invalid date format. Please enter in the format YYYY-MM-DD HH:mm:ss' : true;
}
function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
startCountdown();
