const API = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () =>
    fetch(API)
        .then(data => data.json())

export const deleteUser = id =>
    fetch(API + `/${id}`, {
        method: 'DELETE'
    })
        .then(data => data.json())

export const addUser = obj =>
    fetch(API, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(obj)
    })
        .then(data => data.json())

export const updateUser = (id, field, value) =>
    fetch(API + `/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            [field]: value
        })
    })
        .then(data => data.json())