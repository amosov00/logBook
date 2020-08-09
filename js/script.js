input.focus();
let elemArry = [];
if (localStorage.getItem('q') !== null) {
    elemArry = JSON.parse(localStorage.getItem("q"));
}

elemArry.forEach((element, index) => {
    createNewBlock(element, index);
});

function setNewLocalStorage(input) {
    elemArry.push(input);
    localStorage.setItem("q", JSON.stringify(elemArry));

}

//почему работает только функция, а не переменная?
function inputPrompt() {

    return document.getElementById('input').value;
}

function createNewId() {
    return elemArry.length;
}

function createNewBlock(input, newDivId) {

    let newDiv = document.createElement("div");
    let section = document.getElementById('section');
    let delit = document.createElement("button");
    let data = new Date().toLocaleString('ru',
        {
            day: 'numeric',
            month: 'long',
            hour: 'numeric',
            minute: 'numeric',
        });
    let newData = data.replace(',', '');
    let dataContainer = document.createElement('p');
    dataContainer.innerHTML = newData;
    newDiv.innerHTML = input;
    newDiv.prepend(dataContainer);
    section.prepend(newDiv);
    newDiv.prepend(delit);
    delit.classList.add("newDiv__delit-button");
    newDiv.classList.add("elem");
    newDiv.classList.add("slide-bottom");
    newDiv.id = newDivId;
    function delitElement() {
        newDiv.remove();
        elemArry.splice(newDiv.id, 1);
        localStorage.setItem("q", JSON.stringify(elemArry));


        for (let i = 0; i < section.children.length; i++) {
            section.childNodes[i].id = (section.children.length - 1) - i;
        }
        //window.location.reload() но вместо этого я написал цикл;
    }
    delit.addEventListener('click', () => { delitElement() });

}


function clearForm() {

    input.value = '';
    input.focus();

}

window.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 13) {

        evt.preventDefault();
        document.getElementById('1').click();

    }

})

let button = document.getElementById('1');
button.addEventListener('click', () => { createNewBlock(inputPrompt(), createNewId()) });
button.addEventListener('click', () => { setNewLocalStorage(inputPrompt()) });
button.addEventListener('click', clearForm);
