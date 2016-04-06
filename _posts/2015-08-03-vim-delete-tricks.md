---
layout: post
title: Vim delete range
categories: general
tags: [vim,cli]
published: True

---

Often I have a large SQL backup file I only need to extract a table and its information out of.  To do this I've found that all you need to do is find the line you wish to delete up to and enter the following command.
`1,.d`
This tells vim for the range 1 (line 1) to . (the current line), delete.
You can, of course, do something like: 
`1,6170d`
But where's the fun in that???

*Optional Extra*
Then find the end of the section you wish and do the following command to delete until the end of the file:
`.,$d`
This tells vim for the range . (the current line) to $ (last line of file), delete.