import {describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "../../../../modules/shared/generic/components/buttons/Button";

describe("Button", () => {
    it("renders its children", () => {

        // arrange
        render(<Button>Register</Button>)

        // assert
        expect(
            screen.getByRole("button", {name: "Register"})
        ).toBeInTheDocument();
    });
});