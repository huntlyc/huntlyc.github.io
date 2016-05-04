---
title: List Files Modified Across Two Commits
layout: post
categories: general
tags: [git,cli]
published: True
---

A quick handy wee snippet, if you wish to get a list of all files changed across two commits use the following syntax:
`git diff --name-status $SHA1 $SHA2`

For a nice colourful version, do this instead:
`git diff --stat $SHA1 $SHA2`
