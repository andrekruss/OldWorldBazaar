import { api } from "../../../api/axios";
import type { CreateCustomerRequest } from "../dtos/requests/createCustomerRequest";
import type { CustomerResponse } from "../dtos/responses/customerResponse";
import { customerEndpoints } from "./customerEndpoints";

export async function registerCustomer(request: CreateCustomerRequest) : Promise<CustomerResponse>{
    const { data } = await api.post<CustomerResponse>(
        customerEndpoints.register,
        request
    );

    return data;
}