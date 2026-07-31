using System.Text.Json;
using OldWorldBazaarAPI.Shared.DTOs.Responses;
using OldWorldBazaarAPI.Shared.Exceptions;

namespace OldWorldBazaarAPI.Shared.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(
            RequestDelegate next,
            ILogger<ExceptionMiddleware> logger
        )
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception exception)
            {
                await HandleException(context, exception);
            }
        }

        private async Task HandleException(
        HttpContext context,
        Exception exception)
        {
            _logger.LogError(exception, exception.Message);

            var statusCode = StatusCodes.Status500InternalServerError;
            var message = "An unexpected error occurred.";

            if (exception is DomainException domainException)
            {
                statusCode = (int)domainException.StatusCode;
                message = domainException.Message;
            }

            context.Response.StatusCode = statusCode;
            context.Response.ContentType = "application/json";

            var response = new ErrorResponse(
                statusCode,
                message);

            await context.Response.WriteAsync(
                JsonSerializer.Serialize(response));
        }
    }
}