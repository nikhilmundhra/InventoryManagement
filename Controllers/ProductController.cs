using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InvMgmtAPI.Models;

namespace InvMgmtAPI.Controllers
{
    public class ProductController : ApiController
    {
        [HttpGet]
        [Route("api/Product/GetAll")]
        public IEnumerable<ProductModel> Get()
        {
            using(InvMgmtEntities1 entities = new InvMgmtEntities1())
            {
                // return entities.Products.ToList();

                var result = from p in entities.Products
                           join t in entities.Product_Type on p.Type_ID equals t.id
                           join v in entities.Product_Vendor on p.Vendor_ID equals v.id
                           select new ProductModel
                           {
                               ProductId = p.id,
                               ProductName = p.Name,
                               TypeName = t.Name,
                               TypeId = p.Type_ID,
                               VendorId = p.Vendor_ID,
                               VendorName = v.Name
                           };

                return result.ToList();
            }
        }

        [HttpGet]
        [Route("api/Product/{id}")]
        public ProductModel Get(int id)
        {
            using (InvMgmtEntities1 entities = new InvMgmtEntities1())
            {
                var result = from p in entities.Products
                             join t in entities.Product_Type on p.Type_ID equals t.id
                             join v in entities.Product_Vendor on p.Vendor_ID equals v.id
                             select new ProductModel
                             {
                                 ProductId = p.id,
                                 ProductName = p.Name,
                                 TypeName = t.Name,
                                 TypeId = p.Type_ID,
                                 VendorId = p.Vendor_ID,
                                 VendorName = v.Name
                             };

                return result.FirstOrDefault(p => p.ProductId == id);
            }
        }

        [HttpPost, HttpOptions]
        [Route("api/product/saveProduct")]
        public IHttpActionResult saveProduct([FromBody] ProductModel mProduct)
        {
            if (mProduct != null)
            {
                using (InvMgmtEntities1 entities = new InvMgmtEntities1())
                {
                    if (mProduct.ProductId > 0)
                    {
                        var dbProduct = entities.Products.FirstOrDefault(x => x.id == mProduct.ProductId);
                        dbProduct.Name = mProduct.ProductName;
                        dbProduct.Type_ID = mProduct.TypeId;
                        dbProduct.Vendor_ID = mProduct.VendorId;
                        entities.SaveChanges();
                    }
                    else
                    {
                        var product = new Product
                        {
                            Name = mProduct.ProductName,
                            Type_ID = mProduct.TypeId,
                            Vendor_ID = mProduct.VendorId
                        };
                        entities.Products.Add(product);

                        entities.SaveChanges();
                    }
                }
            }
            return Ok("Product saved success");
        }

    }
}
