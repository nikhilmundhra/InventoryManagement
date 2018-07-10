using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InvMgmtAPI.Controllers
{
    public class vendorController : ApiController
    {
        public IEnumerable<Product_Vendor> Get()
        {
            using (InvMgmtEntities1 entities = new InvMgmtEntities1())
            {
                return entities.Product_Vendor.ToList();
            }
        }
        public Product_Vendor Get(int id)
        {
            using (InvMgmtEntities1 entities = new InvMgmtEntities1())
            {
                return entities.Product_Vendor.FirstOrDefault(p => p.id == id);
            }
        }
    }
}
