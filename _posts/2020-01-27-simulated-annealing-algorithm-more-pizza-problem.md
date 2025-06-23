---
id: 2428
title: 'A Simulated Annealing algorithm to solve the &#8220;More pizza&#8221; problem'
date: '2020-01-27T12:31:00+01:00'
author: 'Pietro L. Carotenuto'
excerpt: 'The description of the Simulated Annealing algorithm I used to get maximum score for the "More Pizza" problem.'
layout: post
guid: 'https://www.pietrolc.com/?p=2428'
permalink: /simulated-annealing-algorithm-more-pizza-problem/
rank_math_primary_category:
    - '681'
rank_math_description:
    - 'Discover how simulated annealing algorithm provides an optimal solution for the "More Pizza" problem in this technical guide. Ideal for professionals.'
rank_math_focus_keyword:
    - 'simulated annealing'
rank_math_facebook_title:
    - 'Do you know how to solve the "More Pizza" problem?'
rank_math_facebook_description:
    - 'The description of the algorithm used to get maximum score. Above all, this is the algorithm I suggest to use for the Google Hash Code Qualification Round.'
rank_math_twitter_title:
    - 'This is how I solved the "More Pizza" problem...'
rank_math_twitter_description:
    - 'The description of the algorithm used to get maximum score. Above all, this is the algorithm I suggest to use for the Google Hash Code Qualification Round.'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_facebook_image:
    - 'https://www.pietrolc.com/wp-content/uploads/2020/02/google-hashcode-more-pizza-algorithm-description.jpg'
rank_math_facebook_image_id:
    - '2501'
rank_math_twitter_image:
    - 'https://www.pietrolc.com/wp-content/uploads/2020/02/google-hashcode-more-pizza-algorithm-description.jpg'
rank_math_twitter_image_id:
    - '2501'
rank_math_twitter_use_facebook:
    - 'off'
rank_math_internal_links_processed:
    - '1'
rank_math_analytic_object_id:
    - '66'
rank_math_seo_score:
    - '80'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:19;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '19'
dpsp_networks_shares_last_updated:
    - '1670936413'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:1:{i:0;s:18:"More pizza problem";}'
wp_featherlight_disable:
    - ''
uag_migration_processed:
    - '1'
rank_math_title:
    - 'Simulated Annealing - How I solved the More Pizza problem'
rank_math_og_content_image:
    - 'a:2:{s:5:"check";s:32:"ef6d8a2ea124c0e9137b0ac6ca156ead";s:6:"images";a:1:{i:0;i:73519;}}'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
categories:
    - 'Problem-Solving Tournaments'
tags:
    - Algorithms
    - 'Google hashcode'
---

## The “More Pizza” Problem

The [“More pizza” problem has been described in a recent post](https://www.pietrolc.com/google-hash-code-more-pizza/) and in this article – as promised – I’m going to describe the Simulated Annealing algorithm that I used to solve it.

First, this kind of problems is well known in Computer Science Literature as **Knapsak 0/1.**

Let’s consider an empty knapsack with a maximum capacity **M** and a group of **N** generic objects **Obj[0], Obj[1], …, Obj[N-1]**. Each object **Obj[k]** has a weight **W[k]**. The user is allowed to choose *at most* one of each item so that the sum of the items weights does not exceed the maximum capacity M.

Do you see the relationship with the “More Pizza” problem?

In the “More pizza” problem, the knapsack represents the pizzas order. The maximum number of slices M represents the maximum capacity of the knapsack. The weight of each pizza is represented by the number of its slices.

The Knapsack 0/1 can be solved in different ways. In other words, you can easily find algorithms that are simpler than my proposal. Nevertheless, I want to *reward you with some additional information that will help you to increase your chance to pass the Google Hash Code Qualification round*.

## Qualification round: some considerations

Basing on my experience, during the Google Hash Code Qualification round, *the time is your worst enemy.*

The “More pizza” problem *is not the challenge.* The Google Team suggests to solve this problem to make practice and feel more comfortable with their platform. Therefore, even if you solve this problem, do not feel like you have passed an exam. Solving this problem does not mean passing the Qualification round. Finding the solution to this problem does not represent the real finish line.

The real finish line is to win 4’000 $!

For this reason, the best algorithm does not always provide the perfect solution. The best algorithm provides an acceptable solution *immediately.*

In many combinatorial problems, finding the perfect solutions might require a large amount of time ( i.e., days, weeks or – perhaps – years ).

**Your goal is to** **find an *acceptable* solution** that is the best among the ones being uploaded by all teams around the world.

Therefore, your algorithm should:

- “immediately” provide a *feasible* solution, even if this solution has the minimum score.
- always *store in a file* (in the format described by Google) any feasible solution that it generates, if it is better than the initial one.
- always calculate the score for each calculated solution, so that it is easier to label files to *upload to the Judge System.*
- avoid to be trapped in corner cases: your script will run indefinitely without providing any better results.
- If working with C++, avoid recursive functions. You will have 100% a stack-overflow when dealing with large amount of data.
- be as fast as possible: please, avoid brute-force solutions.
- be correct.

My final suggestions are:

- ***the perfect solution might not exist.*** Do not search for it!
- read carefully the description of the problem (every single word is important).
- be a team player: listen ideas coming from other people!

## How to solve the pizza… sorry, the qualification round?

### How the code should be structured

Your code must be divided in 4 main sections:

- Data initialization: this part of your code is responsible to read data from a file.
- Body of the algorithm: this is what you are looking for!
- Validation of the solution
- Save data to a file in the format required by Google

Even if you are really interested to the second part only, you must ensure that all the four sections above are correctly implemented!

### This is why this challenge help you to improve coding skills

For this reason, the Google Hash Code challenge really helps to improve your coding skills. You should be confident with:

- Reading data from files
- Writing data to files
- Structures and data containers
- Most used utility functions to manage your data for the programming language you are using (e.g., for C++, it is important to study STL functions … )

Since time is your worst enemy, you should avoid reinventing the wheel.

### The Simulated Annealing algorithm

#### Choice of the algorithm

A good algorithm should allow to solve *the “More pizza” problem* as *any other combinatorial problem* proposed by Google (remember, your goal is to pass at least the Qualification Round!).

A good algorithm should not take too much time to be implemented (you will have only few hours).

A good algorithm should allow to *explore* the space of solutions, in a good way.

For these reasons, I decided to use a *Simulated Annealing* algorithm. The optimization algorithm is based on a Physical Annealing analogy, where a solid is heated until particles are randomly arranged in a liquid state, followed by slow cooling. At each temperature, enough time is spent for the solid to reach thermal equilibrium, where energy levels follow Boltzmann distribution. As temperature decreases, the probability tends to concentrate on low energy states. Care must be taken to reach thermal equilibrium prior to decreasing the temperature.

#### The main challenge

For each *solution*, generally there is always an associated *score*.

Two solutions are *equivalent* if they provide the same score.

The *exploration* of the space of solution is not an easy task.

In the “More pizza” problem, you can imagine that there are many combinations of pizza orders providing the same score. For this reason, it is possible that passing from one solution to another having higher score is not easily achievable. If the algorithm is not properly designed, the exploration might stop in a *local trap* and a suboptimal score is provided.

In addition, it is possible that, when exploring a set of *equivalent solutions,* the algorithm returns to a previous analyzed solution. If this occurs, the algorithm is trapped in a *loop*.

Therefore, it should be possible to *jump* from any solution to a new one to get a better score, even if there are too many equivalent solutions.

Sometimes, to avoid being trapped in certain regions of the space solutions corresponding to sub-optimal solutions, *long jumps* are required.

Defining how a new solution might be generated from the current one is the most important aspect.

The ability to intensify the search process *in proximity of* a given solution is generally called *exploitation.*

#### Representation of the solution

When reading the input data, the number of slices of each pizza can be stored as element of an array or C++ vector. In this way, the solution is simply a C++ vector storing the indexes of the pizzas to be ordered.

As you can see, the representation of the solution is suggested by Google team too. The choice of the representation of the solution is generally always linked to the output format. For this reason, it is really important to carefully read the description of the proposed problem.

If you have the perfect algorithm, but the data are incorrectly read from file or incorrectly written to a file, then your algorithm fails!

#### The flowchart

Please, find my algorithm flowchart below:

![Simulated Annealing Flowchart]({{ '/wp-content/uploads/2024/05/simulated-annealing-flowchart.png' | absolute_url }})

In Literature, you can find many articles about this topic. In this article, my goal is to show how I used the chosen algorithm and – above all – provide suggestions to pass the Qualification Round.

#### The algorithm

Each generated list of indexes must be chosen so that:

1. each index is unique
2. the total amount of slices of the solution does not exceed the given maximum value

Given these constraints, a new solution can be calculated from an old one, simply swapping a used index with another one not present in the current solution. The number of slices of the new chosen pizza should also lead to verify the second constraint.

*Long jumps* can be achieved swapping more than one index at a time.

**Why a Simulated Annealing algorithm?**

A Simulated Annealing algorithm has an important feature: it allows to *jump from a solution to another one with a better score passing through solutions with a lower score in a certain amount of steps.*

IMHO, the Simulated Annealing algorithm is able to explore the space of solutions and avoid local traps.

Unfortunately, the Simulated Annealing approach has a big drawback: if not properly configured, this algorithm converges very slowly to the best solution. For this reason, it is really important to define:

- The initial temperature T0
- The math formula used to update the temperature
- The probability of acceptance

I found that the larger is the number of pizzas, the larger should be the initial temperature T0. In this way, the initial exploration of the space of solutions is done widely. There is no exact rule about this.

The *probability of acceptance* is the probability to accept a solution having a score lower than the best score. This best temporary solution will be used to generate new “neighbors”, i.e. new solutions that are close to the original one. The probability of acceptance should be calculated at each iteration since it depends on the current temperature value.

I found that the best probability of acceptance formula is:

**probAcceptance = 1/ (1+exp(deltaScore/T))**

where *deltaScore = BestTmpScore – TmpScore* and T is the current temperature value. The value deltaScore is expected to be greater or equal than zero when this probability is being calculated.

At each iteration of the algorithm, the temperature is slowly decreased by an certain factor, i.e.

**T = T * alpha,**

where alpha is generally close, but no equal, to 1 (e.g., 0.999995).

Therefore, initially the probability of acceptance starts with values close to 0.5 and it slowly decreases.

As the temperature slowly decreases, the Simulated Annealing algorithm converges to a generic local search algorithm.

#### Save always best solutions

As personal hint, consider to save into a new file each best temporary solution found by your algorithm. In fact, there is no limit to the amount of times you can upload your solution files to the Judge System.

#### A further stopping condition

In my algorithm, the algorithm stops if the best solution has been found or if a better solution is improved after 500’000 iterations. This additional condition has been never verified.

#### Time required to implement this algorithm

Even if it looks a long algorithm, in effect its implementation has taken no more than one hour and a half. Therefore, it is suitable for the Online Qualification round too (especially if you already have some good snippet of code).

## Conclusions

In this article, I’ve discussed about the algorithm used to solve the Knapsack 0/1 problem that Google has proposed this year. The proposed algorithm is suitable to be used also for other problems proposed during the qualification round in the past years. My goal was to prepare you to face the next Google Hash Code challenge.

The Google Hash Code qualification round is an amazing opportunity to have fun with your team and compete against the world on an interesting problem to solve.

Do not attend only to win, but to learn coding and to become the perfect team player. Most important, do not forget to order pizzas!

Hope to hear you soon with amazing news!