using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OldWorldBazaarAPI.Modules.Stores.Entities;

namespace OldWorldBazaarAPI.Modules.Stores.DbConfigurations
{
    public class StoreAddressConfiguration : IEntityTypeConfiguration<StoreAddress>
    {
        public void Configure(EntityTypeBuilder<StoreAddress> builder)
        {
            builder.ToTable("StoresAddresses");

            builder.HasKey(sa => sa.Id);

            builder.Property(sa => sa.Street)
                .HasMaxLength(200)
                .IsRequired();

            builder.Property(sa => sa.District)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(sa => sa.Number)
                .HasMaxLength(10);

            builder.Property(sa => sa.Complement)
                .HasMaxLength(100);

            builder.Property(sa => sa.Reference)
                .HasMaxLength(100);

            builder.Property(sa => sa.ZipCode)
                .HasMaxLength(20)
                .IsRequired();

            builder.Property(sa => sa.City)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(sa => sa.State)
                .HasMaxLength(10)
                .IsRequired();

            builder.Property(sa => sa.Country)
                .HasMaxLength(2)
                .IsRequired();

            builder.Property(sa => sa.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .IsRequired();
        }
    }
}