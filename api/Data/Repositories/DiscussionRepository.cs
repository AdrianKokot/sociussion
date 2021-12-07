﻿using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Sociussion.Data.Collections;
using Sociussion.Data.Models.Discussion;
using Sociussion.Data.QueryParams;

namespace Sociussion.Data.Repositories
{
    public class DiscussionRepository  : Repository<Discussion, ulong, DiscussionParams>, IDiscussionRepository
    {
        public DiscussionRepository(DbContext context) : base(context)
        {
        }

        public override Task<PaginatedList<Discussion>> GetAll(DiscussionParams paginationParams)
        {
            var set = Set.AsQueryable();

            if (paginationParams.CommunityId is not null)
            {
                set = set.Where(d => d.CommunityId == paginationParams.CommunityId);
            }
            
            return PaginatedList<Discussion>.FromQueryableAsync(set.OrderBy(d => d.CreatedAt), paginationParams);
        }
    }
}