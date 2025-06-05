"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // * 1. Начало.
    // * 2. Получаем все элементы изображений с описанием.
    // * 3. Для каждого изображения (проверяем есть ли такие изображения):
    // * 3.1. Добавляем обработчик наведения курсора на изображение:
    // * 3.1.1. Да:
    // * 3.1.1.1. показываем текст при наведении.
    // * 3.1.2. Нет: продолжаем.
    // * 3.2. Добавляет обработчик курсор уходит с изображения:
    // * 3.3.1. Да:
    // * 3.3.1.1. Скрываем элемент с описанием.
    // * 3.3.2. Нет: продолжаем.
    // * 4. Конец
let description = [
    "Формат: Различные размеры (A3, A2, A1, билборды 3×6 м), горизонтальные и вертикальные. Материалы: Пластик, баннерная ткань, световые панели (с подсветкой). Гарантируем яркий дизайн и заметность.",
    "Формат: Плакаты (А3, А2), наклейки на стены и двери, цифровые экраны. Как преподносим: Ваша реклама работает 24/7 – люди в лифте смотрят на неё в среднем 15-30 секунд. Можно таргетировать по районам и типам зданий (жилые, офисные)",
    "Формат: А4, А5, евробуклет (с фальцовкой), полноцветная печать. Как преподносим: Распространяем в местах скопления ЦА (мероприятия, выставки, ТЦ) или доставляем под конкретную аудиторию.",
    "Формат: Стандарт (90×50 мм), нестандартные формы (круглые, с вырубкой). Как преподносим: Делаем стильные и запоминающиеся визитки, которые хочется сохранить. Быстрая печать (от 1 дня).",
    "Формат: А5, А6, А4 (односторонние или двусторонние). Как преподносим: Раздаем на улицах, в почтовые ящики, на мероприятиях. Можно заказать адресную рассылку по нужным районам.",
    "Виды продукции: Каталоги, брошюры, плакаты, календари, наклейки, открытки. Как преподносим: Подбираем оптимальный формат под ваши задачи – от рекламных материалов до корпоративной полиграфии.",
    "Что входит: Аудит сайта, подбор ключевых слов, оптимизация контента, технические доработки, ссылочное продвижение. Как преподносим: Увеличиваем видимость сайта в Google и Яндекс, привлекаем органический трафик и клиентов.",
    "Что входит: Публикации в СМИ, работа с блогерами, организация мероприятий, создание инфоповодов. Как преподносим: Формируем положительный имидж компании через медиа, соцсети и партнерские проекты."
];
    const intensiveImg = document.querySelectorAll(".services__item");
    intensiveImg.forEach((item, index) => {
        let imgbox = item.querySelector(".services__item__img");
        if (imgbox){
            imgbox.addEventListener('mouseenter', () => {
                let p = document.createElement("p");
                p.classList.add("services__item__description");
                p.innerText = description[index];
                item.append(p);
            });
            imgbox.addEventListener('mouseleave', () => {
                item.querySelector(".services__item__description").remove();
            });
        }
        
    });
    /*intensiveImg.addEventListener('mouseenter', () => { 
        intensiveImg.forEach((item, index) => {
            console.log(item);
            /*const intensiveText = document.querySelectorAll(".services__list")
            item.addEventListener('mouseenter', () => {
              item.style.opacity = 0.5;
              intensiveText[index].removeAttribute('hidden');
            });
        
            item.addEventListener('mouseleave', () => {
              item.style.opacity = 1;
              intensiveText[index].setAttribute('hidden', true);
            });
        });  
    });   
         console.log("Мышка наведена на изображение, показываем текст");*/
});

const cardsPrice = document.querySelector('.price-table');
if (cardsPrice) {  
    const priceList = cardsPrice.querySelector('.price-table');
    const cardsPriceData = {
        price1: {
                level: '– Стартовый –',
                price: '10 000 ₽',
                description: 'Рекламная кампания в соц сетях 3 баннера Результы раз в месяц Поддержка по почте   ',
                button: 'Заказать сейчас'
            },
            price2: {
                level: '– Стандарт –',
                price: '25 000 ₽',
                description: '+ "Стартовый" пакет Реклама в (Google Ads, Яндекс.Директ) 5 баннеров и 2 видеоролика Результаты раз в две недели Поддержка по телефону и почте ',
                button: 'Заказать сейчас'
            },
            price3: {
                level: '– Премиум –',
                price: '50 000 ₽',
                description: '+ "Стандартный" пакет Контент-план + публикация постов 10 баннеров и 5 видеороликов Консультации по стратегии продвижения Результы каждую неделю Полное сопровождение рекламных кампаний  ',
                button: 'Заказать сейчас'
            }
        }
        const createCard = (level, price, description, button) => {
            const card = `
            <div class="plans">
                <p class="title-plan">${level}</p>
                <p class="price">${price}</p>
                <p class="text-price">${description}</p>
                <button class="buy">${button}</button>
            </div>
        `;
        return card;
    }

        for (const cardKey in cardsPriceData) {
            const card = cardsPriceData[cardKey];
            const cardElement = createCard(card.level, card.price, card.description, card.button);
            priceList.insertAdjacentHTML('beforeend', cardElement);
       
        }
    }


const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
       preloader.style.opacity = "0";
       preloader.style.visibility = "hidden";
       content.style.display = "block";
       preloader.remove();
    }, 3000);
}

