---
id: 4566
title: 'Quick C++ std::vector initialization'
date: '2021-03-29T18:44:37+02:00'
author: 'Pietro L. Carotenuto'
excerpt: 'How many ways exist to initialize a std::vector in C++? Let''s see some examples...'
layout: post
guid: 'https://www.pietrolc.com/?p=4566'
permalink: /quick-cpp-vector-initialization/
inline_featured_image:
    - '0'
rank_math_seo_score:
    - '68'
rank_math_internal_links_processed:
    - '1'
rank_math_primary_category:
    - '680'
uag_style_timestamp-css:
    - '1622656590'
uag_style_timestamp-js:
    - '1622656590'
rank_math_focus_keyword:
    - 'vector initialization,fill constructor'
rank_math_analytic_object_id:
    - '42'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:7;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '7'
dpsp_networks_shares_last_updated:
    - '1670940013'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:0:{}'
wp_featherlight_disable:
    - ''
uag_migration_processed:
    - '1'
rank_math_title:
    - 'C++ std::vector initialization: Exploring fill constructor'
rank_math_description:
    - 'Learn multiple ways of initializing a std::vector in C++ with examples. For example, discover the fill constructor method.'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
image: /wp-content/uploads/2021/03/quick_vector_initialization.png.webp
categories:
    - 'Programming Languages'
tags:
    - C++
    - 'C++ programming'
    - 'STL containers'
---


> Initialization is the process of giving an object its first value. For objects generated from structs and classes, initialization is performed by constructors.
> — Scott Meyers – Effective C++ (3rd Edition)

The C++ vector can be initialized in different ways. This post provides basic examples of vector initialization ignoring all scenarios where the content of the new vector is copied from another array or container.

## Initialization using the vector fill constructor (identical values)

A [std::vector](https://www.cplusplus.com/reference/vector/vector/) can be initialized using the std::vector fill constructor if we need a vector containing *M elements that are all equal* to a given value or object.

Therefore, we can just construct our vector in this way:

```
#include <vector>
// myCnt will contain M integers equal to 0
std::vector myCnt(M, 0);
// myCnt2 will contain M integers equal to -5
std::vector myCnt2(M, -5);
```

## Filling a vector using the std::iota() function (increasing values)

The [std::iota()](http://www.cplusplus.com/reference/numeric/iota/) function is very useful when we need to fill a vector with an increasing group of values.

For easy of understanding, we can fill our vector with M integers equal to 0, 1, 2, … , M – 1 as shown in this example:

```
#include <vector>       // std::vector
#include <iostream>     // std::cout
#include <numeric>      // std::iota
int main() {
    std::vector<int> myCnt(20,0); // fill constructor -> real initialization
    std::iota(myCnt.begin(), myCnt.end(), -10);
    std::cout << "myCnt: ";
    for (int& i : myCnt) std::cout << ' ' << i;
    std::cout << std::endl;
    return 0;
}
```

This example will print the following output:

```
myCnt:  -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9
Press any key to continue . . .
```

The std::iota() does not allocate memory. For this reason, we need to construct the vector as shown previously.  
This function operates on a user-defined range and it overwrites already existing values with the new ones.

## Filling a vector using the std::generate() function (random values)

We can fill a vector using the function [std::generate()](http://www.cplusplus.com/reference/algorithm/generate/). For each element of the vector, this function executes a user-defined method to return (and assign) a certain object/value. For example, for each element of the vector, a random integer value can be returned and assigned to each vector element.

In the example below, we are *generating* a vector of values randomly chosen between 0 and 99:

```
#include <vector>
#include <iostream>     // std::cout
#include <algorithm>    // std::generate
#include <ctime>        // std::time
// This function returns a random number
int RandomNumber() { return (std::rand() % 100); }
int main() {
    // Vector fill constructor --> the real initialization
    std::vector<int> myCnt2(20); 
    // Overwriting the vector elements with random values
    std::generate(myCnt2.begin(), myCnt2.end(), RandomNumber);
    // Printing values
    std::cout << "myCnt2: ";
    for (int& i : myCnt2) std::cout << ' ' << i;
    std::cout << std::endl;
    return 0;
}
```

The function generator must accept no arguments and it should return the desired element type.

The code above will print something like (the *values are not guaranteed to be unique*.):

```
myCnt2:  78 63 38 71 65 69 83 83 1 16 26 30 59 12 19 60 46 1 60 90
Press any key to continue . . .
```

NOTE: Basing on the definition given by Scott Meyers, the procedures described in the last two sections cannot be seen as a pure initialization because the vector has been already *constructed* to contain a certain number of elements. The vector elements are assigned *after* this stage. For this reason, the term “filling” – rather than initialization – seems more correct to me.

How many ways do you know to initialize/fill a std::vector? Share your experience with us!