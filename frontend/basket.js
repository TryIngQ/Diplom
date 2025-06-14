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
    const clothesContainer = document.getElementById('clothes-container');
    let typeOfStorage = 'basketItems';
    let clothesIndex = 0;
    
    function getItemsFromStorage(storageName) {
        // Парсинг текущего массива с обьектами в переменную.
        let newObject = JSON.parse(localStorage[storageName]);

        newObject.forEach(element => {
            createClothesBlock(clothesDB[element]);
        });
    };

    // Создание блока с одеждой
    function createClothesBlock({name, price, discount, descr, image, id}) {
        // Создание новых элементов
        const clothesBlock = document.createElement('div');
        clothesBlock.setAttribute('id', clothesIndex++);

        const clothesImageContainer = document.createElement('div');
        const clothesDescrContainer = document.createElement('div');

        const clothesImage = document.createElement('img');
        const clothesName = document.createElement('h2');
        const clothesPrice = document.createElement('p');
        const clothesDiscount = document.createElement('p');
        const clothesDescr = document.createElement('p');
        const clothesDeleteButton = document.createElement('button');

        
        // Добавление контента
        clothesName.textContent = name;
        clothesPrice.textContent = `${price}р`;
        clothesDiscount.textContent = `${discount}% скидка`;
        clothesDescr.textContent = descr;
        clothesImage.src = image;

        clothesDeleteButton.dataset.clothesIndex = id;

        // Смена текста кнопки 
        if (typeOfStorage === 'basketItems') {
            clothesDeleteButton.textContent = 'Убрать из корзины';
        } else if (typeOfStorage === 'buyItems') {
            clothesDeleteButton.textContent = 'Отменить покупку';
        };

        // Добавление классов
        clothesBlock.classList.add('clothes-container');

        clothesImageContainer.classList.add('clothes__image-container');
        clothesDescrContainer.classList.add('clothes-descr__container');

        clothesImage.classList.add('clothes__image');
        clothesName.classList.add('clothes__name');
        clothesPrice.classList.add('clothes__price');
        clothesDiscount.classList.add('clothes__discount');
        clothesDescr.classList.add('clothes__descr');
        clothesDeleteButton.classList.add('clothes__delete-btn');



        // Добавление ивента
        clothesDeleteButton.addEventListener('click', () => {
            clothesBlock.remove();
            removeClothesFromStorage(clothesBlock);
        });

        // Добавление елементов в контеннер
        clothesBlock.append(clothesImageContainer);
        clothesBlock.append(clothesDescrContainer);

        clothesImageContainer.append(clothesImage);

        clothesDescrContainer.append(clothesName);
        clothesDescrContainer.append(clothesPrice);
        clothesDescrContainer.append(clothesDiscount);
        clothesDescrContainer.append(clothesDescr);
        clothesDescrContainer.append(clothesDeleteButton);


        clothesContainer.append(clothesBlock);
    };

    function removeClothesFromStorage(clothesBlock) {

        let clothesList = document.querySelectorAll('.clothes-container');
        console.log(clothesList);
        for (let i = 0; i < clothesList.length; ++i) { 
            clothesList[i].id = i;
        };

        let activeObject = (JSON.parse(localStorage[typeOfStorage]));
        activeObject.splice(clothesBlock.id, 1); // Удаление активного элемента.
        localStorage[typeOfStorage] = JSON.stringify(activeObject); // Замена массива на актуальный.
    };

    function storageTypeBtns() {
        const changeToBasket = document.querySelector('.clothes-list__type-basket');
        const changeToBuy = document.querySelector('.clothes-list__type-buy');

        changeToBasket.addEventListener('click', () => {
            changeToBasket.classList.add('clothes-list__btn--active');
            changeToBuy.classList.remove('clothes-list__btn--active');

            clothesIndex = 0;
            clothesContainer.innerHTML = '';
            typeOfStorage = 'basketItems';

            getItemsFromStorage('basketItems');
        });

        changeToBuy.addEventListener('click', () => {
            changeToBuy.classList.add('clothes-list__btn--active');
            changeToBasket.classList.remove('clothes-list__btn--active');

            clothesIndex = 0;
            clothesContainer.innerHTML = '';
            typeOfStorage = 'buyItems';

            getItemsFromStorage('buyItems');
        });
    };

    getItemsFromStorage('basketItems');
    storageTypeBtns();
});