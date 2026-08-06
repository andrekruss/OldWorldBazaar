using OldWorldBazaarAPI.Modules.Stores.DTOs.Shared;

namespace OldWorldBazaarAPI.Modules.Sellers.DTOs.Requests
{
    public record CreateSellerRequest
    {
        public required string Name {get; init;}
        public string? About {get; init;}
        public required CreateStoreDto Store {get; init;}
    }
}