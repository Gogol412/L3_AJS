const axios = require('axios');

function getUsersFiltered() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.data.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone
            }));
        });
}


getUsersFiltered()
    .then(users => console.log(users))
    .catch(error => console.error(error));