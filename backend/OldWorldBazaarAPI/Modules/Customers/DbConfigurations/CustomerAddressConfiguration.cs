using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OldWorldBazaarAPI.Modules.Customers.Entities;

namespace OldWorldBazaarAPI.Modules.Customers.DbConfigurations
{
    public class CustomerAddressConfiguration : IEntityTypeConfiguration<CustomerAddress>
    {
        public void Configure(EntityTypeBuilder<CustomerAddress> builder)
        {
            builder.ToTable("CustomersAddresses");

            builder.HasKey(ca => ca.Id);

            builder.Property(ca => ca.Street)
                .HasMaxLength(200)
                .IsRequired();

            builder.Property(ca => ca.District)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(ca => ca.Number)
                .HasMaxLength(10);

            builder.Property(ca => ca.Complement)
                .HasMaxLength(100);

            builder.Property(ca => ca.Reference)
                .HasMaxLength(100);

            builder.Property(ca => ca.ZipCode)
                .HasMaxLength(20)
                .IsRequired();

            builder.Property(ca => ca.City)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(ca => ca.State)
                .HasMaxLength(10)
                .IsRequired();

            builder.Property(ca => ca.Country)
                .HasMaxLength(2)
                .IsRequired();

            builder.Property(ca => ca.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .IsRequired();

            builder.HasOne(ca => ca.Customer)
                .WithMany(c => c.Addresses)
                .HasForeignKey(ca => ca.CustomerId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}