//при кліку на блок конкретного юзера ми переходимо на нову сторінку того юзера де висвітлені усі його дані кожен юзер має містити свої дані взяті з апішки

const aboutInfo = document.querySelector('.aboutInfo');

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const about = document.querySelector('.main_title');


async function getUserInfo() {
    
    const ul = document.createElement('ul');
    aboutInfo.appendChild(ul);

    const allFriends = await fetch(API_URL);
    const friends = await allFriends.json();
    console.log(friends)

    friends.forEach(friend => {
        function addUser() {
            // about.innerHTML = `About user ${friend.name}`
            let li = document.createElement('li');
            li.innerHTML = `<a href="${friend.id}">${friend.name}</a>`;
            ul.appendChild(li);

        }
        addUser()
    });
    
}
getUserInfo()