---
id: 2564
title: 'Book Scanning: Google Hash Code Problem description'
date: '2020-03-15T11:56:25+01:00'
author: 'Pietro L. Carotenuto'
excerpt: 'This article contains a short description of the problem proposed for the Google Hash Code Online Qualification process on Feb 20th, 2020'
layout: post
guid: 'https://www.pietrolc.com/?p=2564'
permalink: /book-scanning-google-hash-code-problem-description/
rank_math_primary_category:
    - '681'
rank_math_description:
    - 'This article contains a short description of the "Book scanning" problem proposed for the Google Hash Code Online Qualification process on Feb 20th, 2020'
rank_math_focus_keyword:
    - 'book scanning'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_internal_links_processed:
    - '1'
rank_math_analytic_object_id:
    - '63'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:2;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '2'
dpsp_networks_shares_last_updated:
    - '1670896813'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
rank_math_seo_score:
    - '64'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:0:{}'
wp_featherlight_disable:
    - ''
uag_migration_processed:
    - '1'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
image: /wp-content/uploads/2020/03/bookscanning_extendedround.png.webp
categories:
    - 'Problem-Solving Tournaments'
tags:
    - 'Google hashcode'
---

This article contains a short description of the problem “Book Scanning” proposed for the Google Hash Code Online Qualification process on Feb 20th, 2020. The full description of this problem is available in the archive section of the Google Hash Code website.

![Book Scanning Cover Image]({{ page.image | absolute_url }})

## Book Scanning: task description

Google provided a list of **L** libraries and **B** books. The task is to plan which books to scan from which library to maximize the total score of all scanned books, taking into account that each library needs to be signed up before it can ship books.

Each book B\[k\] has a certain score S\[k\], where S\[k\] belongs to the range $[0, 1’000]$. The maximum size of list of books is 100’000, i.e., the index *k* belongs to the range $[0, 99’999]$.

Each library L\[k\] has three parameters:

- the set of books in the library (a “list” of the indexes of the books).
- the time – measured as number of days – that it takes to sign the library up for scanning. The maximum time required to sign up is 100’000 days.
- the maximum number of books that can be scanned each day, after the library has signed up

The maximum number of libraries is 100’000, i.e., the index *k* belongs to the range $[0, 99’999]$.

The maximum time of the simulation is **D – 1**. All books scanned after this time do not provide any score. All libraries signed up after this time are ignored. The value of the parameter D belongs to the range $[1; 100’000]$.

Implicitly, both books and libraries are identified by a numerical index.

### How the score is calculated?

The score is the sum of the scores of all books that are scanned within **D** days. Each book can provide its score only once.

A solution can contain multiple instances of the same book even if they do not increase its score.

A solution can contain books being scanned after D-1 (they will be ignored).

A solution can contain libraries being signed up after D-1 (they will be ignored).

### Algorithm description and code

For this challenge, I’ve re-adapted the Simulated Annealing code that I’ve implemented for the previous Google HashCode challenges. I suggest to try the same or a different approach. The code for this tournament is currently not available.