namespace OldWorldBazaarAPI.Modules.Stores.DTOs.Shared
{
    public record StoreDto
    {
        public required int Id {get; init;}
        public required string Name {get; init;}
        public string? PhoneNumber {get; init;}
        public required DateTime CreatedAt {get; init;}
        public required StoreAddressDto Address {get; init;}
    }
}