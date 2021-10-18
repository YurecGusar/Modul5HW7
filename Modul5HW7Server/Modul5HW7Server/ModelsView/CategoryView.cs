using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Modul5HW7Server.ModelsView
{
    public class CategoryView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<ProductView> ProductViews { get; set; } = new List<ProductView>();
    }
}
