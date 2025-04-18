---
id: 2209
title: 'Pizza problem &#8211; Solved Google Hashcode practice test'
date: '2019-12-02T07:00:00+01:00'
author: 'Pietro L. Carotenuto'
excerpt: 'Solved the pizza practice problem to get ready for the Google Hashcode qualification process.'
layout: post
guid: 'https://www.pietrolc.com/?p=2209'
permalink: /pizza-practice-problem/
rank_math_primary_category:
    - '681'
rank_math_description:
    - 'Learn how I tackled the pizza problem and aced the Google Hashcode practice test. Get insights and results for all the input files. '
rank_math_focus_keyword:
    - 'pizza problem'
rank_math_news_sitemap_robots:
    - index
rank_math_title:
    - 'Solving the Pizza Problem: Google Hashcode Practice Test'
rank_math_og_content_image:
    - 'a:2:{s:5:"check";s:32:"c37f3707092f896094bb5bb4639b7938";s:6:"images";a:1:{i:0;s:78:"https://www.pietrolc.com/wp-content/uploads/2019/12/example_pizza_3_slices.png";}}'
categories:
    - 'Problem-Solving Tournaments'
tags:
    - Algorithms
    - 'Google hashcode'
---

When I started looking into the *Google Hashcode challenges*, the first suggestion I received from Google Team was to try solving the *pizza problem*… just to make practice.

I learnt that *solving this problem really helps to find a solution to the challenges* that Google has proposed during these years to pass the qualification process (and maybe the final qualification too).

In addition, it is a good opportunity to check your coding skills and improve them to *implement your own algorithm in a limited amount of time*.

Finding the solution to this problem might be really challenging.

For people loving solving puzzles and logic problems, it might be really funny.

The first step is obviously to read the description of the problem.

## The pizza practice problem 

The pizza is a matrix of size R x C. Each element of this matrix can be a tomato (T) or a mushroom (M).

The goal is to divide the pizza into multiple slices so that the total score is maximized.

The score is the sum of the area of all slices.

Unfortunately, the pizza cannot be divided into slices of custom size. In fact, the slices must have an area that belongs to the range \[2\*L,H\], where L is the *minimum required number of tomatoes and mushroom in each slice*.

All slices having an area lower than 2\*L or larger than H are not valid and they cannot be considered part of the final solution.

###  The input files 

The Google Hashcode team has provided four input text files.

The first line of each input file contains the following information:

- **R**: number of matrix rows
- **C**: number of matrix columns
- **L**: the minimum number of each ingredient required for each slice
- **H**: the maximum area of the slice

The following lines contain the matrix of ‘T’ and ‘M’ characters.

Since there are two ingredients, then a valid slice has an area belonging to the range \[ 2\*L, H \], where both extremes are included.

The following table summarizes the parameters values for each input file:

| Filename | R | C | L | H |
|---|---|---|---|---|
| Example.in | 3 | 5 | 1 | 6 |
| Small.in | 6 | 7 | 1 | 5 |
| Medium.in | 200 | 250 | 4 | 12 |
| Big.in | 1000 | 1000 | 6 | 14 |

[Pizza problem – Input test files (test scenarios)]({{ '/wp-content/uploads/2020/03/original-pizza-problem-test-scenarios-google-hash-code.zip' | relative_url }}) [Download]({{ '/wp-content/uploads/2020/03/original-pizza-problem-test-scenarios-google-hash-code.zip' | relative_url }})

## Solutions for two first input files

For the input files *example.in* and *small.in*, the choice of the slices that maximize the score is straightforward.

My algorithm takes no more than 200ms for the small pizza challenge (including some basic configuration steps ).

The maximum scores for these two input files are 15 and 42 respectively.

[![Google Hashcode - Example - 3 slices]({{ '/wp-content/uploads/2019/12/example_pizza_3_slices.png' | relative_url }})]({{ '/wp-content/uploads/2019/12/example_pizza_3_slices.png' | relative_url }})
The solution for the given example.

[![Google Hashcode small pizza - 11 slices]({{ '/wp-content/uploads/2019/12/small_pizza_11_slices.png' | relative_url }})]({{ '/wp-content/uploads/2019/12/small_pizza_11_slices.png' | relative_url }})
Small pizza (11 slices, score is 42)

[![Google Hashcode small pizza - 13 slices]({{ '/wp-content/uploads/2019/12/small_pizza_13_slices.png' | relative_url }})]({{ '/wp-content/uploads/2019/12/small_pizza_13_slices.png' | relative_url }})
Small pizza (13 slices, score is 42 )

[![Google Hashcode small pizza - 14 slices]({{ '/wp-content/uploads/2019/12/small_pizza_14_slices.png' | relative_url }})]({{ '/wp-content/uploads/2019/12/small_pizza_14_slices.png' | relative_url }})
Small pizza: (14 slices, score is 42 )

These solutions might be calculated almost instantly every time and almost independently of the configuration parameters used for my algorithm.

If you are interested to learn about my algorithm and how I achieved these results and the solutions for the medium and the big pizza, then subscribe to my blog or follow my free updates on the social networks. I’m planning to publish *soon* the explanation of my algorithm.