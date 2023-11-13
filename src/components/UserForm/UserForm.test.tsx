import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserForm } from ".";

describe("UserForm Component", () => {
  const mockCreateUser = jest.fn();
  const mockUpdateUser = jest.fn();

  it("renders the UserForm", () => {
    render(<UserForm />);
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Hobby/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Save/i })).toBeInTheDocument();
  });

  it("updates input fields correctly", () => {
    render(<UserForm />);
    const firstNameInput = screen.getByPlaceholderText(
      /First Name/i
    ) as HTMLInputElement;
    const lastNameInput = screen.getByPlaceholderText(
      /Last Name/i
    ) as HTMLInputElement;
    const hobbyInput = screen.getByPlaceholderText(
      /Hobby/i
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(hobbyInput, { target: { value: "Reading" } });

    expect(firstNameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");
    expect(hobbyInput.value).toBe("Reading");
  });

  it("calls createUser when Save is clicked with new user data", () => {
    render(<UserForm createUser={mockCreateUser} />);
    fireEvent.change(
      screen.getByPlaceholderText(/First Name/i) as HTMLInputElement,
      {
        target: { value: "Jane" },
      }
    );
    fireEvent.change(
      screen.getByPlaceholderText(/Last Name/i) as HTMLInputElement,
      {
        target: { value: "Doe" },
      }
    );
    fireEvent.change(
      screen.getByPlaceholderText(/Hobby/i) as HTMLInputElement,
      {
        target: { value: "Gardening" },
      }
    );

    fireEvent.click(screen.getByRole("button", { name: /Save/i }));

    expect(mockCreateUser).toHaveBeenCalledWith({
      firstname: "Jane",
      lastname: "Doe",
      hobby: "Gardening",
    });
  });

  it("calls updateUser when Save is clicked with existing user data", () => {
    const user = {
      id: "1",
      firstname: "Jane",
      lastname: "Doe",
      hobby: "Gardening",
    };
    render(<UserForm user={user} updateUser={mockUpdateUser} />);

    fireEvent.change(
      screen.getByPlaceholderText(/Hobby/i) as HTMLInputElement,
      {
        target: { value: "Reading" },
      }
    );

    fireEvent.click(screen.getByRole("button", { name: /Save/i }));

    expect(mockUpdateUser).toHaveBeenCalledWith({
      ...user,
      hobby: "Reading",
    });
  });

  it("does not call createUser or updateUser when form data is incomplete", () => {
    render(
      <UserForm createUser={mockCreateUser} updateUser={mockUpdateUser} />
    );

    // Only changing first name
    fireEvent.change(
      screen.getByPlaceholderText(/First Name/i) as HTMLInputElement,
      {
        target: { value: "John" },
      }
    );

    fireEvent.click(screen.getByRole("button", { name: /Save/i }));

    expect(mockCreateUser).not.toHaveBeenCalled();
    expect(mockUpdateUser).not.toHaveBeenCalled();
  });
});
