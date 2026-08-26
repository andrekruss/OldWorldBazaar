import {z} from "zod";

export const registerSellerSchema = z.object({
    name: z.string().min(3).max(100),

    email: z.email("Invalid email"),

    plainPassword: z.string()
        .min(8, "Password must have at least 8 characters"),

    confirmPassword: z.string(),

    about: z.string().optional()
})
.refine(
    data => data.plainPassword === data.confirmPassword,
    {
        path: ["confirmPassword"],
        message: "Passwords don't match"
    }
);

export type RegisterSellerForm = z.infer<typeof registerSellerSchema>;