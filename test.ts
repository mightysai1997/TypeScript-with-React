function executeCode(userInput: string) {
    eval(userInput);
}

// Usage
const userCode = "console.log('This is dangerous!');";
executeCode(userCode);
