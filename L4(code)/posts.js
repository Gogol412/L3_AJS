const axios = require('axios');

function getPostsSorted(callback) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const sorted = response.data.sort((a, b) => b.title.length - a.title.length);
            callback(null, sorted);
        })
        .catch(error => callback(error, null));
}


getPostsSorted((err, posts) => {
    if (err) {
        console.error('Ошибка:', err);
    } else {
        for (let i = 0; i < 7; i++) {
            console.log(`Posts[${i}]: ${posts[i].title} (длинна: ${posts[i].title.length})`);
        }
    }
});

