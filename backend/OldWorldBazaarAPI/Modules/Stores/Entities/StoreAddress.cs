namespace OldWorldBazaarAPI.Modules.Stores.Entities
{
    public class StoreAddress
    {
        public int Id {get; set;}
        public int StoreId {get; set;}
        public required string Street {get; set;}
        public required string District {get; set;}
        public string? Number {get; set;}
        public string? Complement {get; set;}
        public string? Reference {get; set;}
        public required string ZipCode {get; set;}
        public required string City {get; set;}
        public required string State {get; set;}
        public required string Country {get; set;}
        public DateTime CreatedAt {get; init;}
        public Store Store {get; set;} = null!;
    }
}