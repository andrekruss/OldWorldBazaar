using OldWorldBazaarAPI.Modules.Customers.DTOs.Shared;

namespace OldWorldBazaarAPI.Modules.Customers.DTOs.Responses
{
    public record CustomerResponse
    {
        public required int Id {get; init;}
        public required string Email {get; init;}
        public required string FirstName {get; init;}
        public required string LastName {get; init;}
        public string? PhoneNumber {get; init;}
        public required CustomerAddressDto Address {get; init;}
        public DateTime CreatedAt {get; init;}
    }
}