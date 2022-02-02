let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
weeklyExpenses = weeklyExpenses + answer

for(let i=0; i<weeklyExpenseQuestions.length;i++){
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    let numberAnswer=parseFloat(stringAnswer)
    weeklyExpenses=weeklyExpenses + numberAnswer;
}
for(let i=0; i<monthlyExpenseQuestions.length;i++){
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    let numberAnswer=parseFloat(stringAnswer)
    monthlyExpenses=monthlyExpenses + numberAnswer;
}
for(let i=0; i<annualExpenseQuestions.length;i++){
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    let numberAnswer=parseFloat(stringAnswer)
    annualExpenseQuestions=monthlyExpenses + numberAnswer;
}
