const countSalaries = () => {
  let countSalary = 0,
    i = 0,
    historySalary = "";

  while (true) {
    const salaryInput = +prompt("Введите сумму");

    if (!isNaN(salaryInput) && salaryInput) {
      countSalary += salaryInput;
      i++;
      historySalary += salaryInput + " ";
    } else {
      const isSomethingWrong = confirm(
        "Хотите продолжить вычисление или получить результаты?"
      );
      if (isSomethingWrong) {
      } else {
        // Иначе выводим результаты
        alert(
          `Сумма всех зарплат: ${countSalary} \n Средняя зарплата: ${
            countSalary / i
          } \n История ввода: ${historySalary}`
        );
        break;
      }
    }
  }
};
// countSalaries();

// Через рекурсию

const countAllSalaries = (
  summ = 0,
  count = 0,
  averageSalary = 0,
  history = ""
) => {
  const salaryQuestion = +prompt("Введите заработную плату сотрудника");
  let salarySumm = summ;
  if (salaryQuestion === 0 || isNaN(salaryQuestion)) {
    let continueQuestion = confirm(
      "Может хотите продолжить вычисления или получить ответ?"
    );
    if (!continueQuestion) {
      return alert(`
            Сумма зарплат: ${salarySumm} $
            Средняя зарплата: ${averageSalary} $
            История ввода: ${history}
            `);
    }
    return countAllSalaries(
      salarySumm + salaryQuestion,
      count,
      (averageSalary = salarySumm / count),
      history
    );
  }
  averageSalary = salarySumm / count;
  history += salaryQuestion + " $";
  count++;
  return countAllSalaries(
    salarySumm + salaryQuestion,
    count,
    averageSalary,
    history
  );
};
 countAllSalaries();