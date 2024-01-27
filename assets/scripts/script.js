"use strict"
const container = document.querySelector('.container');

const api = `https://jsonplaceholder.typicode.com/posts`;

const createElem = function(object){
    return `<h2>${object.title}</h2>
            <p>${object.body}</p>`
}

const addElem = function(container, elem){
    container.innerHTML += elem;
}

const getString = function(api){
    fetch(api)
    .then(response => response.json())
    .then((data) => {
        data.forEach(element => {
            const newPost = createElem(element);
            addElem(container, newPost);
        });
    })
    .catch(error => console.error('Ошибка:', error)
    );
}
getString(api);