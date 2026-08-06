namespace OldWorldBazaarAPI.Modules.Stores.DTOs.Shared
{
    public record StoreAddressDto
    {
        public required int Id {get; init;}
        public required string Street {get; init;}
        public required string District {get; init;}
        public string? Number {get; init;}
        public string? Complement {get; init;}
        public string? Reference {get; init;}
        public required string ZipCode {get; init;}
        public required string City {get; init;}
        public required string State {get; init;}
        public required string Country {get; init;}
        public required DateTime CreatedAt {get; init;}
    }
}