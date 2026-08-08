namespace OldWorldBazaarAPI.Modules.Sellers.DTOs.Requests
{
    public record CreateSellerRequest
    {
        public required string Email {get; init;}
        public required string PlainPassword {get; init;}
        public required string Name {get; init;}
        public string? About {get; init;}
    }
}