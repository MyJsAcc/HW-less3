
const myName = 'Ярослав' // Задаем мое имя
const number = +prompt('Введите необходимое кол-во Ярославов для работы') // Задаем промпт 
 
const numberSlicedOnce = number % 10
const numberSlicedTwice = number % 100
 
if (numberSlicedTwice > 9 && numberSlicedTwice < 21 || numberSlicedTwice === 0 || numberSlicedOnce > 4) {
   alert('К вашим услугам ' + number + ' ' + myName + 'ов')
} else if(numberSlicedOnce > 1 && numberSlicedOnce < 5) {
  alert('К вашим услугам ' + number + ' ' + myName + 'а')
} else {
  alert('К вашим услугам ' + number + ' ' + myName)
}

