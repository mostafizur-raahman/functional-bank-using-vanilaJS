function getInputFieldValueById(inputId) {

    const inputField = document.getElementById(inputId);
    const inputFieldvalueString = inputField.value;
    const inputFiledValue = parseFloat(inputFieldvalueString);
    inputField.value = '';
    return inputFiledValue;

}

function getElementValueById(elementId) {

    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);

    return value;
}

/// set final amout deposite

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}