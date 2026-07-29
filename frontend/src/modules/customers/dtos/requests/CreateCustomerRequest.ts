import type { CustomerAddressDto } from "../common/CustomerAddressDto";

export interface CreateCustomerRequest {
    email: string;
    plainPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    address: CustomerAddressDto
}