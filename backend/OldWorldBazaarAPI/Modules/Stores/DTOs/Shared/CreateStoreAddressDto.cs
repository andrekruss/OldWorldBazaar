namespace OldWorldBazaarAPI.Modules.Stores.DTOs.Shared
{
    public record CreateStoreAddressDto
    {
        public required string Street {get; set;}
        public required string District {get; set;}
        public string? Number {get; set;}
        public string? Complement {get; set;}
        public string? Reference {get; set;}
        public required string ZipCode {get; set;}
        public required string City {get; set;}
        public required string State {get; set;}
        public required string Country {get; set;}
    }
}