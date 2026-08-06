using OldWorldBazaarAPI.Modules.Accounts.Entities;
using OldWorldBazaarAPI.Modules.Stores.Entities;

namespace OldWorldBazaarAPI.Modules.Sellers.Entities
{
    public class Seller
    {
        public int Id {get; set;}
        public int AccountId {get; set;}
        public required string Name {get; set;}
        public string? About {get; set;}
        public DateTime CreatedAt {get; init;}
        public Account SellerAccount {get; set;} = null!;
        public IEnumerable<Store> Stores {get; set;} = [];
    }
}