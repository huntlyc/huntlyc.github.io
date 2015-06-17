---
layout: post
title: html5 number field
categories: general
tags: [html5]
published: True

---

By default, the HTML5 `<input type="number">` field is a floating point value. I.e. 2.0 rather than 2.  If you want a whole number (1, 2, 34, 230, e.t.c) you need to implement the *step* attribute along with the *min* attribute, like so: `<input type="number" min="0" step="1">`

Kudos to (Aurélien Ooms)[http://stackoverflow.com/users/1582182/aur%C3%A9lien-ooms]and his (answer)[http://stackoverflow.com/a/17208628] on Stack Overflow