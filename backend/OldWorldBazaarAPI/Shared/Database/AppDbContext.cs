using Microsoft.EntityFrameworkCore;
using OldWorldBazaarAPI.Modules.Accounts.Entities;
using OldWorldBazaarAPI.Modules.Customers.Entities;
using OldWorldBazaarAPI.Modules.Sellers.Entities;
using OldWorldBazaarAPI.Modules.Stores.Entities;

namespace OldWorldBazaarAPI.Shared.Database;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Account> Accounts => Set<Account>();
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<CustomerAddress> CustomersAddresses => Set<CustomerAddress>();
    public DbSet<Seller> Sellers => Set<Seller>();
    public DbSet<Store> Stores => Set<Store>();
    public DbSet<StoreAddress> StoresAddresses => Set<StoreAddress>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
    }
}
