using Asp.Versioning;
using Microsoft.EntityFrameworkCore;
using OldWorldBazaarAPI.Modules.Customers.Services;
using OldWorldBazaarAPI.Shared.Database;

var builder = WebApplication.CreateBuilder(args);

Console.WriteLine(
    builder.Configuration.GetConnectionString("DefaultConnection")
);

//builder.Services.AddOpenApi();

// API Versioning
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
});

// Database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")));

// Services
builder.Services.AddScoped<ICustomerService, CustomerService>();

// Controllers
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }

//app.UseHttpsRedirection();

app.UseRouting();
// app.UseAuthentication();
// app.UseAuthorization();
app.MapControllers();

app.Run();

