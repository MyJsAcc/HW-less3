// Задам переменны для моих ячеек под результаты

let writeSalary, // Промпт
    countSalary = 0, // Сумма зарплат
    averageSalary, // Средняя зарплата
    countI = 0, // Подсчет итераций
    historySalary = []; // Массив для записи истории ввода

// Теперь цикл
 


while(true) {
    
    writeSalary = +prompt('Введите сумму') // Вызываем наш промпт
 
    if(writeSalary !== NaN && writeSalary) { // Если Промпт не число и не пустой
            
        countSalary += writeSalary // Запишем сумму всех Зарплат
        countI++; // Индекс для подсчета кол-ва итераций
   
        historySalary.unshift(writeSalary++) // Добавляем в начало массива каждое введенное значение
        continue // Продолжим господа
    }
    else { // Если промпт пустой или не число 
       let isSomethingWrong = confirm('Хотите продолжить вычисление или получить результаты?') // Предлагаем остановиться или продолжить оперейшн

       if(isSomethingWrong) { // Если пользователь соглашается продолжить -> впирёд, продолжаем
        continue
       }
       else { // Иначе выводим результаты
   
        alert(`Сумма всех зарплаток: ${countSalary} \n Средняя зарплата по больнице: ${countSalary/countI} \n История ввода ${historySalary}`)
 
        break // Останавливаем цикл
       }
    }
}



 
