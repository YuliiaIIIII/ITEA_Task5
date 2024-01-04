//  https://jsonplaceholder.typicode.com/ 
// 2) блок мейн в якому слайдер з 10 постів взятими з арі яке вище, 
//при кліку на блок конкретного юзера ми переходимо на нову сторінку того юзера де висвітлені усі його дані кожен юзер має містити свої дані взяті з апішки

const userList = document.querySelector('.userList');
userList.setAttribute('style', 'display: flex; justify-content: center; flex-wrap: wrap; gap: 30px; padding-top: 10px; padding-bottom: 30px');
const userPosts = document.querySelector('.userPosts');

const API_URL = 'https://jsonplaceholder.typicode.com/';
const ALL_USERS = 'users';
const ALL_POSTS = 'posts';

fetch(API_URL + ALL_POSTS)
    .then(response => response.json())
    .then(posts => {
        posts = posts.sort(() => Math.random() - 0.5).slice(0, 10);
        posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
        userPosts.appendChild(postElement);
    });
});

async function getUserList() {
    
    const allUsers = await fetch(API_URL + ALL_USERS);
    const users = await allUsers.json();

    users.forEach(user => {
        function addUser() {
            const userCard = document.createElement('div');
            userCard.setAttribute('class', 'userCard');
            userList.appendChild(userCard);

            let imgDiv = document.createElement('div');
            imgDiv.setAttribute('class', 'userAvatar');
            userCard.appendChild(imgDiv);

            let nameDiv = document.createElement('div');
            nameDiv.setAttribute('class', 'userName');
            userCard.appendChild(nameDiv);
            let nameName = document.createElement('p');
            nameName.setAttribute('style', 'text-align: center;');
            nameName.innerHTML = `<a href="${user.id}">${user.name}</a>`;
            nameDiv.appendChild(nameName);
        }
        addUser()
    });  
}
getUserList ()