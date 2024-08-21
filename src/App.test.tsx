import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Toaster } from "sonner";

describe("test form", async () => {
    it("input is implemented", async () => {
        render(<App />);
        const emailInput = screen.getByTestId("email-input");
        await userEvent.type(emailInput, "asdijlsd");
        await waitFor(() => {
            expect(emailInput).toHaveValue("asdijlsd");
        });
    });
    it("submit empty email", async () => {
        render(<App />);
        const submitBtn = screen.getByTestId("submit-btn");
        await userEvent.click(submitBtn);

        const errorMsg = screen.getByText("Please provide a valid email");
        await waitFor(() => {
            expect(errorMsg).toBeInTheDocument();
        });
    });
    it("submit wrong email", async () => {
        render(<App />);
        const emailInput = screen.getByTestId("email-input");
        const submitBtn = screen.getByTestId("submit-btn");
        await userEvent.type(emailInput, "asdasd");
        await userEvent.click(submitBtn);

        await waitFor(() => {
            const errorMsg = screen.getByText("Please provide a valid email");

            expect(errorMsg).toBeInTheDocument();
        });
    });
    it("submit right email", async () => {
        render(<App />);
        const emailInput = screen.getByTestId("email-input");
        const submitBtn = screen.getByTestId("submit-btn");
        await userEvent.type(emailInput, "text@example.com");
        await userEvent.click(submitBtn);
        await waitFor(() => {
            expect(emailInput).toHaveValue("");
        });
    });
    it("test sonner", async () => {
        render(
            <>
                <App />
                <Toaster />
            </>
        );
        const emailInput = screen.getByTestId("email-input");
        const submitBtn = screen.getByTestId("submit-btn");
        await userEvent.type(emailInput, "text@example.com");
        await userEvent.click(submitBtn);
        await waitFor(() => {
            const sonner = screen.getByText("Submit form successfully")
            expect(sonner).toBeInTheDocument()
        });
    });
});
