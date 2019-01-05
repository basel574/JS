//Создает ссылку
function createLink() {
    var addressLink = prompt('Введите адрес ссылки'),
        nameLink = prompt('Введите название ссылки'),
        yourLink = 'Ваша ссылка: <a href="http://' + addressLink + '">' + nameLink + '</a><br>',
    paragr = document.getElementById("createLink");
    yourLink += 'Код ссылки: &lt;a href="http://' + addressLink + '"&gt;' + nameLink + '&lt;/a&gt;';
    paragr.innerHTML = yourLink;
}

function countPercent() {
    var money = prompt('Укажите количество рублей'),
        percent = prompt('Сколько процентов нужно вычислить?'),
    yourPercent = document.getElementById("countPercent");
    yourPercent.innerHTML = (percent + ' % от ' + money + ' руб. составляет ' + ((money/100)*percent) + ' руб.');
}

    var countries = ['Россия', 'США', 'Китай', 'Индия', 'Бразилия', 'Пакистан'],
        population = [146, 326, 1389, 1329, 208, 211],
        units = ' мил. </br>',
        connector = ' - ';
        rus = (countries[0] + connector + population[0] + units),
        usa = (countries[1] + connector + population[1] + units),
        chi = (countries[2] + connector + population[2] + units),
        ind = (countries[3] + connector + population[3] + units),
        bra = (countries[4] + connector + population[4] + units),
        pak = (countries[5] + connector + population[5] + units);
    table = document.getElementById("population");
    table.innerHTML = (rus+usa+chi+ind+bra+pak);

    var car = [
        "тип",
        carType = [
            "грузовой",
            "легковой"],
        "радио",
        "цвет",
        "скорость"
    ];
//Добавление элементов в массив
    //Добавление элементов в массив вручную, указывая индекс последнего элемента
        var i = car.length; //присваивает переменной i длину массива
        car[i] = "тормоз"; //добавляет "тормоз" в конец массива
        car[i+1] = "салон";
    //Метод .push() добавляет элемент 123142 в конец массива
        var nam = car.push(123142);
    //Метод .unshift() добавлет элементы "внедорожник" и "фургон" в начало массива (в данном случае в подмассив)
        carType.unshift("внедорожник", "фургон");
//Удаление элементов массива
    //Метод .pop удаляет последний элемент массива
        var nam2 = car.pop();
        //Метод .shift() удаляет первый элемент массива
        var nam3 = carType.shift();
//.splice() универсальный метод для работы с элементами массива
    //первое значение(2) выбирает индекс, второе значение удаляет один или несколько индексов(в данном случае один)
        car.splice(2,1);
    //В данном случае второе значение (0) означает, что элементы не удаляются, а последующие значения добавляются перед указанным вначале индексом 5.
        car.splice(5,0,"руль","колесо" );
    //Замена элементов массива
        carType.splice(0,3, "легковой", "грузовой", "фургон");
    console.log(car);//Возвращает массив в консоль
    console.log(car.length);//Возвращает длину массива
    console.log("nam = " + nam);//Возвращает длину массива
    console.log("nam2 = " + nam2);//Возвращает значение удаленного элемента
    console.log("nam3 = " + nam3);//Возвращает значение удаленного элемента

///////////////////////////////////////////////////////////////////////////
    var note = "",
        day = "",
        mas = [];
    function mySend() {
        var newInp = document.getElementById("note").value;
            toPrint.push(newInp);
    }
