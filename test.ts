/**
 * Executes a piece of code provided as a string.
 * @param code - The code to execute.
 */
function executeCode(code: string): void {
    try {
        // Dangerous: Executes any code passed to it as a string
        const result = eval(code);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error('Invalid code');
    }
}

// Example usage
const userInput = "alert('This is a dangerous action!');"; // Example of dangerous user input

// Execute the potentially dangerous code
executeCode(userInput);
