---
layout: post
title: Personal Font Collection on Linux
categories: general
tags: [fonts]
published: True

---

Tried on Ubuntu 15.04, you can create a .fonts folder in your home folder and chuck all your fonts in there.  Just be sure to refresh the font cache.
`mkdir ~/.fonts`
`cp yourfonts ~/.fonts`
`sudo fc-cache -f -v`