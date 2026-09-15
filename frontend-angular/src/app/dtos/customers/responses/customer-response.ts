import { CustomerAddress } from "../shared/customer-address";

export interface CustomerResponse {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    address: CustomerAddress;
    createdAt: string
}
