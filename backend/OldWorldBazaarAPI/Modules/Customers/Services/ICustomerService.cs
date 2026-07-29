using OldWorldBazaarAPI.Modules.Customers.DTOs.Requests;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Responses;

namespace OldWorldBazaarAPI.Modules.Customers.Services
{
    public interface ICustomerService
    {
        Task<CustomerResponse> CreateCustomerAsync(CreateCustomerRequest request);
    }
}