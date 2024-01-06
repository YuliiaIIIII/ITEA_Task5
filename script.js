// 2) блок мейн в якому слайдер з 10 постів 
const userPosts = document.querySelector('.userPosts');
const userList = document.querySelector('.userList');

const API_URL = 'https://jsonplaceholder.typicode.com/';
const ALL_USERS = 'users';
const ALL_POSTS = 'posts';
const USER_AVATARS = 'photos';

fetch(API_URL + ALL_POSTS)
	.then(response => response.json())
	.then(posts => {
		posts = posts.sort(() => Math.random() - 0.5).slice(0, 10);
		posts.forEach(post => {
		const postElement = document.createElement("div");
		postElement.setAttribute('class','post_card')
		postElement.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
		userPosts.appendChild(postElement);
	});
});

async function getUserList() {
	
	const allUsers = await fetch(API_URL + ALL_USERS);
	const users = await allUsers.json();

	const allPhotos = await fetch(API_URL + USER_AVATARS);
	const photos = await allPhotos.json();

	users.forEach(user => {
		function addUser() {
			const userCard = document.createElement('div');
			userCard.setAttribute('class', 'userCard');
			userList.appendChild(userCard);

			let imgDiv = document.createElement('div');
			imgDiv.setAttribute('class', 'userAvatar');
			const userAvatar = photos.find(photo => photo.id === user.id);

			if (userAvatar) {
					imgDiv.style.backgroundImage = `url(${userAvatar.url})`;
			}
			userCard.appendChild(imgDiv);

			let nameDiv = document.createElement('div');
			nameDiv.setAttribute('class', 'userName');
			userCard.appendChild(nameDiv);

			let nameName = document.createElement('a');
			nameName.textContent = user.name;
			nameName.setAttribute('href', `user_info.html?user_id=${user.id}`);
			nameDiv.appendChild(nameName);
		}
		addUser(user)
	});  
}
getUserList ()