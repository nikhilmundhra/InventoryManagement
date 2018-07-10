using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InvMgmtAPI.Controllers
{
    public class ProductTypeController : ApiController
    {
        public IEnumerable<Product_Type> Get()
        {
            using (InvMgmtEntities1 entities = new InvMgmtEntities1())
            {
                return entities.Product_Type.ToList();
            }
        }
        public Product_Type Get(int id)
        {
            using (InvMgmtEntities1 entities = new InvMgmtEntities1())
            {
                return entities.Product_Type.FirstOrDefault(p => p.id == id);
            }
        }
    }
}
