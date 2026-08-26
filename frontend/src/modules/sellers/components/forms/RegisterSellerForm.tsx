import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../../shared/generic/components/forms/FormField";
import FormSection from "../../../shared/generic/components/forms/FormSection";
import Input from "../../../shared/generic/components/inputs/Input";
import { registerSellerSchema, type RegisterSellerForm } from "../../schema/registerSellerSchema";
import { useForm } from "react-hook-form";
import Button from "../../../shared/generic/components/buttons/Button";
import Textarea from "../../../shared/generic/components/inputs/Textarea";
import { registerSeller } from "../../api/sellerService";

export default function RegisterSellerForm(){

    const {register, handleSubmit, formState: { errors }} = useForm<RegisterSellerForm>({
        resolver: zodResolver(registerSellerSchema)
    });

    const onSubmit = async (data: RegisterSellerForm) => {
        
        const { confirmPassword, ...request } = data;

        const sellerResponse = await registerSeller(request);
        console.log(sellerResponse);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormSection title="Account Information">
                <FormField
                        label="Name"
                        className="md:col-span-2"
                        required
                        error={errors.name?.message}
                    >
                        <Input
                            placeholder="seller name"
                            {...register("name")}
                        />
                </FormField>

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

                <FormField
                    label="About"
                    className="md:col-span-2"
                >
                    <Textarea
                        name="about"
                        placeholder="Tell us about yourself"
                        className="h-32"
                        {...register("about")}
                    />
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