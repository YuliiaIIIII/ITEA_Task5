// Таск №5 (JS Advanced)
// Використовуючи дані з https://jsonplaceholder.typicode.com/ створити новий сайт який містить
// 2) блок мейн в якому слайдер з 10 постів взятими з арі яке вище, та простий список юзерів з фото взятими з різних брейкпоінтів апішки яку використовуємо, при кліку на блок конкретного юзера ми переходимо на нову сторінку того юзера де висвітлені усі його дані кожен юзер має містити свої дані взяті з апішки


const userList = document.querySelector('.userList');

const API_URL = 'https://jsonplaceholder.typicode.com/';
const ALL_USERS = 'users';

async function getUserList() {
    
    const ul = document.createElement('ul');
    userList.appendChild(ul);

    const allUsers = await fetch(API_URL + ALL_USERS);
    const users = await allUsers.json();
    console.log(users)

    users.forEach(user => {
        function addUser() {
            let li = document.createElement('li');
            li.innerHTML = `<a href="${user.id}">${user.name}</a>`;
            // li.setAttribute('class','');
            ul.appendChild(li);

        }
        addUser()
    });
    
}
getUserList ()