const display = value => result.value += value;
const clearScreen = () => result.value = "";
const calculate = () => result.value = eval(result.value) || "Error";
