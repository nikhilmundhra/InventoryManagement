using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InvMgmtAPI.Models
{
    public class ProductModel
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int TypeId { get; set; }
        public int VendorId { get; set; }
        public string TypeName { get; set; }
        public string VendorName { get; set; }
    }
}