using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using OldWorldBazaarAPI.Modules.Customers.DTOs.Requests;
using OldWorldBazaarAPI.Modules.Customers.Services;

namespace OldWorldBazaarAPI.Modules.Customers.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/customers")]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomersController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] CreateCustomerRequest createCustomerRequest)
        {
            var customer = await _customerService.CreateCustomerAsync(createCustomerRequest);

            return CreatedAtAction(
                nameof(GetById),
                new { id = customer.Id },
                customer
            );
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok();
        }
    }
}