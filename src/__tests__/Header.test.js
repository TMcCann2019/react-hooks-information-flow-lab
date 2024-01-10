import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  render(<Header />);
  expect(screen.getByText(/ Mode/)).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} />);

  fireEvent.click(screen.getByText(/ Mode/));
  expect(onDarkModeClick).toHaveBeenCalled();
});
