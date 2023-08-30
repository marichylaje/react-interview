import { render, fireEvent } from "@testing-library/react";
import { describe, expect, vi } from 'vitest'

import ButtonOptions from "../ButtonOptions";

describe("ButtonOptions", () => {
  const fnBtn = () => {};
  test("renders button with text", () => {
    const { getByText } = render(<ButtonOptions btnText="Click me" onClickBtn={fnBtn} />);
    expect(getByText("Click me")).toBeDefined();
  });

  test("calls onClickBtn function when button is clicked", () => {
    const onClickBtn = vi.fn();
    const { getByText } = render(
      <ButtonOptions btnText="Click me" onClickBtn={onClickBtn} />
    );
    fireEvent.click(getByText("Click me"));
    expect(onClickBtn).toHaveBeenCalledOnce();
  });

  test("renders button with custom variant", () => {
    const { getByText } = render(
      <ButtonOptions btnText="Click me" variant="contained" onClickBtn={fnBtn} />
    );
    const button = getByText("Click me");
    expect(button).toHaveClass("MuiButton-contained");
  });

  test("renders button with default variant if variant prop is not provided", () => {
    const { getByText } = render(<ButtonOptions btnText="Click me" onClickBtn={fnBtn} />);
    const button = getByText("Click me");
    expect(button).toHaveClass("MuiButton-outlined");
  });
});