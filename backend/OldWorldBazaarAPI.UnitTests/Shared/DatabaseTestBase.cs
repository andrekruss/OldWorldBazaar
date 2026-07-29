using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using OldWorldBazaarAPI.Shared.Database;

namespace OldWorldBazaarAPI.UnitTests.Shared;

public class DatabaseTestBase : IDisposable
{
    private readonly SqliteConnection _connection;

    protected readonly AppDbContext Context;

    protected DatabaseTestBase()
    {
        _connection = new SqliteConnection("Data Source=:memory:");
        _connection.Open();

        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseSqlite(_connection)
            .Options;

        Context = new AppDbContext(options);

        Context.Database.EnsureCreated();
    }

    public void Dispose()
    {
        Context.Dispose();
        _connection.Dispose();
    }
}
