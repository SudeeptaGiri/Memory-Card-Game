const section = document.querySelector("section");
const liveCount = document.querySelector(".players-live");
let lives = 6;

// Link the texts
// Show the number of Lives
liveCount.textContent = lives;

// Generate the Data
const getData = [
	{ imgSrc: "./images/beatles.jpeg", name: "beatles" },
	{ imgSrc: "./images/blink182.jpeg", name: "blink" },
	{ imgSrc: "./images/fkatwigs.jpeg", name: "fkatwings" },
	{ imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
	{ imgSrc: "./images/joy-division.jpeg", name: "joy-division" },
	{ imgSrc: "./images/ledzep.jpeg", name: "ladzeo" },
	{ imgSrc: "./images/metallica.jpeg", name: "metallica" },
	{ imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd" },
	{ imgSrc: "./images/beatles.jpeg", name: "beatles" },
	{ imgSrc: "./images/blink182.jpeg", name: "blink" },
	{ imgSrc: "./images/fkatwigs.jpeg", name: "fkatwings" },
	{ imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
	{ imgSrc: "./images/joy-division.jpeg", name: "joy-division" },
	{ imgSrc: "./images/ledzep.jpeg", name: "ladzeo" },
	{ imgSrc: "./images/metallica.jpeg", name: "metallica" },
	{ imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd" },
];

// Randomize
function shuffleArray() {
	let length = getData.length;
	let lastindex = length - 1;
	while (lastindex > 0) {
		let random = Math.floor(Math.random() * lastindex);
		let temp = getData[random];
		getData[random] = getData[lastindex];
		getData[lastindex] = temp;
		lastindex = lastindex - 1;
	}
	return getData;
}

// Card Generator Function
const cardDataGenerator = () => {
	const cardData = shuffleArray();
	// Generate Html For the Card-game
	cardData.forEach((item) => {
		const card = document.createElement("div");
		const face = document.createElement("img");
		const back = document.createElement("div");
		card.classList.add("card");
		face.classList.add("face");
		back.classList.add("back");
		// Adding Images
		face.src = item.imgSrc;
		card.setAttribute("name", item.name);
		// Attach Section
		section.appendChild(card);
		card.appendChild(face);
		card.appendChild(back);
		card.addEventListener("click", (event) => {
			card.classList.toggle("card-toggle");
			checkCard(event);
		});
	});
};
cardDataGenerator();
const checkCard = (event) => {
	const clickEl = event.target;
	clickEl.classList.add("flip");
	const flipedCards = document.querySelectorAll(".flip");
	// Logic
	if (flipedCards.length === 2) {
		if (
			flipedCards[0].getAttribute("name") ===
			flipedCards[1].getAttribute("name")
		) {
			flipedCards.forEach((el) => {
				el.classList.remove("flip");
				el.style.pointerEvents = "none";
			});
		} else {
			flipedCards.forEach((el) => {
				el.classList.remove("flip");
				setTimeout(() => el.classList.remove("card-toggle"), 1000);
			});
			lives--;
			liveCount.textContent = lives;
			if (lives === 0) {
				restart("👎 BetterLuck Next Time");
			}
		}
	}
	const cardToggle = document.querySelectorAll(".card-toggle");
	if (cardToggle.length === 16) {
		restart("🥳 Congatulations");
	}
};
// restart
const restart = (text) => {
	console.log("restart");
	const cardData = shuffleArray();
	let face = document.querySelectorAll(".face");
	let card = document.querySelectorAll(".card");
	cardData.forEach((item, index) => {
		card[index].classList.remove("card-toggle");
		card[index].style.pointerEvents = "all";
		face[index].src = item.imgSrc;
		card[index].setAttribute("name", item.name);
	});
	lives = 6;
	lives.textContent = lives;
	setTimeout(() => window.alert(text));
};
