import {describe, expect, it, vi} from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "../../../../modules/shared/generic/components/buttons/Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {

    it("renders its children", () => {

        // arrange
        render(<Button>Register</Button>)

        // assert
        expect(
            screen.getByRole("button", {name: "Register"})
        ).toBeInTheDocument();
    });

    it("calls onClick() when clicked", async () => {
        
        // arrange
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <Button onClick={onClick}>
                Register
            </Button>
        );

        // act
        await user.click(
            screen.getByRole("button", {name: "Register"})
        );

        // assert
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});