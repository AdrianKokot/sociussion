﻿using Microsoft.EntityFrameworkCore;
using Sociussion.Application.Common.Interfaces;

namespace Sociussion.Application.Common.Models;

public class PaginatedList<T>
{
    public List<T> Items { get; }
    public int PageNumber { get; }
    public int TotalPages { get; }
    public int TotalCount { get; }
    public int Count { get; }

    public bool HasPreviousPage => PageNumber > 1;

    public bool HasNextPage => PageNumber < TotalPages;
    
    public PaginatedList(List<T> items, int count, int pageNumber, int pageSize)
    {
        PageNumber = pageNumber;
        TotalPages = (int)Math.Ceiling(count / (double)pageSize);
        TotalCount = count;
        Items = items;
        Count = items.Count;
    }
    
    public static async Task<PaginatedList<T>> CreateAsync(IQueryable<T> source, int pageNumber, int pageSize)
    {
        var count = await source.CountAsync();
        var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();

        return new PaginatedList<T>(items, count, pageNumber, pageSize);
    }

    public static async Task<PaginatedList<T>> CreateAsync(IQueryable<T> source, IQueryParams paginationParams)
    {
        return await PaginatedList<T>.CreateAsync(source, paginationParams.Page, paginationParams.PageSize);
    }
}