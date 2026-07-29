export interface CustomerAddressDto{
    street: string;
    district: string;
    number?: string;
    complement?: string;
    reference?: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
}