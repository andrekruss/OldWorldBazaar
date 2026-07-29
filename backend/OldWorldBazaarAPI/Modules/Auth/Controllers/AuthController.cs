using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using OldWorldBazaarAPI.Modules.Auth.DTOs.Requests;

namespace OldWorldBazaarAPI.Modules.Auth.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/auth")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest loginRequest)
        {
            //var response = await _authService.LoginAsync();
            return Ok(loginRequest);
        }
    }
}