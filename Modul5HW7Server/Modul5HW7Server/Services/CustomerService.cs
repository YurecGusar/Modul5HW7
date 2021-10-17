using Microsoft.EntityFrameworkCore;
using Modul5HW7Server.DataAccess;
using Modul5HW7Server.ModelsView;
using Modul5HW7Server.Services.Abstractions;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Modul5HW7Server.Services
{
    public class CustomerService : ICustomerService
    {
        private MyDbContext _dbCntxt;
        public CustomerService(MyDbContext dbContext)
        {
            _dbCntxt = dbContext;
        }

        public async Task<IEnumerable<CustomerView>> GetAllAsync()
        {
            var customers = await _dbCntxt.Customers.ToListAsync();
            return customers;
        }

        public async Task DeleteByAsync(int id)
        {
            var customer = new CustomerView()
            {
                Id = id
            };
            _dbCntxt.Customers.Attach(customer);
            _dbCntxt.Customers.Remove(customer);

            await _dbCntxt.SaveChangesAsync();
        }
    }
}
