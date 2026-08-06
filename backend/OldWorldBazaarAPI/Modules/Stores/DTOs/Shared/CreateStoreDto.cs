namespace OldWorldBazaarAPI.Modules.Stores.DTOs.Shared
{
    public record CreateStoreDto
    {
        public required string Name {get; init;}
        public string? PhoneNumber {get; init;}
        public required CreateStoreAddressDto Address {get; init;}
    }
}