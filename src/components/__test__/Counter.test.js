import React from "react";
import Counter from "../Counter";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

// afterEach(() => {
//   cleanup();
// });

test("header render with coorect text", () => {
  // const { getByTestId } = render(<Counter />);
  const headerElement = getByTestId("header");

  expect(headerElement.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  // const { getByTestId } = render(<Counter />);
  const inputElement = getByTestId("input");

  expect(inputElement.value).toBe("1");
});

test("add button renders with correct +", () => {
  // const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("addButton");

  expect(addButton.textContent).toBe("+");
});

test("subtract button renders with correct -", () => {
  // const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtractButton");

  expect(subtractButton.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  // const { getByTestId } = render(<Counter />);
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  expect(inputElement.value).toBe("5");
});

test("clicking on + button adds 1 to the counter", () => {
  // const { getByTestId } = render(<Counter />);
  const addButtonElement = getByTestId("addButton");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(addButtonElement);

  expect(counterElement.textContent).toBe("1");
});

test("clicking on - button subtracts 1 from the counter", () => {
  // const { getByTestId } = render(<Counter />);
  const subtractButtonElement = getByTestId("addButton");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(subtractButtonElement);

  expect(counterElement.textContent).toBe("-1");
});

test("changing input value and then clicking on + button works correctly", () => {
  // const { getByTestId } = render(<Counter />);
  const addButtonElement = getByTestId("addButton");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(addButtonElement);

  expect(counterElement.textContent).toBe("5");
});

test("changing input value and then clicking on - button works correctly", () => {
  // const { getByTestId } = render(<Counter />);
  const subtractButtonElement = getByTestId("subtractButton");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(subtractButtonElement);

  expect(counterElement.textContent).toBe("-5");
});

test("adding and then subtracting leads to the correct counter number", () => {
  // const { getByTestId } = render(<Counter />);
  const subtractButtonElement = getByTestId("subtractButton");
  const addButtonElement = getByTestId("addButton");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  fireEvent.change(inputElement, {
    target: {
      value: "10",
    },
  });

  fireEvent.change(addButtonElement);
  fireEvent.change(addButtonElement);
  fireEvent.change(addButtonElement);
  fireEvent.change(addButtonElement);
  fireEvent.change(subtractButtonElement);
  fireEvent.change(subtractButtonElement);

  expect(counterElement.textContent).toBe("20");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  fireEvent.change(addButtonElement);
  fireEvent.change(subtractButtonElement);
  fireEvent.change(subtractButtonElement);

  expect(counterElement.textContent).toBe("15");
});

test("counter contains correct className", () => {
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  const subtractButtonElement = getByTestId("subtractButton");
  const addButtonElement = getByTestId("addButton");

  expect(counterElement.className).toBe("");

  fireEvent.change(inputElement, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addButtonElement);

  expect(counterElement.className).toBe("");

  fireEvent.click(addButtonElement);

  expect(counterElement.className).toBe("green");

  fireEvent.click(addButtonElement);

  expect(counterElement.className).toBe("green");

  fireEvent.click(subtractButtonElement);
  fireEvent.click(subtractButtonElement);

  expect(counterElement.className).toBe("");

  fireEvent.click(subtractButtonElement);
  fireEvent.click(subtractButtonElement);
  fireEvent.click(subtractButtonElement);
  fireEvent.click(subtractButtonElement);

  expect(counterElement.className).toBe("red");
});
