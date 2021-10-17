using Modul5HW7Server.ModelsView;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Modul5HW7Server.Services.Abstractions
{
    public interface ICustomerService
    {
        public Task DeleteByAsync(int id);
        public Task<IEnumerable<CustomerView>> GetAllAsync();
    }
}
