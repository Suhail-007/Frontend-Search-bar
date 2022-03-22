const userTemplateCard = document.querySelector('[data-template-card]');
const userCards = document.querySelector('[data-user-cards]');
const searchInput = document.querySelector('[data-search]')

let users = [];

fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
		users = data.map(user => {
		const card = userTemplateCard.content.cloneNode(true).children[0];		
		const userName = card.querySelector('[data-username]');
		const userEmail = card.querySelector('[data-useremail]');
		userName.textContent = user.name;
		userEmail.textContent = user.email;
		card.classList.add('hide');
		userCards.appendChild(card);
		return {name: user.name, email: user.email, element: card}
		});
})

search.addEventListener('input', (e) => {
		const searchValue = e.target.value.toLowerCase();
		users.forEach(user => {
				const isVisible = user.name.toLowerCase().includes(searchValue) || user.email.toLowerCase().includes(searchValue)
				user.element.classList.toggle('hide', !isVisible);
				if (searchValue === '') user.element.classList.add('hide');
		});
})