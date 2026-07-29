import { api } from "../../../api/axios";
import type { CreateCustomerRequest } from "../dtos/requests/CreateCustomerRequest";
import { customerEndpoints } from "./customerEndpoints";

export async function registerCustomer(request: CreateCustomerRequest){
    const response = await api.post(
        customerEndpoints.register,
        request
    );

    return response.data;
}