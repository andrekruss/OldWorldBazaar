import { useForm } from "react-hook-form";
import FormSection from "../../../shared/generic/components/forms/FormSection";
import FormField from "../../../shared/generic/components/forms/FormField";
import Input from "../../../shared/generic/components/inputs/Input";
import Button from "../../../shared/generic/components/buttons/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerCustomerSchema, type RegisterCustomerForm } from "../../schema/registerCustomerSchema";

export default function RegisterCustomerForm(){

    const {register, handleSubmit, formState: { errors }} = useForm<RegisterCustomerForm>({
        resolver: zodResolver(registerCustomerSchema)
    });

    const onSubmit = async (data: RegisterCustomerForm) => {
        
        const { confirmPassword, ...request } = data;

        console.log(request);
        //await registerCustomer(request);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormSection title="Account Information">
                <FormField
                    label="Email"
                    className="md:col-span-2"
                    required
                >
                    <Input
                        type="email"
                        placeholder="john@email.com"
                        {...register("email")}
                    />

                    {errors.email && (
                        <span className="text-sm text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                </FormField>

                <FormField
                    label="Password"
                    className="md:col-span-2"
                    required                 
                >
                    <Input 
                        type="password"
                        {...register("plainPassword")}
                    />

                    {errors.plainPassword && (
                        <span className="text-sm text-red-500">
                            {errors.plainPassword.message}
                        </span>
                    )}
                </FormField>

                <FormField
                    label="Confirm Password"
                    className="md:col-span-2"
                    required
                >
                    <Input 
                        type="password"
                        {...register("confirmPassword")}
                    />

                    {errors.confirmPassword && (
                        <span className="text-sm text-red-500">
                            {errors.confirmPassword.message}
                        </span>
                    )}

                </FormField>
            </FormSection>

            <FormSection title="Personal Information">
                <FormField label="First Name" required>
                    <Input placeholder="John" {...register("firstName")}/>
                </FormField>

                <FormField
                    label="Last Name"
                    required
                >
                    <Input
                        placeholder="Doe"
                        {...register("lastName")}
                    />
                </FormField>
        
                <FormField
                    label="Phone Number"             
                >
                    <Input 
                        {...register("phoneNumber")}
                    />
                </FormField>
            </FormSection>

            <FormSection title="Address">
                <FormField
                    label="Street"
                    required
                >
                    <Input 
                        placeholder="Rua Alberto Silva"
                        {...register("address.street")}
                    />
                </FormField>
                <FormField
                    label="District"
                    required
                >
                    <Input 
                        placeholder="Centro"
                        {...register("address.district")}
                    />
                </FormField>
                <FormField
                    label="Number"
                >
                    <Input placeholder="45" {...register("address.number")} />
                </FormField>
                <FormField
                    label="Complement"
                >
                    <Input {...register("address.complement")}/>
                </FormField>
                <FormField
                    label="Reference"
                >
                    <Input placeholder="perto da praça" {...register("address.reference")}/>
                </FormField>
                <FormField
                    label="Zip Code"
                    required
                >
                    <Input placeholder="00000-000" {...register("address.zipCode")}/>
                </FormField>
                <FormField
                    label="City"
                    required
                >
                    <Input {...register("address.city")} />
                </FormField>
                <FormField
                    label="State"
                    required
                >
                    <Input {...register("address.state")} />
                </FormField>
                <FormField
                    label="Country"
                    required
                >
                    <Input {...register("address.country")} />
                </FormField>
            </FormSection>

            <div className="mt-6">
                <Button type="submit">
                    Register
                </Button>
            </div>       
        </form>     
    );
}