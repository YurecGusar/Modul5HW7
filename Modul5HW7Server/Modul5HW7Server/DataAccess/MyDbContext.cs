using Microsoft.EntityFrameworkCore;
using Modul5HW7Server.DataAccess.DataConfigs;
using Modul5HW7Server.ModelsView;

namespace Modul5HW7Server.DataAccess
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> dbContextOptions) 
            : base(dbContextOptions)
        {
        }

        public DbSet<CustomerView> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) 
        {
            builder.ApplyConfiguration(new CustomerConfig());
        }
    }
}
