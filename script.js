const pass = document.querySelector("#pass");
const rePass = document.querySelector("#re-pass");

function validatePassword() {
    if (pass.value !== rePass.value) {
        pass.style.border = "2px solid red";
        rePass.style.border = "2px solid red";
    } else {
        pass.style.border = "2px solid green";
        rePass.style.border = "2px solid green";
    }
}

// Добавляем обработчик события input для полей пароля
pass.addEventListener("input", validatePassword);
rePass.addEventListener("input", validatePassword);

// Добавляем обработчик события submit для формы
document.querySelector(".form__block").addEventListener("submit", function (event) {
    validatePassword();

    // Остановка отправки формы, если пароли не совпадают
    if (pass.value !== rePass.value) {
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var priceList = document.querySelector('.price__list');

    // Вычисляем половину ширины видимой области
    var halfViewportWidth = priceList.clientWidth / 2;

    // Вычисляем среднюю точку горизонтальной ширины списка
    var middlePoint = priceList.scrollWidth / 2;

    // Устанавливаем значение scrollLeft на середину
    priceList.scrollLeft = middlePoint - halfViewportWidth;
});
