
const myName = 'Ярослав' // Задаем мое имя
let number = prompt('Сколько Ярославов вам нужно для работы? Введите число'), // Задаем промпт 
last = number.slice(-2) // отслаиваем 2 последних числа
 
if (last >= '11' && last <= '20') { // Есть проблемы с 11 до 20
    last = last.slice(-2)  // отсекаем если правда 2 циферки
    returnNumber = Number(last) // Преобразовываем в число
} else {
    last = last.slice(-1) // Если нет проблем то 1 
    returnNumber = Number(last)
}
 

if ( last > 10 && last < 20) {
    alert('К вашим услугам ' + number + ' ' + myName + 'ов')
}
else if (last >1 && last < 5) {
    alert('К вашим услугам ' + number + ' ' + myName + 'а')
} 
else if(last == 0) { // ПОЧЕМУ 0 ЭТО СТРОКА?!
    alert('К вашим услугам ' + number + ' ' + myName + 'ов')
} else if (last == 1) { // ПОЧЕМУ 1 ЭТО СТРОКА?!!
    alert('К вашим услугам ' + number + ' ' + myName)
} 
else if (last > 4) {
    alert('К вашим услугам ' + number + ' ' + myName + 'ов')
} 


