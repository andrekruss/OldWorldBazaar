using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using OldWorldBazaarAPI.Modules.Sellers.DTOs.Requests;
using OldWorldBazaarAPI.Modules.Sellers.Services;

namespace OldWorldBazaarAPI.Modules.Sellers.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/sellers")]
    public class SellersController : ControllerBase
    {
        private readonly ISellerService _sellerService;

        public SellersController(ISellerService sellerService)
        {
            _sellerService = sellerService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] CreateSellerRequest createSellerRequest)
        {
            var seller = await _sellerService.CreateSellerAsync(createSellerRequest);
            return CreatedAtAction(
                nameof(GetById),
                new { id = seller.Id },
                seller
            );
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok();
        }
    }
}