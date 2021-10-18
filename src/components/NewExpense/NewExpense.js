import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    startEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <div className="new-expense__actions">
          <button type="submit" onClick={startEditingHandler}>
            Add Expense
          </button>
        </div>
      ) : (
        <div>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
          <div className="new-expense__actions">
            <button type="submit" onClick={startEditingHandler}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
