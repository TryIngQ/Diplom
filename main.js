// db
const clothesDB = [
    {
        "name": "Свитшот",
        "price": 5400,
        "discount": 0,
        "descr": "Мягкий свитшот в минималистичном стиле — комфортный выбор для повседневной носки и уюта.",
        "image": `clothes/huddy_6.webp`,
        "type": "man",
        "id": 0
    },
    {
        "name": "Детский комплект",
        "price": 3700,
        "discount": 0,
        "descr": "Яркий и весёлый дизайн, который нравится детям и радует родителей.",
        "image": `clothes/children_clothing_6.webp`,
        "type": "kid",
        "id": 1
    },
    {
        "name": "Футболка",
        "price": 2000,
        "discount": 40,
        "descr": "Классическая футболка из мягкого хлопка — комфортная, стильная и подходит для любого повседневного образа.",
        "image": `clothes/tshirt_4.png`,
        "type": "man",
        "id": 2
    },
    {
        "name": "Платье",
        "price": 10000,
        "discount": 10,
        "descr": "Лёгкое и элегантное платье, подчёркивающее силуэт и создающее женственный образ.",
        "image": `clothes/women_clothing_1.webp`,
        "type": "woman",
        "id": 3
    },
    {
        "name": "Толстовка",
        "price": 4700,
        "discount": 20,
        "descr": "Тёплая и удобная толстовка с капюшоном — идеальна для прохладной погоды и отдыха.",
        "image": `clothes/huddy_2.webp`,
        "type": "man",
        "id": 4
    },
    {
        "name": "Блузка",
        "price": 7000,
        "discount": 20,
        "descr": "Лёгкая и женственная блузка с изящным кроем подчеркнёт твою утончённость. Подходит как для офиса, так и для повседневных образов.",
        "image": "clothes/women_clothing_3.webp",
        "type": "woman",
        "id": 5
    },
    {
        "name": "Футболка",
        "price": 2000,
        "discount": 40,
        "descr": "Классическая футболка из мягкого хлопка — комфортная, стильная и подходит для любого повседневного образа.",
        "image": `clothes/tshirt_3.png`,
        "type": "man",
        "id": 6
    },
    {
        "name": "Толстовка",
        "price": 5000,
        "discount": 15,
        "descr": "Тёплая и удобная толстовка с капюшоном — идеальна для прохладной погоды и отдыха.",
        "image": `clothes/huddy_3.webp`,
        "type": "man",
        "id": 7
    },
    {
        "name": "Платье",
        "price": 6800,
        "discount": 0,
        "descr": "Лёгкая и женственная блузка с изящным кроем подчеркнёт твою утончённость.",
        "image": "clothes/women_clothing_4.webp",
        "type": "woman",
        "id": 8
    },
    {
        "name": "Детская футболка",
        "price": 3000,
        "discount": 0,
        "descr": "Яркий и весёлый дизайн, который нравится детям и радует родителей.",
        "image": `clothes/children_clothing_4.webp`,
        "type": "kid",
        "id": 9
    },
    {
        "name": "Худди мужской",
        "price": 4200,
        "discount": 10,
        "descr": "Уютное худи из мягкого хлопка — тёплое, стильное и идеально для повседневной носки.",
        "image": "clothes/man_clothing_1.webp",
        "type": "man",
        "id": 10
    },
    {
        "name": "Детский комплект",
        "price": 3000,
        "discount": 0,
        "descr": "Практичные вещи на каждый день — легко стираются, не сковывают движения и долго носятся.",
        "image": `clothes/children_clothing_2.webp`,
        "type": "kid",
        "id": 11
    },
    {
        "name": "Свитер",
        "price": 8000,
        "discount": 0,
        "descr": "Лёгкая ветровка для активных дней — защищает от ветра и отлично дополняет образ.",
        "image": "clothes/man_clothing_2.webp",
        "type": "man",
        "id": 12
    },
    {
        "name": "Футболка",
        "price": 2000,
        "discount": 40,
        "descr": "Классическая футболка из мягкого хлопка — комфортная, стильная и подходит для любого повседневного образа.",
        "image": `clothes/tshirt_2.png`,
        "type": "man",
        "id": 13
    },
    {
        "name": "Детский комплект",
        "price": 3100,
        "discount": 0,
        "descr": "Надёжная и качественная одежда для активных детей — подвижность без ограничений.",
        "image": `clothes/children_clothing_7.webp`,
        "type": "kid",
        "id": 14
    },
    {
        "name": "Толстовка для спорта",
        "price": 5400,
        "discount": 0,
        "descr": "Тёплая и удобная толстовка с капюшоном — идеальна для прохладной погоды и отдыха.",
        "image": `clothes/huddy_1.webp`,
        "type": "man",
        "id": 15
    },
    {
        "name": "Майка мужская",
        "price": 6200,
        "discount": 0,
        "descr": "Удобная борцовка из дышащего материала — идеально для спорта, прогулок и жаркой погоды.",
        "image": "clothes/man_clothing_3.webp",
        "type": "man",
        "id": 16
    },
    {
        "name": "Платье",
        "price": 8000,
        "discount": 10,
        "descr": "Лёгкое и элегантное платье, подчёркивающее силуэт и создающее женственный образ.",
        "image": `clothes/women_clothing_2.webp`,
        "type": "woman",
        "id": 17
    },
    {
        "name": "Худи",
        "price": 3200,
        "discount": 0,
        "descr": "Тёплая и удобная толстовка с капюшоном — идеальна для прохладной погоды и отдыха.",
        "image": `clothes/huddy_4.webp`,
        "type": "man",
        "id": 18
    },
    {
        "name": "Детское платье",
        "price": 3500,
        "discount": 10,
        "descr": "Удобная и мягкая одежда для малышей — комфорт на весь день и свобода движений.",
        "image": `clothes/children_clothing_1.webp`,
        "type": "kid",
        "id": 19
    },
    {
        "name": "Футболка",
        "price": 2000,
        "discount": 40,
        "descr": "Классическая футболка из мягкого хлопка — комфортная, стильная и подходит для любого повседневного образа.",
        "image": `clothes/tshirt_1.png`,
        "type": "man",
        "id": 20
    },
    {
        "name": "Свитшот",
        "price": 7000,
        "discount": 0,
        "descr": "Мягкий свитшот в минималистичном стиле — комфортный выбор для повседневной носки и уюта.",
        "image": `clothes/huddy_5.webp`,
        "type": "man",
        "id": 21
    },
    {
        "name": "Детский комплект",
        "price": 3300,
        "discount": 0,
        "descr": "Надёжная и качественная одежда для активных детей — подвижность без ограничений.",
        "image": `clothes/children_clothing_5.webp`,
        "type": "kid",
        "id": 22
    },
];

document.addEventListener('DOMContentLoaded', function() {
    // container
    const clothesContainer = document.getElementById('clothes-container');

    const heroSwiper = new Swiper('.hero__swiper', {
        loop: true,
        speed: 700,
        spaceBetween: 20,
        slidesPerView: 1,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            draggable: true,
        },
    });

    const workSwiper = new Swiper('.work__swiper', {
        loop: false,
        speed: 700,
        spaceBetween: 100,
        slidesPerView: 1,
        pagination: {
            el: '.work__swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    // Logic
    function createClothesBlock({name, price, discount, descr, image, id}) {
        // creating a new elements
        const clothesBlock = document.createElement('div');

        const clothesImageContainer = document.createElement('div');
        const clothesDescrContainer = document.createElement('div');

        const clothesImage = document.createElement('img');
        const clothesName = document.createElement('h2');
        const clothesPrice = document.createElement('p');
        const clothesDiscount = document.createElement('p');
        const clothesDescr = document.createElement('p');
        const clothesBuyButton = document.createElement('button');
        const clothesBasketButton = document.createElement('button');

        
        // adding content
        clothesName.textContent = name;
        clothesPrice.textContent = `${price}р`;
        clothesDiscount.textContent = `${discount}% скидка`;
        clothesDescr.textContent = descr;
        clothesBuyButton.textContent = 'Купить';
        clothesBasketButton.textContent = 'Добавить в корзину';
        clothesImage.src = image;

        clothesBuyButton.dataset.clothesIndex = id;
        buyClothes(clothesBuyButton);

        clothesBasketButton.dataset.clothesIndex = id;


        // adding a class
        clothesBlock.classList.add('clothes-container');

        clothesImageContainer.classList.add('clothes__image-container');
        clothesDescrContainer.classList.add('clothes-descr__container');

        clothesImage.classList.add('clothes__image');
        clothesName.classList.add('clothes__name');
        clothesPrice.classList.add('clothes__price');
        clothesDiscount.classList.add('clothes__discount');
        clothesDescr.classList.add('clothes__descr');
        clothesBuyButton.classList.add('clothes__buy-btn');
        clothesBasketButton.classList.add('clothes__basket-btn');



        // adding events
        clothesImageContainer.addEventListener('click', () => {
            closeWindowFunction(clothesBlock);
            clothesEvent(clothesBlock);
        });

        // adding items to a container
        clothesBlock.append(clothesImageContainer);
        clothesBlock.append(clothesDescrContainer);

        clothesImageContainer.append(clothesImage);

        clothesDescrContainer.append(clothesName);
        clothesDescrContainer.append(clothesPrice);
        clothesDescrContainer.append(clothesDiscount);
        clothesDescrContainer.append(clothesDescr);
        clothesDescrContainer.append(clothesBuyButton);
        clothesDescrContainer.append(clothesBasketButton);


        clothesContainer.append(clothesBlock);
    };

    // Creating catalog 
    function createCatalog(type = '') {
        clothesDB.forEach(element => {
            if (type === '') {
                createClothesBlock(element);
            } else if (element.type === type) {
                createClothesBlock(element);
            }
        });
    };

    // Search function
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', () => {
        clothesContainer.innerHTML = '';
        createShowWindow();

        const searchInput = document.getElementById('searchInput');

        clothesDB.forEach(element => {
            if (element.name.includes(searchInput.value)) {
                createClothesBlock(element);
            };
        });
    });

    // clothes event
    function clothesEvent(element) {
        const backgroundBlur = document.querySelector('.background--blur');

        window.scrollTo({
        top: 713,
        behavior: "instant",
        });

        document.body.classList.add('stop-scrolling');
        backgroundBlur.style.display = 'block';
        clothesContainer.style.height = '1080px';
        element.classList.add('clothes--show');
    };

    // close show window
    function closeWindowFunction(element) {
        const backgroundBlur = document.querySelector('.background--blur');
        const closeWindowBtn = document.querySelector('.close-showing');

        closeWindowBtn.addEventListener('click', () => {
            document.body.classList.remove('stop-scrolling');
            backgroundBlur.style.display = 'none';
            clothesContainer.style.height = 'auto';
            element.classList.remove('clothes--show');
        });
    };

    // create show window
    function createShowWindow() {
        clothesContainer.innerHTML = `            
        <div class="background--blur">
            <button id="close-showing" class="close-showing">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                </svg>
            </button>
        </div>`;
    };

    // Filter logic
    const forMen = document.getElementById('forMen');
    const forWoman = document.getElementById('forWoman');
    const forChildren = document.getElementById('forChildren');
    const withDiscounts = document.getElementById('withDiscounts');

    forMen.addEventListener('click', () => {
        clothesContainer.innerHTML = '';
        createShowWindow();

        if (forMen.classList[1] === 'filter-btn--off') {
            forMen.classList.remove('filter-btn--off');
            forMen.classList.add('filter-btn--active');

            createCatalog('man');
        } else if (forMen.classList[1] === 'filter-btn--active') {
            forMen.classList.remove('filter-btn--active');
            forMen.classList.add('filter-btn--off');

            createCatalog();
        };
    });
    forWoman.addEventListener('click', () => {
        clothesContainer.innerHTML = '';
        createShowWindow();

        if (forWoman.classList[1] === 'filter-btn--off') {
            forWoman.classList.remove('filter-btn--off');
            forWoman.classList.add('filter-btn--active');

            createCatalog('woman');
        } else if (forWoman.classList[1] === 'filter-btn--active') {
            forWoman.classList.remove('filter-btn--active');
            forWoman.classList.add('filter-btn--off');
            
            createCatalog();
        };
    });
    forChildren.addEventListener('click', () => {
        clothesContainer.innerHTML = '';
        createShowWindow();

        if (forChildren.classList[1] === 'filter-btn--off') {
            forChildren.classList.remove('filter-btn--off');
            forChildren.classList.add('filter-btn--active');

            createCatalog('kid');
        } else if (forChildren.classList[1] === 'filter-btn--active') {
            forChildren.classList.remove('filter-btn--active');
            forChildren.classList.add('filter-btn--off');
            
            createCatalog();
        };
    });


    // Basket logic
    function addToBaket(element) {
        element.addEventListener('click', () => {

        });
    };
    function buyClothes(element) {
        if (!localStorage.getItem('buyClothes')) {
            localStorage.setItem('buyClothes', JSON.stringify([]));
        };

        const localStorageClothes = localStorage.getItem('buyClothes');
        console.log(localStorageClothes);

        element.addEventListener('click', () => {
            let currentValue = JSON.parse(localStorage.getItem('buyClothes'));

            let elementIndex = element.getAttribute('data-clothes-index');
            currentValue.push(elementIndex);

            localStorage.setItem('buyClothes', JSON.stringify(currentValue));
        });
    };

    createCatalog();
});