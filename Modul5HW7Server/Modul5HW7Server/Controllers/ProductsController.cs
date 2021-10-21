using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Modul5HW7Server.ModelsView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Modul5HW7Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private static List<ProductView> _products = new List<ProductView>()
        {
            new ProductView()
            {
                Id = 1,
                Name = "Name1",
                Title = "Title1"
            },

            new ProductView()
            {
                Id = 2,
                Name = "Name2",
                Title = "Title2"
            },

            new ProductView()
            {
                Id = 3,
                Name = "Name3",
                Title = "Title3"
            },

            new ProductView()
            {
                Id = 4,
                Name = "Name4",
                Title = "Title4"
            },

            new ProductView()
            {
                Id = 5,
                Name = "Name5",
                Title = "Title5"
            },

        };

        [HttpGet]
        public IEnumerable<ProductView> GetProducts()
        {
            return _products;
        }

        [HttpPost]
        public void CreateProduct(ProductView newProduct)
        {
            _products.Add(newProduct);
        }

        [HttpDelete]
        [Route("{id}")]
        public void DeleteProduct(int id)
        {
            var deletedObj = _products.FirstOrDefault((x) => x.Id == id);
            _products.Remove(deletedObj);
        }


        [HttpPut]
        public void UpdateProduct(ProductView product)
        {
            var oldProduct = _products.FirstOrDefault(x => x.Id == product.Id);
            oldProduct.Name = product.Name;
            oldProduct.Title = product.Title;
        }
    }
}
