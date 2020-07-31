input.focus();
// localStorage.setItem("o", 0);
// for (let i = 0; i < localStorage.length; i++) {
//     let input = storage.getItem(i);
//     if (input === "") {
//         input = "void";
//     }
//     let newDiv = document.createElement("div");
//     let section = document.getElementById('section');
//     let delit = document.createElement("button");
//     let data = new Date().toLocaleString('ru',
//         {
//             day: 'numeric',
//             month: 'long',
//             hour: 'numeric',
//             minute: 'numeric',
//         });
//     let newData = data.replace(',', '');
//     let dataContainer = document.createElement('p');
//     dataContainer.innerHTML = newData;
//     newDiv.innerHTML = input;
//     newDiv.prepend(dataContainer);
//     section.prepend(newDiv);
//     newDiv.prepend(delit);
//     delit.classList.add("newDiv__delit-button");
//     newDiv.classList.add("elem");
//     newDiv.classList.add("slide-bottom");
//     let storageLength = localStorage.length;
//     localStorage.setItem(storageLength++, input);

//     function delitElement() {
//         newDiv.classList.add("close");
//     }
//     delit.addEventListener('click', delitElement);
// }
//localStorage.clear();
function inrestElement() {
    let input = document.getElementById('input').value;
    if (input === "") {
        input = "void";
    }
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
    let storageLength = localStorage.length;
    localStorage.setItem(storageLength++, input);

    function delitElement() {
        newDiv.classList.add("close");
    }
    delit.addEventListener('click', delitElement);
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
document.getElementById('1').addEventListener('click', inrestElement);
document.getElementById('1').addEventListener('click', clearForm);