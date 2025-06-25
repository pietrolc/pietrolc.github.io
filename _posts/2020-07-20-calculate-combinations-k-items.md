---
id: 3128
title: '2 Methods to Calculate all combinations of K items'
date: '2020-07-20T21:30:00+02:00'
author: 'Pietro L. Carotenuto'
excerpt: 'Calculate all combinations of k items taken from a set of n elements is not difficult with the proposed recursive and iterative methods.'
layout: post
guid: 'https://www.pietrolc.com/?p=3128'
permalink: /calculate-combinations-k-items/
rank_math_primary_category:
    - '680'
rank_math_description:
    - 'Easily calculate all combinations of k items from a set of n elements using efficient recursive and iterative functions. Perfect for professionals.'
rank_math_focus_keyword:
    - 'calculate all combinations'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_internal_links_processed:
    - '1'
rank_math_seo_score:
    - '65'
rank_math_analytic_object_id:
    - '54'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:33;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '33'
dpsp_networks_shares_last_updated:
    - '1670943615'
wp_featherlight_disable:
    - ''
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:0:{}'
footnotes:
    - ''
uag_migration_processed:
    - '1'
rank_math_title:
    - 'Calculate All Combinations Of K Items (recursive/iterative)'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
categories:
    - 'Programming Languages'
tags:
    - Algorithms
    - 'C++ programming'
image: '/wp-content/uploads/2020/07/calculate_combinations_size_k_of_n_items.png.webp'
---

## What do we mean for “combinations” of K elements?

Given a set of N items, we need to calculate all subsets of K items. In each calculated subset, *the selected items must appear only one time (no repetitions)*. In addition, the order of selected items should follow the criteria chosen for the entire set of N items.

In the following sections, it is always assumed that the elements in the original set are all *unique and sorted according to some criteria.*

### An example

For easy of understanding, let’s consider a set of 5 characters: { ‘a’, ‘b’, ‘c’, ‘d’, ‘e’ }.

The goal of this post is to provide a basic algorithm to calculate all combinations of size k &lt;= 5.

For example, if k = 4, then the combinations will be:

1. { ‘a’, ‘b’, ‘c’, ‘d’ }
2. { ‘a’, ‘b’, ‘c’, ‘e’ }
3. { ‘a’, ‘b’, ‘d’, ‘e’ }
4. { ‘a’, ‘c’, ‘d’, ‘e’ }
5. { ‘b’, ‘c’, ‘d’, ‘e’ }

Each of the selected items occurs only once in the calculated set (combinations with no repetitions).

### How to calculate the expected number of combinations?

The **number of combinations of size k from a set of n elements** is calculated as:

```
nCk = n! / ( k! * (n-k)! )
```

where **!** denotes the factorial operation.

#### A first approach: the brute force (iterative method)

The following code provides all possible combinations of size K from a vector of N items.

This code assumes that the input values are sorted according to some criteria and are *unique* inside the input vector.

The proposed code is basically a brute force algorithm that checks all possible combinations of size k and stores them inside an output vector.

```
// Author : Pietro L. Carotenuto
// Website: www.pietrolc.com
#include <iostream>
#include <vector>
#include <deque>
using Tin = std::vector<int>;
using Tout = std::vector<std::deque<int>>;
void calculateCombinationsRec(const Tin& vec, const int k, Tout& sol, std::deque<int>& tmp, const int nextIndex )
{
	tmp.emplace_back(vec[nextIndex]);
	// Save and return
	if (k == tmp.size())
	{
		// Add to solutions bucket
		sol.emplace_back(tmp);
		// Remove last item
		tmp.pop_back();
		// Check remaining combinations
		return;
	}
	// Otherwise, continue checking remaining combinations
	for (size_t i = nextIndex + 1; i < vec.size(); i++)
	{
		calculateCombinationsRec(vec, k, sol, tmp, i);
	}
	// Remove last item before checking new combinations
	tmp.pop_back();
}
// This returns a vector of all calculated combinations
// Assumption: The input vector does not contain any duplicate values.
//             Ideally, the input values are sorted according some criteria.
void calculateCombinations(const Tin& vec, const int k, Tout& sol)
{
	// Iterate on all possible root indexes
	for (size_t rootIdx = 0; rootIdx < vec.size(); rootIdx++)
	{
		// For each root, this temporary queue stores all combinations having
		// the same starting point
		std::deque<int> tmp;
		calculateCombinationsRec(vec, k, sol, tmp, rootIdx);
	}
}
int main()
{
	Tin vec;
	Tout sol;
	const int k = 5;
	for (int i = 0; i < 10; i++)
	{
	    vec.emplace_back(i);
	}
	// Main function
	calculateCombinations(vec, k, sol);
	std::cout << "Combinations: " << std::endl;
	for (const auto & s1 : sol)
	{
		for (const auto& it2 : s1)
		{
			std::cout << it2 << " ";
		}
		std::cout << std::endl;
	}
	std::cout << "N. combinations: " << sol.size() << std::endl;
}
```

This code produces the following output:

```
Combinations:
0 1 2 3 4
0 1 2 3 5
0 1 2 3 6
0 1 2 3 7
0 1 2 3 8
0 1 2 3 9
0 1 2 4 5
0 1 2 4 6
0 1 2 4 7
0 1 2 4 8
0 1 2 4 9
...
3 5 6 8 9
3 5 7 8 9
3 6 7 8 9
4 5 6 7 8
4 5 6 7 9
4 5 6 8 9
4 5 7 8 9
4 6 7 8 9
5 6 7 8 9
N. combinations: 252
```

Each element inside the input vector can be the starting element of a set of combinations of k elements.

The most expert in this field might realize that the elements having indexes larger than n – (k-1) cannot be the starting element of a new set of combinations. In order to improve the performance, we could ignore those items.

Given a specific starting element, then the function *calculateCombinationsRec()* is recursively called to check the remaining elements. The function *calculateCombinationsRec()* only stores the combinations having size k.

#### The brute force (recursive optimized method)

The code above works pretty fine but it has a big disadvantage: **it cannot handle a large data set of items**. Why? Simply **because the proposed function is recursive**.

For a large set of items or, similarly, for large values of K, this recursive function might lead to a *stack overflow*.

The solution is to convert the proposed code to its non-recursive version.

Converting a code from a recursive to its iterative version is easy.

Please, have a look into the following code, where an iterative function is being used to calculate all combinations of a given set of characters:

```
// Author : Pietro L. Carotenuto
// Website: www.pietrolc.com
#include <iostream>
#include <vector>
#include <deque>
#include <stack>
using T = char;
using Tin = std::vector<T>;
using Tout = std::vector<std::deque<T>>;
typedef struct
{
	int next;             // the next index to pick up
	std::deque<T> comb; // the combination
} StackItem;
void calculateCombinations(const Tin& vec, const int k, Tout& sol)
{
	if (vec.empty() || k == 0)
	{
		return;
	}
	// init data
	sol.clear();
	int rootIdx = 0;
	const int n = vec.size();
	while (rootIdx < (n-(k-1)) )
	{
		std::stack<StackItem> myStack;
		// adding initial item in the stack
		StackItem s0{};
		s0.next = rootIdx + 1;
		s0.comb.push_back(vec[rootIdx]);
		myStack.emplace(s0);
		while (!myStack.empty())
		{
			// get item from the top of the stack
			auto& it = myStack.top();
			// check if it is a combination of size k
			if (it.comb.size() == k)
			{
				sol.emplace_back(it.comb); // store the solution
				myStack.pop();             // remove from the stack
				continue;
			}
			// if the index exceeds the size of the input vector,
			// pop the current item from the stack
			if (it.next >= vec.size())
			{
				myStack.pop();
				continue;
			}
			// Otherwise, let's check next item in the input array
			// saving a new state into the stack
			StackItem s1{};
			s1.next = it.next + 1; // the next node to pick up
			s1.comb = it.comb; // current incomplete combination
			s1.comb.push_back(vec[it.next]);  // adding current item
			// increase the node index at the top of the stack
			++it.next;
			// save new state into the stack
			myStack.push(s1);
		}
		// increase root index
		++rootIdx;
	}
}
int main()
{
	Tin vec{'a','b','c','d','e'};
	Tout sol;
	const int k = 3;
	// Main function
	calculateCombinations(vec, k, sol);
	std::cout << "Combinations: " << std::endl;
	for (const auto & s1 : sol)
	{
		for (const auto& it2 : s1)
		{
			std::cout << it2 << " ";
		}
		std::cout << std::endl;
	}
	std::cout << "N. combinations: " << sol.size() << std::endl;
}
```

The stack overflow is avoided since the function to calculate the full list of combinations is called just once.

Which is the expected console output for the input vector of characters {‘a’, ‘b’, ‘c’, ‘d’, ‘e’} for K = 3?

Please, check the console output here below:

```
Combinations:
a b c
a b d
a b e
a c d
a c e
a d e
b c d
b c e
b d e
c d e
N. combinations: 10
```

### Second approach: a C++ specific method

The method proposed in this section has been adapted from [Rosetta Code](https://rosettacode.org/wiki/Combinations#C.2B.2B) website.

I like this approach since it is not recursive and it takes advantage of the function [std::prev\_permutation()](http://www.cplusplus.com/reference/algorithm/prev_permutation/) already available in the STL library “algorithm”.

```
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using T = char;
using Tcomb = std::vector<T>;
using Tsol = std::vector<Tcomb>;
void comb(const int K, const Tcomb& v, Tsol& sol)
{
	const int N = v.size();
	if (K > N)
	{
		// log an error message here!
		return;
	}
	std::string bitmask(K, 1); // K leading 1's
	bitmask.resize(N, 0); // N-K trailing 0's
	// store values and permute bitmask
	do {
		Tcomb tmp{};
		for (int i = 0; i < N; ++i) // [0..N-1] integers
		{
			if (bitmask[i] != 0)
			{
				tmp.emplace_back(v[i]);
			}
		}
		if (!tmp.empty())
		{
			sol.emplace_back(tmp);
		}
	} while (std::prev_permutation(bitmask.begin(), bitmask.end()));
}
int main()
{
	Tsol sol;
	Tcomb values{ 'a','b','c','d','e' };
	comb(3, values, sol);
	for ( auto& t : sol)
	{
		for (auto& e: t)
		{
			std::cout << e << " ";
		}
		std::cout << std::endl;
	}
	std::cout << "N. combinations: " << sol.size() << std::endl;
}
```

The proposed iterative method can be used with any pair of K and N (assuming K &lt;= N).

### Conclusions

In this article, two different approaches have been proposed to calculate all combinations of size k from a set of size N.

The main assumptions for the proposed methods are that all items in the set are *unique and – eventually – sorted according to some criteria*. The calculated combinations are sorted according to the same criteria followed in the set of items used as input.

Each proposed method has been properly discussed to point out pros and cons.