//Знижка (банер) купон.......
const cuponModal = document.querySelector("#cuponModal");
let cuponNumber = "";
let discountPersent = 0;

//генеруємо знижку для купона
for (i = 0; i < 8; i++) {
  cuponNumber += Math.floor(Math.random() * 10);
}

if (cuponNumber > 0 && cuponNumber < 25000000) {
  discountPersent = 15;
} else if (cuponNumber >= 25000000 && cuponNumber < 50000000) {
  discountPersent = 20;
} else if (cuponNumber >= 50000000 && cuponNumber < 75000000) {
  discountPersent = 25;
} else if (cuponNumber >= 75000000 && cuponNumber < 100000000) {
  discountPersent = 30;
}

//візуальна частина купону
cuponModal.addEventListener("click", function createCupon() {
  Swal.fire({
    title: cuponNumber,
    icon: "info",
    html: "You discount is " + discountPersent + " %",
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
});
//************************************************************** */

//перемикач день-ніч при кліку на кнопку
const container = document.querySelector(".container");
const searchInp = document.querySelector(".main__searchInp");
const moonIcon = document.querySelector(".main__daytimeMoon");
const sunIcon = document.querySelector(".main__daytimeSun");
//зміна backgraund на header
const header = document.querySelector(".header");
//2 секція - зміна кольору шрифта
const menuFontColor = document.querySelector(".menu__assortment");
//3 секція - зміна кольору шрифта
const topInfoFontColor = document.querySelector(".top__rightInfo");
//4 секція - зміна кольору background та шрифта
const reservationFontBgColor = document.querySelector(".reservation");
// 4 секція - зміна кольору background та шрифта для reservation__form input
const reservationBgColor = document.querySelector(".reservation__form");
// 4 секція - зміна кольору border-bottom для input
const reservationBbColorInp = document.querySelectorAll(
  ".reservation__formData"
);
// 4 секція - зміна кольору шрифта для button
const reservationFontColorBtn = document.querySelector(".reservation__formBtn");
//5 секція - зміна кольору background та шрифта
const orderFontBgColor = document.querySelector(".order");
//5 секція - зміна кольору background аккордіону
const accordionItemBg = document.querySelectorAll(".accordion__item");
//5 секція - зміна кольору background іконки аккордіону
const accordionItemIconBg = document.querySelectorAll(".accordion__itemIcon");
//5 секція - зміна кольору background секції "Pay"
const orderBodyPay = document.querySelector(".order__bodyPay");
//5 секція - зміна кольору шрифта секція "Pay" для купона
const orderPayCupon = document.querySelector(".order__payCupon");

moonIcon.addEventListener("click", toggleTimeMode);
sunIcon.addEventListener("click", toggleTimeMode);

function toggleTimeMode() {
  moonIcon.classList.toggle("hide");
  sunIcon.classList.toggle("hide");
  container.classList.toggle("bgWhite");
  container.classList.toggle("bgBlack");
  header.classList.toggle("bgWhite");
  header.classList.toggle("bgBlack");
  searchInp.classList.toggle("bgWhite");
  searchInp.classList.toggle("bgBlack");
  menuFontColor.classList.toggle("menu__assortmentDay");
  topInfoFontColor.classList.toggle("top__rightDay");
  reservationFontBgColor.classList.toggle("reservation__day");
  reservationBgColor.classList.toggle("reservation__formDay");
  reservationBbColorInp.forEach(function (el) {
    el.classList.toggle("reservation__formDataDay");
  });
  reservationFontColorBtn.classList.toggle("reservation__formBtnDay");
  orderFontBgColor.classList.toggle("order__day");
  // accordion**********************
  accordionItemBg.forEach(function (el) {
    el.classList.toggle("accordion__itemDay");
  });
  accordionItemIconBg.forEach(function (el) {
    el.classList.toggle("accordion__itemIconDay");
  });
  // ********************************
  orderBodyPay.classList.toggle("order__bodyPayDay");
  orderPayCupon.classList.toggle("order__payCuponDay");
}

//перемикач день-ніч по часу
const currentTime = new Date().toLocaleTimeString();
const nightVueTime = new Date("Sun Apr 02 2023 20:00:00").toLocaleTimeString();
const dayVueTime = new Date("Sun Apr 02 2023 06:00:00").toLocaleTimeString();

if (currentTime < nightVueTime && currentTime > dayVueTime) {
  toggleTimeMode();
}
//************************************************ */

// валідація полів форми
const reservationFormBtn = document.querySelector(".reservation__formBtn");
const reservationFormName = document.querySelector("#reservation__formName");
const reservationFormEmail = document.querySelector("#reservation__formEmail");
const reservationFormPeopleNum = document.querySelector(
  "#reservation__formPeopleNum"
);

reservationFormBtn.addEventListener("click", sendMail);

function sendMail(e) {
  // e.preventDefault();
  if (reservationFormName.value) {
    if (testName(reservationFormName)) {
      e.preventDefault();
      reservationFormName.value = "Fill in without numbers";
      formError(reservationFormName);
    }
  }

  if (reservationFormEmail.value) {
    if (testEmail(reservationFormEmail)) {
      e.preventDefault();
      reservationFormEmail.value = "Incorrectly entered address";
      formError(reservationFormEmail);
    }
  }

  if (isNaN(reservationFormPeopleNum.value)) {
    e.preventDefault();
    reservationFormPeopleNum.value = "Enter only numbers";
    formError(reservationFormPeopleNum);
  }
}

// функція перевірки Name на цифри
function testName(input) {
  return /[0-9]/.test(input.value);
}

// функція перевірки Email
function testEmail(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

// функція зміни поля input при помилці
function formError(el) {
  el.classList.add("error");
  el.addEventListener("click", function () {
    el.value = "";
    el.classList.remove("error");
  });
}

//*********************************************************

// let stroka = reservationFormName.value;
// let est_chislo = false;
// arr = stroka.split("");
// for (i = 0; i < arr.length; i++) {
//   let chislo = Number(arr[i]);
//   if (!isNaN(chislo)) {
//     est_chislo = true;
//     console.log("Нашли число. Оно равно -- " + chislo);
//   }
// }
//*********************************************************

//аккордіон випадаючий блок
const accordionItem = document.querySelectorAll(".accordion__itemText");

accordionItem.forEach(function (el) {
  el.addEventListener("click", function (e) {
    this.firstElementChild.classList.toggle("accordion__scale");
    this.lastElementChild.classList.toggle("accordion__hide");
  });
});
//*********************************************************
