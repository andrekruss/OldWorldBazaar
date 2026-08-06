using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OldWorldBazaarAPI.Modules.Stores.Entities;

namespace OldWorldBazaarAPI.Modules.Stores.DbConfigurations
{
    public class StoreConfiguration : IEntityTypeConfiguration<Store>
    {
        public void Configure(EntityTypeBuilder<Store> builder)
        {
            builder.ToTable("Stores");

            builder.HasKey(s => s.Id);

            builder.Property(s => s.Name)
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(s => s.PhoneNumber)
                .HasMaxLength(20);

            builder.Property(s => s.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .IsRequired();

            builder.HasOne(s => s.Address)
                .WithOne(a => a.Store)
                .HasForeignKey<StoreAddress>(sa => sa.StoreId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(s => s.Seller)
                .WithMany(sl => sl.Stores)
                .HasForeignKey(s => s.SellerId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}