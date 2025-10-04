const axios = require('axios');

function getCommentsSorted(callback) {
    axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            const sorted = response.data.sort((a, b) => a.name.localeCompare(b.name));
            callback(null, sorted);
        })
        .catch(error => callback(error, null));
}


getCommentsSorted((err, comments) => {
    if (err) {
        console.error('Ошибка:', err);
    } else {
        for (let i = 0; i < 10; i++) {
            console.log(`Comments[${i}]: ${comments[i].name}`);
        }
    }
});