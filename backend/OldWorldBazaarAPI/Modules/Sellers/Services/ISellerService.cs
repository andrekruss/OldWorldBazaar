using OldWorldBazaarAPI.Modules.Sellers.DTOs.Requests;
using OldWorldBazaarAPI.Modules.Sellers.DTOs.Responses;

namespace OldWorldBazaarAPI.Modules.Sellers.Services
{
    public interface ISellerService
    {
        Task<SellerResponse> CreateSellerAsync(CreateSellerRequest createSellerRequest);
    }
}