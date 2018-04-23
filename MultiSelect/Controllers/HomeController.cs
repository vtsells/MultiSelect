using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MultiSelect.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<SelectListItem> items = new List<SelectListItem>();
            items.Add(new SelectListItem() { Text = "Item 1", Value = "Item 1" });
            items.Add(new SelectListItem() { Text = "Item 2", Value = "Item 2" });
            items.Add(new SelectListItem() { Text = "Item 3", Value = "Item 3" });
            items.Add(new SelectListItem() { Text = "Item 4", Value = "Item 4" });
            items.Add(new SelectListItem() { Text = "Item 5", Value = "Item 5" });
            items.Add(new SelectListItem() { Text = "Item 1", Value = "Item 1" });
            items.Add(new SelectListItem() { Text = "Item 2", Value = "Item 2" });
            items.Add(new SelectListItem() { Text = "Item 3", Value = "Item 3" });
            items.Add(new SelectListItem() { Text = "Item 4", Value = "Item 4" });
            items.Add(new SelectListItem() { Text = "Item 5", Value = "Item 5" });
            items.Add(new SelectListItem() { Text = "Item 1", Value = "Item 1" });
            items.Add(new SelectListItem() { Text = "Item 2", Value = "Item 2" });
            items.Add(new SelectListItem() { Text = "Item 3", Value = "Item 3" });
            items.Add(new SelectListItem() { Text = "Item 4", Value = "Item 4" });
            items.Add(new SelectListItem() { Text = "Item 5", Value = "Item 5" });
            ViewBag.Items = items;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}