using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using OldWorldBazaarAPI.Modules.Accounts.Enums;
using OldWorldBazaarAPI.Modules.Accounts.Exceptions;
using OldWorldBazaarAPI.Modules.Sellers.Services;
using OldWorldBazaarAPI.UnitTests.Shared;
using OldWorldBazaarAPI.UnitTests.Shared.MockDataBuilders.Sellers;

namespace OldWorldBazaarAPI.UnitTests.Sellers;

public class SellerServiceTests : DatabaseTestBase
{
    private readonly SellersRequestsBuilder _sellerRequestBuilder = new();

    [Fact]
    public async Task CreateSellerAsync_WhenRequestIsValid_ShouldCreateSeller()
    {
        // ================= ARRANGE =========================//
        var sellerService = new SellerService(Context);

        var createSellerRequest = _sellerRequestBuilder.BuildCreateSellerRequest();

        // ================= ACT =========================//
        var response = await sellerService.CreateSellerAsync(createSellerRequest);

        // ================= ASSERT =========================//

        // Response validation
        response.Should().NotBeNull();     
        response.Should().BeEquivalentTo(createSellerRequest, options => options
            .ExcludingMissingMembers() // Ignore response Id and CreatedAt properties
            .Excluding(r => r.PlainPassword) // Ignore request PlainPassword property
        );
        response.Id.Should().BePositive();
        response.CreatedAt.Should().BeCloseTo(DateTime.UtcNow, precision: TimeSpan.FromSeconds(2));

        // Database Persistency Validation
        Context.Sellers.Should().ContainSingle();
        var dbSeller = await Context.Sellers
            .Include(s => s.SellerAccount)   
            .SingleAsync();       

        // Seller Data Validation
        dbSeller.Id.Should().BePositive();
        dbSeller.AccountId.Should().BePositive();
        dbSeller.Name.Should().Be(createSellerRequest.Name);
        dbSeller.About.Should().Be(createSellerRequest.About);

        // Account Data Validation
        dbSeller.SellerAccount.Should().NotBeNull();
        dbSeller.SellerAccount.Id.Should().BePositive();
        dbSeller.SellerAccount.Email.Should().Be(createSellerRequest.Email);
        dbSeller.SellerAccount.AccountType.Should().Be(EAccountType.Seller);
        dbSeller.SellerAccount.IsActive.Should().BeTrue();
    }

    [Fact]
    public async Task CreateSellerAsync_WhenEmailIsAlreadyRegistered_ShouldThrow()
    {
        // ARRANGE
        var sellerService = new SellerService(Context);

        var createSellerRequest = _sellerRequestBuilder.BuildCreateSellerRequest();

        var response = await sellerService.CreateSellerAsync(createSellerRequest);

        var requestWithDuplicatedEmail = 
            _sellerRequestBuilder.BuildCreateSellerRequest()
            with {
                Email = createSellerRequest.Email
            };

        // ACT/ASSERT
        await Assert.ThrowsAsync<EmailAlreadyRegisteredException>(
            () => sellerService.CreateSellerAsync(requestWithDuplicatedEmail)
        );
    }
}
