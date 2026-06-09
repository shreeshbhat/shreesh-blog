---
layout: ../../layouts/blog.astro
title: Avoid using undocumented APIs
tags: ['Today I learned']
pubDate: '2020-05-14'
description: A small observation during pull request review.
---
I learn a lot through reviewing other's pull requests. Maybe I notice a new way of doing something or learn something through review comments.

Today, I found a line of code that was calling an undocumented method in [Ionic](https://ionicframework.com/)'s navigator in a PR at work. The problem with using such APIs is that they may deprecate it or change it anytime. If we use documented APIs, then they have to mark it as deprecated before removing it or we can read any changes in the change log.
