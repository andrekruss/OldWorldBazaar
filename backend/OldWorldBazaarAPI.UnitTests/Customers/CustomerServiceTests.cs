using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using OldWorldBazaarAPI.Modules.Accounts.Enums;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Requests;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Shared;
using OldWorldBazaarAPI.Modules.Customers.Services;
using OldWorldBazaarAPI.UnitTests.Shared;
using OldWorldBazaarAPI.UnitTests.Shared.MockDataBuilders.Customers;

namespace OldWorldBazaarAPI.UnitTests.Customers;

public class CustomerServiceTests : DatabaseTestBase
{
    private readonly CustomersRequestsBuilder _customerRequestBuilder = new();

    [Fact]
    public async Task CreateCustomerAsync_WhenRequestIsValid_ShouldCreateCustomer()
    {
        // ================= ARRANGE =========================//
        var customerService = new CustomerService(Context);

        var createCustomerRequest = _customerRequestBuilder.BuildCreateCustomerRequest();

        // ================= ACT =========================//
        var response = await customerService.CreateCustomerAsync(createCustomerRequest);

        // ================= ASSERT =========================//

        // Response validation
        response.Should().NotBeNull();     
        response.Should().BeEquivalentTo(createCustomerRequest, options => options
            .ExcludingMissingMembers() // Ignore response Id and CreatedAt properties
            .Excluding(r => r.PlainPassword) // Ignore request PlainPassword property
        );
        response.Id.Should().BePositive();
        response.CreatedAt.Should().BeCloseTo(DateTime.UtcNow, precision: TimeSpan.FromSeconds(2));

        // Database Persistency Validation
        Context.Customers.Should().ContainSingle();
        var dbCustomer = await Context.Customers
            .Include(c => c.CustomerAccount)
            .Include(c => c.Addresses)     
            .SingleAsync();       

        // Customer Data Validation
        dbCustomer.Id.Should().BePositive();
        dbCustomer.AccountId.Should().BePositive();
        dbCustomer.FirstName.Should().Be(createCustomerRequest.FirstName);
        dbCustomer.LastName.Should().Be(createCustomerRequest.LastName);
        dbCustomer.PhoneNumber.Should().Be(createCustomerRequest.PhoneNumber);

        // Account Data Validation
        dbCustomer.CustomerAccount.Should().NotBeNull();
        dbCustomer.CustomerAccount.Id.Should().BePositive();
        dbCustomer.CustomerAccount.Email.Should().Be(createCustomerRequest.Email);
        dbCustomer.CustomerAccount.AccountType.Should().Be(EAccountType.Customer);
        dbCustomer.CustomerAccount.IsActive.Should().BeTrue();

        // Customer Address validation
        dbCustomer.Addresses.Should().ContainSingle();
        dbCustomer.Addresses.First().Should().BeEquivalentTo(createCustomerRequest.Address, options => options
            .ExcludingMissingMembers()
        );
    }
}