import {z} from "zod";

export const registerCustomerSchema = z.object({
        email: z.email("Invalid email"),

        plainPassword: z.string()
            .min(8, "Password must have at least 8 characters"),

        confirmPassword: z.string(),

        firstName: z.string().min(2, "First name is required"),

        lastName: z.string().min(2, "Last name is required"),

        phoneNumber: z.string().optional(),

        address: z.object({
            street: z.string().min(1),
            district: z.string().min(1),
            number: z.string().optional(),
            complement: z.string().optional(),
            reference: z.string().optional(),
            zipCode: z.string().min(1),
            city: z.string().min(1),
            state: z.string().min(1),
            country: z.string().length(2)
        })
    })
    .refine(
        data => data.plainPassword === data.confirmPassword,
        {
            path: ["confirmPassword"],
            message: "Passwords don't match"
        }
    );

export type RegisterCustomerForm = z.infer<typeof registerCustomerSchema>;