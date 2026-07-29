using Bogus;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Requests;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Shared;

namespace OldWorldBazaarAPI.UnitTests.Shared.MockDataBuilders.Customers;

public class CustomersRequestsBuilder
{
    private readonly Faker<CustomerAddressDto> _customerAddressFaker;
    private readonly Faker<CreateCustomerRequest> _createCustomerRequestFaker;

    public CustomersRequestsBuilder()
    {
        _customerAddressFaker = new Faker<CustomerAddressDto>("pt_BR")
            .RuleFor(a => a.Street, f => f.Address.StreetName())
            .RuleFor(a => a.District, f => f.Address.County())
            .RuleFor(a => a.Number, f => f.PickRandom(new List<string>(){"1", "100", "93", "25", ""}))
            .RuleFor(a => a.Complement, f => f.PickRandom(new List<string>(){"", "Apto 101", "Bloco A"}))
            .RuleFor(a => a.Reference, f => f.Lorem.Sentence(3))
            .RuleFor(a => a.ZipCode, f => f.Address.ZipCode())
            .RuleFor(a => a.City, f => f.Address.City())
            .RuleFor(a => a.State, f => f.Address.StateAbbr())
            .RuleFor(a => a.Country, f => "BR");

        _createCustomerRequestFaker = new Faker<CreateCustomerRequest>("pt_BR")
            .RuleFor(r => r.FirstName, f => f.Name.FirstName())
            .RuleFor(r => r.LastName, f => f.Name.LastName())
            .RuleFor(r => r.Email, (f, r) => f.Internet.Email(r.FirstName, r.LastName))
            .RuleFor(r => r.PlainPassword, f => f.PickRandom<string>(new List<string>(){"123456", "pass123", "somepassword", "#test123"}))
            .RuleFor(r => r.PhoneNumber, f => f.Phone.PhoneNumber("119########"))
            .RuleFor(r => r.Address, _ => _customerAddressFaker.Generate());
    }

    public CreateCustomerRequest BuildCreateCustomerRequest() 
    => _createCustomerRequestFaker.Generate();

    public CustomerAddressDto BuldCustomerAdrressDto()
    => _customerAddressFaker.Generate(); 
}
