using OldWorldBazaarAPI.Modules.Customers.DTOs.Shared;

namespace OldWorldBazaarAPI.Modules.Customers.DTOs.Requests
{
    public record CreateCustomerRequest
    {
        public required string Email {get; init;}
        public required string PlainPassword {get; init;}
        public required string FirstName {get; init;}
        public required string LastName {get; init;}
        public string? PhoneNumber {get; init;}
        public required CustomerAddressDto Address {get; init;}
    }
}