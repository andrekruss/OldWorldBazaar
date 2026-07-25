using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OldWorldBazaarAPI.Modules.Accounts.Entities;

namespace OldWorldBazaarAPI.Modules.Accounts.DbConfigurations;

public class AccountConfiguration : IEntityTypeConfiguration<Account>
{
    public void Configure(EntityTypeBuilder<Account> builder)
    {
        builder.ToTable("Accounts");

        builder.HasKey(a => a.Id);

        builder.Property(a => a.Email)
            .HasMaxLength(100)
            .IsRequired();

        builder.HasIndex(a => a.Email)
            .IsUnique();

        builder.Property(a => a.PasswordHash)
            .HasMaxLength(256)
            .IsRequired();

        builder.Property(a => a.AccountType)
            .HasConversion<int>()
            .IsRequired();

        builder.Property(a => a.IsActive)  
            .HasDefaultValue(true)
            .IsRequired();

        builder.Property(a => a.CreatedAt)     
            .HasDefaultValueSql("CURRENT_TIMESTAMP")
            .IsRequired();
    }
}
