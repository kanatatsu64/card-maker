import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("loads and displays greeting", async () => {
  render(<App />);

  await userEvent.click(screen.getByText("Load Greeting"));
  const greeting = await screen.findByRole("paragraph", { name: "greeting" });

  expect(greeting).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});
