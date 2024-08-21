# **Frontend Mentor Challenge - Base Apparel coming soon page**

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0 "https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Testing](#testing)

- [Resources](#resources)

## Overview

Links:

- GitHub Repo: <https://github.com/xup60521/base-Apparel-coming-soon-page>

- Website: <https://xup60521.github.io/base-Apparel-coming-soon-page/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- react

- vite

- typescript

- tailwindCSS

- react-hook-form

- zod

- vitest

### What I learned

#### Testing

Originally I wanted to use `Jest` to do testing, but then it turned out that it was too complicated to setup.

Here, I used `screen.getByTestId` to get the element, using `userEvent.type` , `userEvant.click` from `@testing-library/user-event` library to mock the keyboard input and the clicking event.

```tsx
<input data-testid="email-input" />
// ----------- //
import { describe, it, expect } from "vitest"
import { 
  render, 
  screen, 
  waitfor } from "@testing-library/react"
import App from "./App"
describe("test form", () => {
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
})
```

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>

- GSAP docs - <https://gsap.com/docs/v3/>

- Vitest docs - <https://vitest.dev/guide/>