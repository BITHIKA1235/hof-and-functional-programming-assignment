let expenses=[
    {amount:100,category:"Utilities"},
    {amount:200,category:"Groceries"},
    {amount:50,category:"Entertainment"},
];
function categorizeExpense(expenses){
    if(expenses.amount>100){
        return "High expense ";
    }
    else{
        return"Low expense";
    }
}
let categorizedExpenses=expenses.map((expenses)=>
categorizeExpense(expenses));
console.log("Categorized Expense:",categorizedExpenses);

