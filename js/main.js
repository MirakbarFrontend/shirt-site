// Kichik rasmlar
const smallImages = document.querySelectorAll('.shirt__info-list-item-link-img');

// Katta rasm
const mainImage = document.querySelector('.shirt__info-img');

// Animatsiya davomiyligi (CSS bo‘lmagani uchun JS bilan boshqaramiz)
const animDuration = 200; // ms

smallImages.forEach(img => {
	img.addEventListener('click', e => {
		e.preventDefault();

		// Fade-out (sekin yo‘q bo‘lish)
		mainImage.style.transition = `opacity ${animDuration}ms, transform ${animDuration}ms`;
		mainImage.style.opacity = '0';
		mainImage.style.transform = 'scale(0.95)';

		setTimeout(() => {
			// Rasmni almashtiramiz
			const newSrc = img.getAttribute('src');
			mainImage.setAttribute('src', newSrc);

			// Fade-in (paydo bo‘lish)
			mainImage.style.opacity = '1';
			mainImage.style.transform = 'scale(1)';
		}, animDuration);
	});
});

// Elementlar
const countText = document.querySelector('.shirt__wrapper-bottom-number-title');
const plusBtn = document.querySelector('.shirt__wrapper-bottom-number-plus');
const minusBtn = document.querySelector('.shirt__wrapper-bottom-number-minus');

const priceTitle = document.querySelector('.shirt__wrapper-price-title');
const oldPriceSpan = document.querySelector('.shirt__wrapper-price-title span');

// Asosiy narxlar
let basePrice = 260;
let baseOldPrice = 300;

// Boshlang‘ich son
let count = 1;

// Narxni yangilash funksiyasi
function updatePrices(animated = true) {
	const newPrice = basePrice * count;
	const newOldPrice = baseOldPrice * count;

	// Animatsiya (faqat JS bilan)
	if (animated) {
		priceTitle.style.transition = 'transform 200ms, opacity 200ms';
		priceTitle.style.opacity = '0';
		priceTitle.style.transform = 'scale(0.9)';
	}

	setTimeout(() => {
		priceTitle.innerHTML = `$${newPrice} <span>$${newOldPrice}</span>`;
		oldPriceSpan.textContent = `$${newOldPrice}`;

		if (animated) {
			priceTitle.style.opacity = '1';
			priceTitle.style.transform = 'scale(1)';
		}
	}, 200);
}

// PLUS
plusBtn.addEventListener('click', () => {
	count++;
	countText.textContent = count;
	updatePrices();
});

// MINUS
minusBtn.addEventListener('click', () => {
	if (count > 1) {
		count--;
		countText.textContent = count;
		updatePrices();
	}
});

// Katta rasm
const mainImg = document.querySelector('.shirt__info-img');

// Size tugmalari
const sizeButtons = document.querySelectorAll('.shirt__wrapper-size-item');

// Rasmning maksimal real o‘lchamlari (X-Large)
const MAX_WIDTH = 444;
const MAX_HEIGHT = 530;

// Scale darajalari (nisbat)
const sizes = {
	small: 0.75,
	medium: 0.88,
	large: 0.97,
	'x-large': 1,
};

// Transform originni JS orqali markazga o‘rnatamiz
mainImg.style.transformOrigin = 'center center';

// Tugma bosilganda
sizeButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		// Active ranglarni tozalash
		sizeButtons.forEach(b => {
			b.style.backgroundColor = '';
			b.style.color = '';
		});

		// Bosilgan tugma activelanadi
		btn.style.backgroundColor = '#000';
		btn.style.color = '#fff';

		// Qaysi o'lcham tanlangan?
		const key = btn.classList[1];
		let scale = sizes[key];

		// Rasmning haqiqiy o‘lchamini scale bo‘yicha hisoblash
		let newWidth = MAX_WIDTH * scale;
		let newHeight = MAX_HEIGHT * scale;

		// Chegara tekshiruvi (ortib ketmasin)
		if (newWidth > MAX_WIDTH) scale = MAX_WIDTH / newWidth;
		if (newHeight > MAX_HEIGHT) scale = MAX_HEIGHT / newHeight;

		// Animatsiya + markazdan scale
		mainImg.style.transition = 'transform 250ms ease';
		mainImg.style.transform = `scale(${scale})`;
	});
});
const colorItems = document.querySelectorAll('.shirt__wrapper-list .item');

// Avval barcha ptichkalarni yashiramiz
colorItems.forEach((item, index) => {
	const img = item.querySelector('img');

	if (index === 0) {
		// faqat 1-chi elementda ptichka ko‘rinadi
		img.style.opacity = '1';
		img.style.transform = 'scale(1)';
	} else {
		img.style.opacity = '0';
		img.style.transform = 'scale(0.5)';
	}

	img.style.transition = 'all 0.25s ease';
});

// Bosilganda almashtirish
colorItems.forEach(item => {
	item.addEventListener('click', () => {
		// Barchasini yashiramiz
		colorItems.forEach(i => {
			const img = i.querySelector('img');
			img.style.opacity = '0';
			img.style.transform = 'scale(0.5)';
		});

		// Bosilganiga chiqaramiz
		const activeImg = item.querySelector('img');
		activeImg.style.opacity = '1';
		activeImg.style.transform = 'scale(1)';
	});
});
