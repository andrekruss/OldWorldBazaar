using OldWorldBazaarAPI.Modules.Sellers.Entities;

namespace OldWorldBazaarAPI.Modules.Stores.Entities
{
    public class Store
    {
        public int Id {get; set;}
        public int SellerId {get; set;}
        public required string Name {get; set;}
        public string? PhoneNumber {get; set;}
        public DateTime CreatedAt {get; init;}
        public Seller Seller {get; set;} = null!;
        public StoreAddress Address {get; set;} = null!;
    }
}