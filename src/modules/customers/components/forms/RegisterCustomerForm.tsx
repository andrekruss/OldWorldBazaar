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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormSection title="Account Information">
                <FormField
                    label="Email"
                    className="md:col-span-2"
                    required
                    error={errors.email?.message}
                >
                    <Input
                        type="email"
                        placeholder="john@email.com"
                        {...register("email")}
                    />
                </FormField>

                <FormField
                    label="Password"
                    className="md:col-span-2"
                    required 
                    error={errors.plainPassword?.message}             
                >
                    <Input 
                        type="password"
                        {...register("plainPassword")}
                    />
                </FormField>

                <FormField
                    label="Confirm Password"
                    className="md:col-span-2"
                    required
                    error={errors.confirmPassword?.message}
                >
                    <Input 
                        type="password"
                        {...register("confirmPassword")}
                    />  
                </FormField>
            </FormSection>

            <FormSection title="Personal Information">
                <FormField label="First Name" required error={errors.firstName?.message}>
                    <Input placeholder="John" {...register("firstName")}/>
                </FormField>

                <FormField
                    label="Last Name"
                    required
                    error={errors.lastName?.message}
                >
                    <Input
                        placeholder="Doe"
                        {...register("lastName")}
                    />
                </FormField>
        
                <FormField
                    label="Phone Number"       
                    error={errors.phoneNumber?.message}      
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
                    error={errors.address?.street?.message}
                >
                    <Input 
                        placeholder="Rua Alberto Silva"
                        {...register("address.street")}
                    />
                </FormField>
                <FormField
                    label="District"
                    required
                    error={errors.address?.district?.message}
                >
                    <Input 
                        placeholder="Centro"
                        {...register("address.district")}
                    />
                </FormField>
                <FormField
                    label="Number"
                    error={errors.address?.number?.message}
                >
                    <Input placeholder="45" {...register("address.number")} />
                </FormField>
                <FormField
                    label="Complement"
                    error={errors.address?.complement?.message}
                >
                    <Input {...register("address.complement")}/>
                </FormField>
                <FormField
                    label="Reference"
                    error={errors.address?.reference?.message}
                >
                    <Input placeholder="perto da praça" {...register("address.reference")}/>
                </FormField>
                <FormField
                    label="Zip Code"
                    required
                    error={errors.address?.zipCode?.message}
                >
                    <Input placeholder="00000-000" {...register("address.zipCode")}/>
                </FormField>
                <FormField
                    label="City"
                    required
                    error={errors.address?.city?.message}
                >
                    <Input {...register("address.city")} />
                </FormField>
                <FormField
                    label="State"
                    required
                    error={errors.address?.state?.message}
                >
                    <Input {...register("address.state")} />
                </FormField>
                <FormField
                    label="Country"
                    required
                    error={errors.address?.country?.message}
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