const userDetails = document.querySelector(".user_details");
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

function getUserId () {
    const urlUserId = window.location.search;
    const urlParam = new URLSearchParams(urlUserId);
    return urlParam.get('user_id');
}

const userId = getUserId();

fetch(`${USERS_URL}/${userId}`)
	.then(response => response.json())
	.then(user => {

		const valuesArray = [];

		Object.keys(user).forEach(key => {
		valuesArray.push(user[key]);


    });
	
	function addInfo() {
		const infoItems = [
			{ info_title: "Ім'я", info_value: user.name },
			{ info_title: "Нікнейм", info_value: user.username },
			{ info_title: "E-mail", info_value: user.email },
			{ info_title: "Контакти", info_value: user.phone },
			{ info_title: "Кампанія", info_value: user.company.name },
		];
	
		infoItems.forEach(element => {
			const infoElement = document.createElement('p');
			infoElement.classList.add('info_title');
			userDetails.appendChild(infoElement);
			infoElement.innerHTML = `<h4 class="user_title">${element.info_title}:</h4><p>${element.info_value}</p>`;
		});
	}
	
	addInfo();

    console.log("Масив значень:", valuesArray); 
})
.catch(error => console.error("Помилка отримання даних", error));