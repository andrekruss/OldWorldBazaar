using OldWorldBazaarAPI.Modules.Stores.DTOs.Shared;

namespace OldWorldBazaarAPI.Modules.Sellers.DTOs.Responses
{
    public class SellerResponse
    {
        public required int Id {get; init;}
        public required string Name {get; init;}
        public string? About {get; init;}
        public required DateTime CreatedAt {get; init;}
        public required StoreDto Store {get; init;}
    }
}