import { api } from "../../../api/axios";
import type { CreateSellerRequest } from "../dtos/requests/createSellerRequest";
import type { SellerResponse } from "../dtos/responses/sellerResponse";
import { sellerEndpoints } from "./sellerEndpoints";

export async function registerSeller(request: CreateSellerRequest) : Promise<SellerResponse>{
    const { data } = await api.post<SellerResponse>(
        sellerEndpoints.register,
        request
    );

    return data;
}