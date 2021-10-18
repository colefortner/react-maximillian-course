import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formState, setFormState] = useState("hidden");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    formVisibilityHandler();
  };

  const formVisibilityHandler = () => {
    formState === "hidden" ? setFormState("visible") : setFormState("hidden");
  };

  return (
    <div className="new-expense">
      {formState === "hidden" ? (
        <div className="new-expense__actions">
          <button type="submit" onClick={formVisibilityHandler}>
            Add Expense
          </button>
        </div>
      ) : (
        <div>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
          <div className="new-expense__actions">
            <button type="submit" onClick={formVisibilityHandler}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
