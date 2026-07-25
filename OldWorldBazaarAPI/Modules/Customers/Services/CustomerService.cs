using OldWorldBazaarAPI.Modules.Accounts.Entities;
using OldWorldBazaarAPI.Modules.Accounts.Enums;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Requests;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Responses;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Shared;
using OldWorldBazaarAPI.Modules.Customers.Entities;
using OldWorldBazaarAPI.Modules.Customers.Mappings;
using OldWorldBazaarAPI.Shared.Database;

namespace OldWorldBazaarAPI.Modules.Customers.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly AppDbContext _dbContext;

        public CustomerService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<CustomerResponse> CreateCustomerAsync(CreateCustomerRequest request)
        {    
            Account account = new Account()
            {
                Email = request.Email,
                PasswordHash = request.PlainPassword, // ! IMPLEMENTAR O HASH DO PASSWORD!
                AccountType = EAccountType.Customer    
            };

            CustomerAddress address = new CustomerAddress()
            {
                
                Street = request.Address.Street,
                District = request.Address.District,
                Number = request.Address.Number,
                Complement = request.Address.Complement, 
                Reference = request.Address.Reference,
                ZipCode = request.Address.ZipCode,
                City = request.Address.City,
                State = request.Address.State,
                Country = request.Address.Country
            };

            Customer customer = new Customer()
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                PhoneNumber = request.PhoneNumber,
                CustomerAccount = account,
                Addresses =
                [
                    address
                ]
            };

            _dbContext.Customers.Add(customer);
            await _dbContext.SaveChangesAsync();

            return new CustomerResponse()
            {   
                Id = customer.Id,
                Email = account.Email,
                FirstName = customer.FirstName,
                LastName = customer.LastName,
                PhoneNumber = customer.PhoneNumber,
                Address = CustomerAddressMappings.ToDTO(address),
                CreatedAt = customer.CreatedAt
            };
        }
    }
}