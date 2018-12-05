using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PawsibleApi.Controllers
{
    public class HealthCheckController : Controller
    {
        [HttpGet("/healthcheck/")]
        public IActionResult Index()
        {
            return Ok("You're Mom!");
        }
    }
}