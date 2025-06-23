---
id: 2404
title: '&#8220;More Pizza&#8221; practice problem: solved with maximum score'
date: '2020-01-13T12:00:00+01:00'
author: 'Pietro L. Carotenuto'
excerpt: 'This year, the Google Hash Code team has proposed a different version of the Pizza practice problem, entitled "More Pizza". The challenge description - as usual - is available for all users registered to the Google Hash Code judge system. Please, let me briefly describe the proposed problem.'
layout: post
guid: 'https://www.pietrolc.com/?p=2404'
permalink: /google-hash-code-more-pizza/
rank_math_primary_category:
    - '681'
rank_math_focus_keyword:
    - 'More pizza'
rank_math_facebook_title:
    - '"More pizza" problem solved with maximum score'
rank_math_twitter_title:
    - '"More pizza" problem solved with maximum score'
rank_math_breadcrumb_title:
    - 'More Pizza'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_facebook_image:
    - 'https://www.pietrolc.com/wp-content/uploads/2020/01/solved_more_pizza_problem_google_hashcode1.png'
rank_math_facebook_image_id:
    - '2409'
rank_math_twitter_image:
    - 'https://www.pietrolc.com/wp-content/uploads/2020/01/solved_more_pizza_problem_google_hashcode1.png'
rank_math_twitter_image_id:
    - '2409'
rank_math_twitter_use_facebook:
    - 'off'
rank_math_internal_links_processed:
    - '1'
rank_math_analytic_object_id:
    - '67'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:24;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '24'
dpsp_networks_shares_last_updated:
    - '1670878810'
rank_math_seo_score:
    - '83'
wp_featherlight_disable:
    - ''
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:1:{i:0;s:30:"More pizza problem description";}'
uag_migration_processed:
    - '1'
rank_math_description:
    - 'Crack the updated ''More Pizza'' challenge from Google Hash Code Team. Boost your skills and nail the maximum score.'
rank_math_og_content_image:
    - 'a:2:{s:5:"check";s:32:"0a1506e54f5c040bb406d1f6e9ea7a77";s:6:"images";a:1:{i:0;s:99:"https://www.pietrolc.com/wp-content/uploads/2020/04/more-pizza-cover-cpp-code-solution-1024x858.jpg";}}'
categories:
    - 'Problem-Solving Tournaments'
tags:
    - 'Google hashcode'
image:
    - '/wp-content/uploads/2020/01/solved_more_pizza_problem_google_hashcode1.png.webp'
---

This year, the Google Hash Code team has proposed a different version of the Pizza practice problem. For this reason, it has been entitled “More Pizza”.

The problem description – as usual – is available for all users registered to the Google Hash Code judge system. If you haven’t read yet, please, let me briefly describe the proposed problem.

## The problem description

Your menu contains **N** pizzas. Each pizza has a certain number of slices. You can order as many pizzas you want but:

- you can order *at most* one pizza for each type
- the total number of slices cannot exceed a given number **M**

The maximum number of slices **M** belongs to the range **[1, 10^9]**.

The maximum number of pizzas **N** belongs to the range **[1, 10^5]**.

Each pizza contains at least one slice, but it could also have M slices. In other words, for each pizza, the number of slices belongs to the range $[1, M]$.

Now you have all data,… which pizzas are you going to order?

## The test scenarios

On the Google Hash Code judge system, there are five tests scenarios for this problem:

- example
- small
- medium
- quite big
- also big

The following table summarizes the input data for each test scenario:

| Name | Max number of slices | Available pizzas |
|---|---|---|
| Example | 17 | 4 |
| Small | 100 | 10 |
| Medium | 4500 | 50 |
| Quite big | 1000000000 | 2000 |
| Also big | 505000000 | 10000 |

## Maximum score achieved

My algorithm was able to get the maximum score for each given scenario, except for the “example”. I think this is an important suggestion to keep in mind during the real challenge: the optimal solution might not exist and – therefore – there might be no solution perfectly fitting the given constraints.

Funnily enough, the example was the only imperfect test scenario.

The [“More pizza” problem can be solved using the algorithm described in this article](https://www.pietrolc.com/more-pizza-problem-algorithm-description/). In this article, I reward the reader with some tips and tricks required to pass the Google Hash Code Qualification step. In fact, IMHO the real finish line is not solving the “Pizza” or “More Pizza” problem but – at least – pass the Qualification Round, then to attend the Final Round and – why not? – win some money!

The [C++ code implementation of the algorithm to solve the “More pizza”](https://www.pietrolc.com/more-pizza-cpp-code-solution/) problem has been challenging and funny at the same time.

If you want, feel free to leave a comment and provide any hints and tips from your side.

Thanks in advance :)
