---
title: 'Admin'
date: '2020-01-02'
---

We recommend using **Admin Profile** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Admin Profile for many types of oprations, including:

- Adding Data into Database
- Adding User's ID
- Can Modify Data
- Help and documentation

You should ask yourself: "Can I do this **ahead** of a user's request?" If the answer is yes, then you can do this.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.