import { CustomerAddress } from "../shared/customer-address";

export interface CreateCustomerRequest {
  email: string;
  plainPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: CustomerAddress
}
