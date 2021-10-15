import { render, screen } from "@testing-library/react";
import ExpenseForm from "./components/NewExpense/ExpenseForm.js";

test("renders learn react link", () => {
  render(<ExpenseForm />);
  const linkElement = screen.getByText(/Add Expense/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<ExpenseForm />);
  const colorButton = screen.getByRole("button", { name: "Add Expense" });
  // this only worked after putting the semi-colon after the color, watch for that
  expect(colorButton).toHaveStyle({ backgroundColor: "#40005d;" });
});
