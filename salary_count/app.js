// Задам переменны для моих ячеек под результаты

const countSalaries = () => {

let countSalary = 0, i = 0, historySalary = '' 

while(true) {
   
    const salaryInput = +prompt('Введите сумму') // Вызываем наш промпт
 
    if(!isNaN(salaryInput) && salaryInput) { // Если Промпт не число и не пусто   
        countSalary += salaryInput // Запишем сумму всех Зарплат
        i++; // Индекс для подсчета кол-ва итераций
        historySalary +=  salaryInput + ' ' // Добавляем в начало массива каждое введенное значение
        
    } else { 
       let isSomethingWrong = confirm('Хотите продолжить вычисление или получить результаты?') // Предлагаем остановиться или продолжить оперейшн

       if(isSomethingWrong) {        
       } else { // Иначе выводим результаты 
        alert(`Сумма всех зарплаток: ${countSalary} \n Средняя зарплата по больнице: ${countSalary/i} \n История ввода ${historySalary}`)
        break
       }
    }
}

}
countSalaries()