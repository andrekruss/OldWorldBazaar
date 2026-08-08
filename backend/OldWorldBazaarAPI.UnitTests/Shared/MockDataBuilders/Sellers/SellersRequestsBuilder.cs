using Bogus;
using OldWorldBazaarAPI.Modules.Sellers.DTOs.Requests;

namespace OldWorldBazaarAPI.UnitTests.Shared.MockDataBuilders.Sellers;

public class SellersRequestsBuilder
{
    private readonly Faker<CreateSellerRequest> _createSellerRequestFaker;

    public SellersRequestsBuilder()
    {
        _createSellerRequestFaker = new Faker<CreateSellerRequest>("pt_BR")
            .RuleFor(r => r.Name, r => r.Company.CompanyName())
            .RuleFor(r => r.About, r => r.Lorem.Sentence(4))
            .RuleFor(r => r.Email, (f, r) => f.Internet.Email(r.Name))
            .RuleFor(r => r.PlainPassword, f => f.PickRandom<string>(new List<string>(){"123456", "pass123", "somepassword", "#test123"}));
    }

    public CreateSellerRequest BuildCreateSellerRequest()
    => _createSellerRequestFaker.Generate();
}
