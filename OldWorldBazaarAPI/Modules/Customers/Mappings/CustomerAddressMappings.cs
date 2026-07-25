using OldWorldBazaarAPI.Modules.Customers.DTOs.Shared;
using OldWorldBazaarAPI.Modules.Customers.Entities;

namespace OldWorldBazaarAPI.Modules.Customers.Mappings
{
    public static class CustomerAddressMappings
    {
        public static CustomerAddressDto ToDTO(CustomerAddress address)
        {
            return new CustomerAddressDto()
            {
                Street = address.Street,
                District = address.District,
                Number = address.Number,
                Complement = address.Complement,
                Reference = address.Reference,
                ZipCode = address.ZipCode,
                City = address.City,
                State = address.State,
                Country = address.Country
            };
        }
    }
}