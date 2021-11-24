﻿using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sociussion.Data.Interfaces;
using Sociussion.Data.Models.Community;

namespace Sociussion.Controllers
{
    public class CommunitiesController : GenericApiController<Community, ulong>
    {
        public CommunitiesController(IUnitOfWork unitOfWork)
            : base(unitOfWork.CommunityRepository)
        {
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateCommunityModel createModel)
        {
            var model = new Community() {Name = createModel.Name};

            try
            {
                await _repository.Add(model);

                return CreatedAtAction(nameof(GetEntity), new {id = model.Id}, model);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
