using Microsoft.EntityFrameworkCore;
using OldWorldBazaarAPI.Modules.Accounts.Entities;
using OldWorldBazaarAPI.Modules.Accounts.Enums;
using OldWorldBazaarAPI.Modules.Accounts.Exceptions;
using OldWorldBazaarAPI.Modules.Sellers.DTOs.Requests;
using OldWorldBazaarAPI.Modules.Sellers.DTOs.Responses;
using OldWorldBazaarAPI.Modules.Sellers.Entities;
using OldWorldBazaarAPI.Modules.Stores.DTOs.Shared;
using OldWorldBazaarAPI.Modules.Stores.Entities;
using OldWorldBazaarAPI.Shared.Database;

namespace OldWorldBazaarAPI.Modules.Sellers.Services
{
    public class SellerService : ISellerService
    {
        private readonly AppDbContext _dbContext;

        public SellerService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<SellerResponse> CreateSellerAsync(CreateSellerRequest createSellerRequest)
        {
            var existingAccount = await _dbContext.Accounts.FirstOrDefaultAsync(a => a.Email == createSellerRequest.Email);
            if (existingAccount != null)
                throw new EmailAlreadyRegisteredException(createSellerRequest.Email);


            Account account = new Account()
            {
                Email = createSellerRequest.Email,
                PasswordHash = createSellerRequest.PlainPassword, // ! IMPLEMENTAR HASH
                AccountType = EAccountType.Seller
            };

            Seller seller = new Seller()
            {
                Name = createSellerRequest.Name,
                About = createSellerRequest.About,           
                SellerAccount = account
            };

            _dbContext.Sellers.Add(seller);
            await _dbContext.SaveChangesAsync();
            
            return new SellerResponse()
            {
                Id = seller.Id,
                Name = seller.Name,
                Email = account.Email,
                About = seller.About,
                CreatedAt = seller.CreatedAt
            };
        }
    }
}