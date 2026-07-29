using OldWorldBazaarAPI.Modules.Accounts.Entities;

namespace OldWorldBazaarAPI.Modules.Customers.Entities;

public class Customer
{
    public int Id {get; set;}
    public int AccountId {get; set;}
    public required string FirstName {get; set;}
    public required string LastName {get; set;}
    public string? PhoneNumber {get; set;}
    public DateTime CreatedAt {get; init;}
    public Account CustomerAccount {get; set;} = null!;
    public ICollection<CustomerAddress> Addresses {get; set;} = [];
}
