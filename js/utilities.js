/**
 * select element by id and return
 * @param {select element by id} id 
 * @returns select element
 */
function selectElement (id) {
    const element = document.getElementById(id);
    return element;
}

function setElementValue (id, value) {
    const element = selectElement(id);
    element.innerText = value;
}

/**
 * input value return by id
 * @param {select input field by id} id 
 * @returns input value and convert Number type
 */
function inputValue (id) {
    const element = selectElement(id);
    const value = Number(element.value);
    return value;
}