import type { CustomerAddressDto } from "../common/CustomerAddressDto";

export interface CustomerResponse {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    address: CustomerAddressDto;
    createdAt: string
}