// db
const clothesDB = [
    {
        "name": "Свитшот",
        "price": 5400,
        "discount": 0,
        "descr": "Мягкий свитшот в минималистичном стиле — комфортный выбор для повседневной носки и уюта.",
        "image": `../clothes/huddy_6.webp`,
        "type": "man",
        "color": 'Синий',
        "id": 0
    },
    {
        "name": "Детский комплект",
        "price": 3700,
        "discount": 0,
        "descr": "Яркий и весёлый дизайн, который нравится детям и радует родителей.",
        "image": `../clothes/children_clothing_6.webp`,
        "type": "kid",
        "color": 'Коричневый',
        "id": 1
    },
    {
        "name": "Футболка",
        "price": 2000,
        "discount": 40,
        "descr": "Классическая футболка из мягкого хлопка — комфортная, стильная и подходит для любого повседневного образа.",
        "image": `../clothes/tshirt_4.png`,
        "type": "man",
        "color": 'Зеленый',
        "id": 2
    },
    {
        "name": "Платье",
        "price": 10000,
        "discount": 10,
        "descr": "Лёгкое и элегантное платье, подчёркивающее силуэт и создающее женственный образ.",
        "image": `../clothes/women_clothing_1.webp`,
        "type": "woman",
        "color": 'Желтый',
        "id": 3
    },
    {
        "name": "Толстовка",
        "price": 4700,
        "discount": 20,
        "descr": "Тёплая и удобная толстовка с капюшоном — идеальна для прохладной погоды и отдыха.",
        "image": `../clothes/huddy_2.webp`,
        "type": "man",
        "color": 'Синий',
        "id": 4
    },
    {
        "name": "Блузка",
        "price": 7000,
        "discount": 20,
        "descr": "Лёгкая и женственная блузка с изящным кроем подчеркнёт твою утончённость. Подходит как для офиса, так и для повседневных образов.",
        "image": "../clothes/women_clothing_3.webp",
        "type": "woman",
        "color": 'Черный',
        "id": 5
    },
    {
        "name": "Футболка",
        "price": 2000,
        "discount": 40,
        "descr": "Классическая футболка из мягкого хлопка — комфортная, стильная и подходит для любого повседневного образа.",
        "image": `../clothes/tshirt_3.png`,
        "type": "man",
        "color": 'Коричневый',
        "id": 6
    },
    {
        "name": "Толстовка",
        "price": 5000,
        "discount": 15,
        "descr": "Тёплая и удобная толстовка с капюшоном — идеальна для прохладной погоды и отдыха.",
        "image": `../clothes/huddy_3.webp`,
        "type": "man",
        "color": 'Красный',
        "id": 7
    },
    {
        "name": "Платье",
        "price": 6800,
        "discount": 0,
        "descr": "Лёгкая и женственная блузка с изящным кроем подчеркнёт твою утончённость.",
        "image": "../clothes/women_clothing_4.webp",
        "type": "woman",
        "color": 'Зеленый',
        "id": 8
    },
    {
        "name": "Детская футболка",
        "price": 3000,
        "discount": 0,
        "descr": "Яркий и весёлый дизайн, который нравится детям и радует родителей.",
        "image": `../clothes/children_clothing_4.webp`,
        "type": "kid",
        "color": 'Белый',
        "id": 9
    },
    {
        "name": "Худди мужской",
        "price": 4200,
        "discount": 10,
        "descr": "Уютное худи из мягкого хлопка — тёплое, стильное и идеально для повседневной носки.",
        "image": "../clothes/man_clothing_1.webp",
        "type": "man",
        "color": 'Синий',
        "id": 10
    },
    {
        "name": "Детский комплект",
        "price": 3000,
        "discount": 0,
        "descr": "Практичные вещи на каждый день — легко стираются, не сковывают движения и долго носятся.",
        "image": `../clothes/children_clothing_2.webp`,
        "type": "kid",
        "color": 'Синий',
        "id": 11
    },
    {
        "name": "Свитер",
        "price": 8000,
        "discount": 0,
        "descr": "Лёгкая ветровка для активных дней — защищает от ветра и отлично дополняет образ.",
        "image": "../clothes/man_clothing_2.webp",
        "type": "man",
        "color": 'Черный',
        "id": 12
    },
    {
        "name": "Футболка",
        "price": 2000,
        "discount": 40,
        "descr": "Классическая футболка из мягкого хлопка — комфортная, стильная и подходит для любого повседневного образа.",
        "image": `../clothes/tshirt_2.png`,
        "type": "man",
        "color": 'Розовый',
        "id": 13
    },
    {
        "name": "Детский комплект",
        "price": 3100,
        "discount": 0,
        "descr": "Надёжная и качественная одежда для активных детей — подвижность без ограничений.",
        "image": `../clothes/children_clothing_7.webp`,
        "type": "kid",
        "color": 'Розовый',
        "id": 14
    },
    {
        "name": "Толстовка для спорта",
        "price": 5400,
        "discount": 0,
        "descr": "Тёплая и удобная толстовка с капюшоном — идеальна для прохладной погоды и отдыха.",
        "image": `../clothes/huddy_1.webp`,
        "type": "man",
        "color": 'Белый',
        "id": 15
    },
    {
        "name": "Майка мужская",
        "price": 6200,
        "discount": 0,
        "descr": "Удобная борцовка из дышащего материала — идеально для спорта, прогулок и жаркой погоды.",
        "image": "../clothes/man_clothing_3.webp",
        "type": "man",
        "color": 'Белый',
        "id": 16
    },
    {
        "name": "Платье",
        "price": 8000,
        "discount": 10,
        "descr": "Лёгкое и элегантное платье, подчёркивающее силуэт и создающее женственный образ.",
        "image": `../clothes/women_clothing_2.webp`,
        "type": "woman",
        "color": 'Коричневый',
        "id": 17
    },
    {
        "name": "Худи",
        "price": 3200,
        "discount": 0,
        "descr": "Тёплая и удобная толстовка с капюшоном — идеальна для прохладной погоды и отдыха.",
        "image": `../clothes/huddy_4.webp`,
        "type": "man",
        "color": 'Зеленый',
        "id": 18
    },
    {
        "name": "Детское платье",
        "price": 3500,
        "discount": 10,
        "descr": "Удобная и мягкая одежда для малышей — комфорт на весь день и свобода движений.",
        "image": `../clothes/children_clothing_1.webp`,
        "type": "kid",
        "color": 'Розовый',
        "id": 19
    },
    {
        "name": "Футболка",
        "price": 2000,
        "discount": 40,
        "descr": "Классическая футболка из мягкого хлопка — комфортная, стильная и подходит для любого повседневного образа.",
        "image": `../clothes/tshirt_1.png`,
        "type": "man",
        "color": 'Черный',
        "id": 20
    },
    {
        "name": "Свитшот",
        "price": 7000,
        "discount": 0,
        "descr": "Мягкий свитшот в минималистичном стиле — комфортный выбор для повседневной носки и уюта.",
        "image": `../clothes/huddy_5.webp`,
        "type": "man",
        "color": 'Коричневый',
        "id": 21
    },
    {
        "name": "Детский комплект",
        "price": 3300,
        "discount": 0,
        "descr": "Надёжная и качественная одежда для активных детей — подвижность без ограничений.",
        "image": `../clothes/children_clothing_5.webp`,
        "type": "kid",
        "color": 'Зеленый',
        "id": 22
    },
];

document.addEventListener('DOMContentLoaded', function() {
    // Создание локального хранилища
    if (!localStorage['buyItems']) localStorage.setItem('buyItems', '[]');
    if (!localStorage['basketItems']) localStorage.setItem('basketItems', '[]');

    // Карусель 
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

    // каталог одежды
    const clothesContainer = document.getElementById('clothes-container');
    let filteredCatalog = [];
    let filteredType = null;
    let currentFilter = document.getElementById('forMen');

    // Создание блока с одеждой
    function createClothesBlock({name, price, discount, descr, image, id}) {
        // Создание новых элементов
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

        
        // Добавление контента
        clothesName.textContent = name;
        clothesPrice.textContent = `${price}р`;
        clothesDiscount.textContent = `${discount}% скидка`;
        clothesDescr.textContent = descr;
        clothesBuyButton.textContent = 'Купить';
        clothesBasketButton.textContent = 'Добавить в корзину';
        clothesImage.src = image;

        clothesBuyButton.dataset.clothesIndex = id;
        clothesBasketButton.dataset.clothesIndex = id;


        // Добавление классов
        clothesBlock.classList.add('clothes-container');
        clothesBlock.tabIndex = 1;

        clothesImageContainer.classList.add('clothes__image-container');
        clothesDescrContainer.classList.add('clothes-descr__container');

        clothesImage.classList.add('clothes__image');
        clothesName.classList.add('clothes__name');
        clothesPrice.classList.add('clothes__price');
        clothesDiscount.classList.add('clothes__discount');
        clothesDescr.classList.add('clothes__descr');
        clothesBuyButton.classList.add('clothes__buy-btn');
        clothesBasketButton.classList.add('clothes__basket-btn');



        // Добавление ивента
        clothesBlock.addEventListener('click', () => {
            createClothesShowBlock(id);
        });

        // Добавление елементов в контеннер
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

    // Создание каталога с одеждой
    function createCatalog() {
        clothesDB.forEach(element => {
            createClothesBlock(element);
        });
    };

    // Логика селектора
    const selectPrice = document.getElementById('priceSelect');
    const selectColor = document.getElementById('colorSelect');

    selectPrice.addEventListener("change", () => {
        getFiltersInfo();
    });
    selectColor.addEventListener('change', () => {
        getFiltersInfo();
    });

    // Фильтры одежды
    const filterForMen = document.getElementById('forMen');
    const filterForWoman = document.getElementById('forWoman');
    const filterForChildren = document.getElementById('forChildren');
    const filterWithDiscounts = document.getElementById('withDiscounts');

    filterForMen.addEventListener('click', () => {
        // Если фильтр был активирован = выключение
        if (filterForMen.classList[1] === 'filter-btn--active') {

            filterForMen.classList.remove('filter-btn--active');
            filterForMen.classList.add('filter-btn--off');

            filteredType = null;

            // Вызов системы фильтрации
            return getFiltersInfo();
        };

        // Отключение старого фильтра
        if (currentFilter.classList[1] === 'filter-btn--active') {
            currentFilter.classList.remove('filter-btn--active');
            currentFilter.classList.add('filter-btn--off');

            filteredType = false;
        };

        // Включение нового фильтра
        filterForMen.classList.remove('filter-btn--off');
        filterForMen.classList.add('filter-btn--active');

        // Смена актуального фильтра
        filteredType = 'man';
        currentFilter = filterForMen;


        // Вызов системы фильтрации
        getFiltersInfo('man');
    });

    filterForWoman.addEventListener('click', () => {
        // Если фильтр был активирован = выключение
        if (filterForWoman.classList[1] === 'filter-btn--active') {

            filterForWoman.classList.remove('filter-btn--active');
            filterForWoman.classList.add('filter-btn--off');

            filteredType = null;

            // Вызов системы фильтрации
            return getFiltersInfo();
        };

        // Отключение старого фильтра
        if (currentFilter.classList[1] === 'filter-btn--active') {
            currentFilter.classList.remove('filter-btn--active');
            currentFilter.classList.add('filter-btn--off');

            filteredType = false;
        };

        // Включение нового фильтра
        filterForWoman.classList.remove('filter-btn--off');
        filterForWoman.classList.add('filter-btn--active');

        // Смена актуального фильтра
        filteredType = 'woman';
        currentFilter = filterForWoman;


        // Вызов системы фильтрации
        getFiltersInfo('woman');
    });

    filterForChildren.addEventListener('click', () => {
        // Если фильтр был активирован = выключение
        if (filterForChildren.classList[1] === 'filter-btn--active') {

            filterForChildren.classList.remove('filter-btn--active');
            filterForChildren.classList.add('filter-btn--off');

            filteredType = null;

            // Вызов системы фильтрации
            return getFiltersInfo();
        };

        // Отключение старого фильтра
        if (currentFilter.classList[1] === 'filter-btn--active') {
            currentFilter.classList.remove('filter-btn--active');
            currentFilter.classList.add('filter-btn--off');

            filteredType = false;
        };

        // Включение нового фильтра
        filterForChildren.classList.remove('filter-btn--off');
        filterForChildren.classList.add('filter-btn--active');

        // Смена актуального фильтра
        filteredType = 'kid';
        currentFilter = filterForChildren;


        // Вызов системы фильтрации
        getFiltersInfo('kid');
    });


    // Логика фильтров одежды
    function filtersForClothes(type, clothesArray) {
        filteredCatalog = [];
        clothesContainer.innerHTML = '';

        clothesArray.forEach(element => {
            if (element.type === type) {
                filteredCatalog.push(element);

                createClothesBlock(element);
            };
        });
    };

    function getFiltersInfo() {
        let sortedClothesArray = [];
        console.log(filteredType);
        console.log(selectColor.value);

        clothesContainer.innerHTML = '';
        
        clothesDB.forEach(element => {
            // Проверка на тип
            if (element.type !== filteredType && filteredType !== null) return;

            // Проверка по цвету
            if (selectColor.value !== 'Цвет' && selectColor.value !== 'Любой цвет') {
                if (element.color !== selectColor.value && selectColor.value !== 'Цвет' && selectColor.value !== 'Любой цвет') return;
            };

            // Проверка на наличие скидки
            if (selectPrice.value === "По скидке" && element.discount === 0) return;

            // Поиск подстроки
            const searchInput = document.getElementById('searchInput');
            if (!element.name.includes(searchInput.value)) return;

            sortedClothesArray.push(element);
        });

        // Проверка по цене
        switch (selectPrice.value) {
            case "По возрастанию цены":
                for (let i = 0; i < sortedClothesArray.length; ++i) {
                    for (let j = 0; j < sortedClothesArray.length - 1; ++j) {
                        if (Number(sortedClothesArray[j]['price']) > Number(sortedClothesArray[j + 1]['price'])) {
                            sortedClothesArray.splice(j, 0, sortedClothesArray[j + 1]);
                            sortedClothesArray.splice(j + 2, 1);
                            continue;
                        };
                    };
                };
                break;
            case "По убыванию цены":
                for (let i = 0; i < sortedClothesArray.length; ++i) {
                    for (let j = 0; j < sortedClothesArray.length - 1; ++j) {
                        if (Number(sortedClothesArray[j]['price']) > Number(sortedClothesArray[j + 1]['price'])) {
                            sortedClothesArray.splice(j, 0, sortedClothesArray[j + 1]);
                            sortedClothesArray.splice(j + 2, 1);
                            continue;
                        };
                    };
                };
                sortedClothesArray.reverse();
                break;
        };

        // Создание элемента прошедщего фильтрацию
        sortedClothesArray.forEach(element => {
            createClothesBlock(element);
        });
    };

    function removeOldFilters(type) {
        filterForMen.classList.remove('filter-btn--active');
        filterForWoman.classList.remove('filter-btn--active');
        filterForChildren.classList.remove('filter-btn--active');
        filterWithDiscounts.classList.remove('filter-btn--active');
    };

    // Логика поиска
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', () => {
        getFiltersInfo();
    });

    // ScrollUp логика
    function scrollUp() {
        let positionFlag = false;
        const btnUp = document.querySelector('.scroll-btn');

        window.addEventListener('scroll', () => {
            console.log(`Current cord >>> ${window.pageYOffset}`);
            if (window.pageYOffset >= 913 && positionFlag === false) {
                positionFlag = true;
                btnUp.classList.remove('scroll-btn--close');
                btnUp.classList.add('scroll-btn--open');
            } else if (window.pageYOffset < 913 && positionFlag === true) {
                positionFlag = false;
                btnUp.classList.remove('scroll-btn--open');
                btnUp.classList.add('scroll-btn--close');
            };
        }, { passive: true });

        btnUp.addEventListener('click', () => {
            window.scrollTo({
                top: 713,
                behavior: "smooth",
            });
        });
    };

    // Создать окно с просмотром одежды
    function createClothesShowBlock(clothesID) {
        const showClothesWindow = document.getElementById('show-clothes');
        showClothesWindow.style.display = 'flex';

        window.scrollTo({
        top: 713,
        behavior: "smooth",
        });

        document.body.classList.add('stop-scrolling');


        // Создание окна с одеждой
        const clothesImage = document.querySelector('.show-clothes__image-container > .clothes__image');
        const clothesName = document.querySelector('.show-clothes__name');
        const clothesPrice = document.querySelector('.show-clothes__price');
        const clothesDiscount = document.querySelector('.show-clothes__discount');
        const clothesDescr = document.querySelector('.show-clothes__descr');

        const currentClothes = clothesDB[clothesID];

        clothesImage.src = currentClothes.image;
        clothesName.textContent = currentClothes.name;
        clothesPrice.textContent = `${currentClothes.price}р`;
        clothesDiscount.textContent = `${currentClothes.discount}% скидка`;
        clothesDescr.textContent = currentClothes.descr;

        // Добавлеение ID к кнопке
        const clothesBuyBtn = document.querySelector('.show-clothes__buy-btn');
        const clothesBasketBtn = document.querySelector('.show-clothes__basket-btn');

        clothesBuyBtn.setAttribute('data-clothes-index', clothesID);
        clothesBasketBtn.setAttribute('data-clothes-index', clothesID);
    };
    // Закрыть окно просмотра одежды
    const closeShowWindowBtn = document.getElementById('close-showing');

    function closeShowWindow() {
        const showClothesWindow = document.getElementById('show-clothes');
        showClothesWindow.style.display = 'none';

        document.body.classList.remove('stop-scrolling');
    };

    closeShowWindowBtn.addEventListener('click', closeShowWindow);

    // Купить или добавить в корзину одежду
    const buyClothesBtn = document.querySelector('.show-clothes__buy-btn');
    const addToBasketClothesBtn = document.querySelector('.show-clothes__basket-btn');

    buyClothesBtn.addEventListener('click', () => {
        const buyAlert = document.querySelector('.buy-alert');
        buyAlert.style.display = 'block'
        setTimeout(() => {
            buyAlert.style.display = 'none'
        }, 3000);

        // Добавление в базу купленных товаров
        buyClothesLogic(buyClothesBtn.getAttribute('data-clothes-index'), 'buyItems');
    });

    addToBasketClothesBtn.addEventListener('click', () => {
        const buyAlert = document.querySelector('.buy-alert');
        buyAlert.style.display = 'block'
        setTimeout(() => {
            buyAlert.style.display = 'none'
        }, 3000);

        // Добавление в базу купленных товаров
        buyClothesLogic(buyClothesBtn.getAttribute('data-clothes-index'), 'basketItems');
    });

    // Логика покупки товаров и корзины
    function buyClothesLogic(clothesID, storageName) {
        console.log(clothesID);

        // Парсинг текущего массива с обьектами в переменную.
        let newObject = JSON.parse(localStorage[storageName]);

        // Добавление нового обьекта в переменную.
        newObject.push(clothesID);

        // Замена массива на актуальный.
        localStorage[storageName] = JSON.stringify(newObject);
    };

    createCatalog();
    scrollUp();
});