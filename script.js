const API_URL = 'https://jsonplaceholder.typicode.com/';
const ALL_USERS = 'users';
const ALL_POSTS = 'posts';
const USER_AVATARS = 'photos';
const userList = document.querySelector('.userList');

document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper_container', {
			slidesPerView: 3,
			spaceBetween: 25,
			navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
			},
	});

	fetch(API_URL + ALL_POSTS)
			.then(response => response.json())
			.then(posts => {
					posts = posts.sort(() => Math.random() - 0.5).slice(0, 10);
					posts.forEach(post => {
							const slide = `<div class="swiper-slide post_card"><h4>${post.title}</h4><p>${post.body}</p></div>`;
							swiper.appendSlide(slide);
					});
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