
    //scroll on block of sites
    const Links = document.querySelectorAll(".nav__link") 
    Links.forEach((value, indexNav) => {
      value.addEventListener("click", function() {
        const footerChar = document.querySelectorAll("#footer");
        
        footerChar.forEach((value, index1) => {
           if (indexNav === index1) {
            function scrollTo(element2) {
              window.scroll({
                left: 0,
                top: element2.offsetTop,
                behavior: 'smooth'
              });
             
            };
            scrollTo(value);
           };
           
        });
     
      });
     
    });
    //scroll on block of sites
  /*выше написанный код (scroll on block of sites) собирает список из объектов (элементы навигации сайта)
  Перебирает данный массив и задает каждому элементу значение value и индекс элемента.
  Затем ставим прослшник события клика на данный объект и когда пройзодет клик сработает функиця, которая
  соберет массив с id #footer.
    Так же массив footerchar перебираем и так же задаем два аргумента: value и index1. 
    И задаю стрелочную функиця, которая проверяет совпадают ли индексы у объекта навигации и блока до которого 
    должен довести скролл. Если значение верно сработает функция скролла, которая доведет до назначенного блока.
  */


    //burger
    const Popup = document.querySelector(".popup");
    const BurgerBtn = document.querySelector(".burger");
    const BurgerItem = document.querySelectorAll(".burger__item");
    const Nav = document.querySelector('.nav').cloneNode(1)
    const popupInner = document.querySelector(".popup_inner")
    const footerChar = document.querySelectorAll("#footer");

    BurgerBtn.addEventListener("click", function() {
	Popup.classList.toggle("visible-popup");

    BurgerItem.forEach((item) => {
       item.classList.toggle("burger__item--active_items")
    });
    Nav.classList.toggle("active")
    popupInner.appendChild(Nav)
    const navLinkChar = Array.from(document.querySelectorAll(".nav__link"))
    const NavLinkCharSlice = navLinkChar.slice(7, 14)
    NavLinkCharSlice.forEach((element, indexNav) => {
        element.addEventListener("click", ()=> {
            Popup.classList.remove("visible-popup");
            BurgerItem.forEach((item) => {
                item.classList.remove("burger__item--active_items")
             });
             Nav.classList.remove("active")
             popupInner.appendChild(Nav)
             
             footerChar.forEach((value, index1) => {
                if (indexNav === index1) {
                 function scrollTo(element2) {
                   window.scroll({
                     left: 0,
                     top: element2.offsetTop,
                     behavior: 'smooth'
                   });
                  
                 };
                 scrollTo(value);
                };
                
             });
            
        })
    }) 
})
//burger

/*Данный раздел кода burder собирает dom елементы из html, затем задаю прослушник
события клика на бургер-кнопку, при которой сработает функиця, которая поменяет селектор у попап-окна и он станет видным. 
Затем у массива BurgerItem (это 3 полосы, которые формирует сам бургер-кнопку) присвоем метод foreach, с callback функции, которая для самих элементов массива (item) поменяет
селекотор на активый. Таким образом кнопка станет активной.
Воспользуемся селектор nav, у которого есть метод (cloneNode() он собирает наследованные блоки внутри самого Nav), и поменяем ему класс на активный.
Внутри попапа сделаем наследование константы Nav. 
Так же пришлось создать новую переменную у который мы обрежем массив с нужными элементами, т.к. у нас не может быть двух активных массов. 
После этого данный обрезанный массив перебираем методом forEach с аргументами element и indexNav, с функции, которая 
аргумент value с прослушиванием события клик, при котором сработает стрелочкая функция. Она же в свою очередь уберет класс (visible-popup) у попап окна и у массива Nav.
Таким образом у нас попап окно заново скрывается  при клике на элемент попапа уберутся активное внешние окно и сработает функиця скролла, которая в свою очередь доведет
пользователя до нужного раздела сайта.
*/
    



