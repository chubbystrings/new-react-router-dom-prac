
export const wait = (time) => {
    return new Promise(res => setTimeout(res, time))
}

const generateRandomColor = () => {
    const budgetLength = fetchData('budgets')?.length ?? 0;
    return `${budgetLength * 34} 65% 50%`;
}
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const createBudget = ({ name, amount}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name,
        amount: +amount,
        createdAt: Date.now(),
        color: generateRandomColor()
    }

    const fetchExistingBudgets = fetchData('budgets') ?? [];
    return localStorage.setItem('budgets', JSON.stringify([...fetchExistingBudgets, newItem]));
}

export const createExpense = ({ name, amount, budgetId}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name,
        amount: +amount,
        createdAt: Date.now(),
        budgetId
    }

    const fetchExistingExpenses = fetchData('expenses') ?? [];
    return localStorage.setItem('expenses', JSON.stringify([...fetchExistingExpenses, newItem]));
}

export const deleteItem = ({ key }) => {
    localStorage.removeItem(key);
}

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData('expenses') ?? [];
    const filteredExpenses = expenses.filter(expense => expense.budgetId === budgetId);
    return filteredExpenses.reduce((acc, curr) => acc + curr.amount, 0);
}

export const calculateRemainingByBudget = (budgetId) => {
    const budget = fetchData('budgets')?.find(budget => budget.id === budgetId);
    return budget.amount - calculateSpentByBudget(budgetId);
}

export const formatPercentage = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
    }).format(amount);
}