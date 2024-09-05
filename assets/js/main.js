// 1 задание

zad1.onclick = function () {

    let price = +prompt('Стоимость товара');
    let money = +prompt('Кол-во денег клиента');

    if (price > 0 & money > 0) {
        if (price > money) {
            alert(`Для покупки не хватает ${price - money}р`);
        } else if (price <= money) {
            alert(`Покупка совершена. Сдача ${money - price}р`);
        } else {
            alert("Покупка совершена");
        }
    } else {
        alert("Неверный формат введенных данных");
    }
}
// 2 задание

zad2.onclick = function () {

    let z = +prompt('Введите число');

    if (z > 0) {
        alert(1);
    } else if (z < 0) {
        alert(-1);
    } else if (z == 0) {
        alert(0);
    } else {
        alert("Неверный формат введенных данных");
    }
}

// 3 задание

zad3.onclick = function () {

    let a = +prompt('Введите число');
    let b = +prompt('Введите число');

    let result = (a + b < 4) ? 'Мало' : 'Много';

    alert(result);
}

// 4 задание

zad4.onclick = function () {

    let login = prompt('Введите login');

    let message = login == 'Сотрудник' ? 'Привет' :
        login == 'Директор' ? 'Здравствуйте' :
            login == '' ? 'Нет логина' : '';

    alert(message);
}

// 5 задание

zad5.onclick = function () {

    let userLogin = prompt('Введите login');
    let userMessage;

    if (userLogin == 'Админ') {
        let userPass = prompt('Введите пароль');
        if (userPass == 'Я главный') {
            userMessage = 'Здравствуйте!'
        } else if (userPass > '') {
            userMessage = 'Неверный пароль';
        } else {
            userMessage = 'Отменено';
        }
    } else if (userLogin > '') {
        userMessage = 'Я вас не знаю';
    } else {
        userMessage = 'Отменено';
    }

    alert(userMessage);
}