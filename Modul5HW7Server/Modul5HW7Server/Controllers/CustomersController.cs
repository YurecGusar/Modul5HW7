using Microsoft.AspNetCore.Mvc;
using Modul5HW7Server.ModelsView;
using Modul5HW7Server.Services.Abstractions;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Modul5HW7Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomersController : ControllerBase
    {
        private ICustomerService _cstmrSrvc;

        public CustomersController(
            ICustomerService customerService)
        {
            _cstmrSrvc = customerService;
        }

        [HttpGet]
        public async Task<IEnumerable<CustomerView>> Get()
        {
            return await _cstmrSrvc.GetAllAsync();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task Delete(int id)
        {
            await _cstmrSrvc.DeleteByAsync(id);
        }
    }
}
