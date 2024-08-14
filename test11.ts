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
        console.error('Error executing code:', error);
    }
}

// Example usage with a dynamic expression
const dynamicExpression = '2 + 2'; // Example of a dynamic expression

// Execute the expression
executeCode(dynamicExpression);

// Example usage with a more complex dynamic code
const complexCode = `
    let a = 5;
    let b = 10;
    let sum = a + b;
    sum * 2; // This should return 30
`;

// Execute the complex code
executeCode(complexCode);
