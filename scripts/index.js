//task2

var courseName = "Mate Academy";
var groupNames = ["fe_oct18", "fe_dec18", "be_oct18"];
var ourGroupName = "fe_oct18";
var ourGroupStudents = ["Anton", "Sergey", "Ivan", "Vlad", "Yulia", "Dmitry", "Yura", "Alina", "Veronika", "Roman"];

//task3
var question = prompt("Скільки у вас є грошей", "");

while (question === "" || question < 0) {
  question = prompt("Введіть, будь-ласка, суму грошей");
}

if (question >= 100) {
  var bigMac = confirm("Ви можете купити БігМакМеню. Бажаєте?");
} else if (question >= 50) {
  var chisburgerAndPotato = confirm("Ви можете купити Чізбургер і картоплю. Бажаєте?");
} else if (question >= 20) {
  var cola = confirm("Ви можете купити колу. Бажаєте?");
} else{
  alert("Пробачте, в нашому закладі немає страв для вас :(")
}

//task4
var message = "Ви замовили ";
var messageNothing = "Ви нічого не замовили";

if (bigMac) {
  alert(message + "БігМакМеню");
} else if (chisburgerAndPotato) {
  alert(message + "Чізбургер і картоплю");
} else if (cola) {
  alert(message + "колу");
} else {
  alert(messageNothing);
}


//task5
if (bigMac) {
  console.log(message + "БігМакМеню");
} else if (chisburgerAndPotato) {
  console.log(message + "Чізбургер і картоплю");
} else if (cola) {
  console.log(message + "колу");
} else {
  console.log(messageNothing);
}


//task 7
function validTime(question) {
  var time = prompt(question);

  while (time === "" || time < 0 || time > 23) {
    time = prompt(question + " від 0 до 23 годин");
  }

  return time;
}

var discountStart = validTime("Введіть годину початку знижок");
var discountEnd = validTime("Введіть годину закінчення знижок");
var presentTime = validTime("Введіть теперішній час");

var isDiscount = "Знижка 100%";
var isntDiscount = "Вибачте знижка зараз не діє, приходьте з " + discountStart + " до " + discountEnd;

if (discountStart < discountEnd && presentTime >= discountStart && presentTime <= discountEnd) {
  console.log(isDiscount);
} else if (discountStart > discountEnd && (presentTime >= discountStart || presentTime <= discountEnd)){
  console.log(isDiscount);
} else {
  console.log(isntDiscount);
}

//task 8
var isStepanCome = confirm("Чи прийшов Степан?");
var isNikoCome = confirm("Чи прийшов Микола?");
var isAnjelaCome = confirm("Чи прийшла Анжела?");
var mashaSatisfied = "Маша була рада";
var mashaDissapointed = "Маша була засмучена";

if (isStepanCome && isNikoCome && !isAnjelaCome) {
  console.log(mashaSatisfied);
} else if ((isStepanCome && !isNikoCome && isAnjelaCome) || (!isStepanCome && isNikoCome && isAnjelaCome)) {
  console.log(mashaSatisfied);
} else if (isAnjelaCome && !isNikoCome && !isStepanCome) {
  console.log(mashaSatisfied);
} else {
  console.log(mashaDissapointed);
}


