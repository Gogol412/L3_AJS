const axios = require('axios');

function getTodosFiltered() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            return response.data.filter(todo => !todo.completed);
        });
}

getTodosFiltered()
    .then(todo => console.log(todo))
    .catch(error => console.error(error));