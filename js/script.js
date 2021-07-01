let list = document.getElementById('todo-list');
let inputBox = document.getElementById('todo-input');
let  btnAdd = document.getElementById('add-item');
let btnUpdate = document.getElementById('update-item');
let btnRemove = document.getElementById('remove-item');

let currentInputValue = '';
inputBox.addEventListener('input', function(e) {
    currentInputValue = e.target.value;
});

inputBox.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addListItem();
    }
});

function createNewNode () {
    let newListElement = document.createElement('li');
    let textNode = document.createTextNode(currentInputValue);
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount + 1);

    return newListElement;
}

function addListItem() {

    if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
        
        let newListElement = createNewNode();

        list.appendChild(newListElement);
        console.log(list.childElementCount);
        
        inputBox.value = '';
        currentInputValue = '';
    }

    else {
        alert('Please enter a valid TODO item');
    }

}

btnAdd.addEventListener('click', addListItem);

btnUpdate.addEventListener('click', function() {
    let firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
});

btnRemove.addEventListener('click', function() {
    let firstElement = list.firstElementChild;

    list.removeChild(firstElement);
})