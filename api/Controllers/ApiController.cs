﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Sociussion.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public abstract class ApiController : ControllerBase
    {
        protected BadRequestObjectResult BadApiRequest(string key, string message)
        {
            return BadApiRequest(key, new[] {message});
        }

        protected BadRequestObjectResult BadApiRequest(string key, string[] messages)
        {
            var errors = new Dictionary<string, string[]> {{key, messages}};

            return BadRequest(new ValidationProblemDetails(errors));
        }
    }
}
