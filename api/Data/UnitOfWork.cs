﻿using System;
using Sociussion.Data.Context;
using Sociussion.Data.Interfaces;
using Sociussion.Data.Repositories;

namespace Sociussion.Data
{
    public sealed class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly ApplicationDbContext _context;

        private CommunityRepository Community { get; set; }

        public ICommunityRepository CommunityRepository
        {
            get
            {
                return Community ??= new CommunityRepository(_context);
            }
        }

        private DiscussionRepository Discussion { get; set; }

        public IDiscussionRepository DiscussionRepository
        {
            get { return Discussion ??= new DiscussionRepository(_context); }
        }

        private CommentRepository Comment { get; set; }

        public ICommentRepository CommentRepository
        {
            get { return Comment ??= new CommentRepository(_context); }
        }


        private bool Disposed { get; set; } = false;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            if (!Disposed)
            {
                _context.Dispose();
            }

            Disposed = true;
            GC.SuppressFinalize(this);
        }
    }
}
