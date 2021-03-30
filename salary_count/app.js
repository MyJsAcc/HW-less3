// Задам переменны для моих ячеек под результаты

const countSalaries = () => {

let countSalary = 0, i = 0, historySalary = '' 

while(true) {
   
    const salaryInput = +prompt('Введите сумму') 
 
    if(!isNaN(salaryInput) && salaryInput) { 
        countSalary += salaryInput 
        i++; 
        historySalary +=  salaryInput + ' ' 
        
    } else { 
       const isSomethingWrong = confirm('Хотите продолжить вычисление или получить результаты?') 
       if(isSomethingWrong) {        
       } else { // Иначе выводим результаты 
        alert(`Сумма всех зарплат: ${countSalary} \n Средняя зарплата: ${countSalary/i} \n История ввода: ${historySalary}`)
        break
       }
    }
}

}
countSalaries()