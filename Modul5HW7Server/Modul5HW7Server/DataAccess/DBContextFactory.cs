using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Modul5HW7Server.DataAccess
{
    public class DBContextFactory : IDesignTimeDbContextFactory<MyDbContext>
    {
        private const string _connectionStrr = "Server = localhost,1433; Database = Modul5HW6; User = sa; Password = Passw0rd;";
        public MyDbContext CreateDbContext(string[] args)
        {
            var dbContextOption = new DbContextOptionsBuilder<MyDbContext>();
            dbContextOption.UseSqlServer(_connectionStrr);
            return new MyDbContext(dbContextOption.Options);
        }
    }
}
