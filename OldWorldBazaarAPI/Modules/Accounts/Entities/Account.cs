using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using OldWorldBazaarAPI.Modules.Accounts.Enums;
using OldWorldBazaarAPI.Modules.Customers.Entities;

namespace OldWorldBazaarAPI.Modules.Accounts.Entities
{
    [Table("Accounts")]
    public class Account
    {
        public int Id {get; set;}

        public required string Email {get; set;}

        public required string PasswordHash {get; set;}

        public required EAccountType AccountType {get; set;}
        
        public bool IsActive { get; set; } = true;

        public DateTime CreatedAt { get; init; }
        public Customer? Customer {get; init;}
    }
}