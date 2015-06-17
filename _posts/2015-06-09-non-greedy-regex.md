---
layout: post
title: Non greedy Regex
categories: general
tags: [regex,programming]
published: True

---

Turn a "greedy" regex into a non greedy one by using a question mark.

For example: take the following HTML: `<a class="content-btn btn btn-primary" href="#link">link text</a>` and lets say we want all the classes and the link text for some reason...  Using this pattern `<a\sclass=\"(.*)\".*>(.*)<\/a>` yields two matches:

1. content-btn btn btn-primary" href="#`
2. link

Changing the pattern to use the question mark in the class group like so: `<a\sclass=\"(.*?)\".*>(.*)<\/a>` gives us what we want:

1. content-btn btn btn-primary
2. link