---
id: 4499
title: 'Finding min and max values in a C++ standard container'
date: '2021-03-24T18:29:49+01:00'
author: 'Pietro L. Carotenuto'
excerpt: 'How-to use C++ functions min_element() and max_element() to find the elements having the lowest and highest value in a container.'
layout: post
guid: 'https://www.pietrolc.com/?p=4499'
permalink: /find-min-and-max-values-cpp-container/
inline_featured_image:
    - '0'
rank_math_seo_score:
    - '71'
rank_math_internal_links_processed:
    - '1'
uag_style_timestamp-js:
    - '1619445349'
rank_math_primary_category:
    - '680'
rank_math_focus_keyword:
    - 'min,max,min_element,max_element'
uag_style_timestamp-css:
    - '1616867073'
rank_math_analytic_object_id:
    - '43'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:1;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '1'
dpsp_networks_shares_last_updated:
    - '1670929213'
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
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
image: /wp-content/uploads/2021/03/find_min_max_cpp-e1616842551751.png.webp
categories:
    - 'Programming languages'
tags:
    - 'C++ programming'
    - 'STL containers'
---

Finding the minimum and maximum values is one of the first topics for software developers.

In C++, we can call the functions [min\_element()](https://www.cplusplus.com/reference/algorithm/min_element/) and [max\_element()](https://www.cplusplus.com/reference/algorithm/max_element/) to find the elements having respectively the lowest or the highest value in a standard container. These functions belong to the standard **std::algorithm** library.

If you are interested to learn a nice solution to find – in few code lines – the minimum value or the maximum value of a list (without creating a new loop), this article is for you!

For easy of understanding, we can be interested to retrieve not just the smallest or the largest integer of a list, but – for example – also the element having the highest score, priority… *or* the lowest ID.

The functions [min\_element()](https://www.cplusplus.com/reference/algorithm/min_element/) and [max\_element()](https://www.cplusplus.com/reference/algorithm/max_element/) can help us to achieve this goal.

## Min\_element() and max\_element()

These functions requires the input iterators to the initial and final positions of the sequence of *elements* to compare.

The type of the *element* can be any of your choice! The most important thing is that you know how the elements stored in the container should be compared among them. If you know how to compare them, you can get the element with highest and lowest value/score.

The functions min\_element() and max\_element() can process any array/vector/list of elements and **return an iterator to the position** storing the minimum or maximum value respectively. If the container is empty, then the iterator to the end of the container is returned (i.e., *myContainer.end()*)

A custom comparator function can be specified to compare any custom objects in the used container.

Now, let’s have a look into some example code.

## Finding the minimum *or* the maximum value in C++

In this basic example, we search for the lowest and the largest value of a list of integers. It is obvious how to compare integers values, but we can change the way the integers are compared specifying a custom comparator function or class/struct overloading the operator “()”.

```cpp
#include <iostream>     // std::cout
#include <list>         // My standard container
#include <algorithm>    // std::min_element, std::max_element
bool myfn(int i, int j) { return i<j; }
struct myclass {
    bool operator() (int i, int j) { return i<j; }
} myobj;
int main() {
    std::list<int> myContainer{ 20, 10, 100, 40, 60, 80, 50  };
    // using default comparison:
    auto it_min = std::min_element(myContainer.cbegin(), myContainer.cend());
    auto it_max = std::max_element(myContainer.cbegin(), myContainer.cend());
    std::cout << "The smallest integer is " << *it_min << std::endl;
    std::cout << "The largest integer is " << *it_max << std::endl;
    // using function myfn as comp:
    auto it_min2 = std::min_element(myContainer.cbegin(), myContainer.cend(), myfn);
    auto it_max2 = std::max_element(myContainer.cbegin(), myContainer.cend(), myfn);
    std::cout << "The smallest integer is " << *it_min2 << std::endl;
    std::cout << "The largest integer is " << *it_max2 << std::endl;
    // using object myobj as comp:
    auto it_min3 = std::min_element(myContainer.cbegin(), myContainer.cend(), myobj);
    auto it_max3 = std::max_element(myContainer.cbegin(), myContainer.cend(), myobj);
    std::cout << "The smallest integer is " << *it_min3 << std::endl;
    std::cout << "The largest integer is " << *it_max3 << std::endl;
    return 0;
}
```

Very simple! We can use the returned iterators where needed, unless they become invalid.

## Min\_element() and max\_element() with a custom class

Let’s use min\_element() and max\_element() functions with a custom class:

```cpp
#include <iostream>     // std::cout
#include <vector>       // storing tasks in a vector
#include <algorithm>    // std::min_element, std::max_element

struct JobTask
{
    int ID;
    int priority; // we are interested to the highest and lowest priority tasks
    bool operator<(JobTask& a) { return priority < a.priority; }
};

bool myfn(const JobTask& a, const JobTask& b) { return a.ID < b.ID; }

int main() {
    std::vector<JobTask> myContainer(10);
    // init the vector of 10 elements
    for (int i = 0; i < 10; i++)
    {
        myContainer[i].ID = i * 2;
        myContainer[i].priority = 20 - 2 * i;
    }
    // using default comparison:
    auto it_min = std::min_element(myContainer.begin(), myContainer.end() );
    auto it_max = std::max_element(myContainer.begin(), myContainer.end() );
    std::cout << "The lowest priority is " << it_min->priority << 
        " at position " << std::distance(myContainer.begin(), it_min)  << std::endl;
    std::cout << "The highest priority is " << it_max->priority <<
        " at position " << std::distance(myContainer.begin(), it_max) << std::endl;
    // using function myfn as comp:
    auto it_min2 = std::min_element(myContainer.begin(), myContainer.end(), myfn);
    auto it_max2 = std::max_element(myContainer.begin(), myContainer.end(), myfn);
    std::cout << "The lowest ID is " << it_min2->ID <<
        " at position " << std::distance(myContainer.begin(), it_min2) << std::endl;
    std::cout << "The largest ID is " << it_max2->ID <<
        " at position " << std::distance(myContainer.begin(), it_max2) << std::endl;
    return 0;
}
```

Have you noticed the operator overload at line 10? We need to specify the sorting criteria to compare the elements of type *JobTask*.

## Getting both min and max values at the same time in C++

There is more! In C++, the minimum and maximum value in a container can be found in a single line of code using the [std::minmax\_element()](https://www.cplusplus.com/reference/algorithm/minmax_element/) function!

```cpp

#include <iostream>     // std::cout
#include <vector>       // storing tasks in a vector
#include <algorithm>    // std::min_element, std::max_element, std::minmax_element

struct JobTask
{
    int ID;
    int priority; // we are interested to the highest and lowest priority tasks
    bool operator<(JobTask& a) { return priority < a.priority; }
};

bool myfn(const JobTask& a, const JobTask& b) { return a.ID < b.ID; }

int main() {

    std::vector<JobTask> myContainer(10);
    // init the vector of 10 elements
    for (int i = 0; i < 10; i++)
    {
        myContainer[i].ID = i * 2;
        myContainer[i].priority = 20 - 2 * i;
    }
    // using default comparison:
    auto it = std::minmax_element(myContainer.begin(), myContainer.end());
    std::cout << "The lowest priority is " << it.first->priority <<
        " at position " << std::distance(myContainer.begin(), it.first) << std::endl;
    std::cout << "The highest priority is " << it.second->priority <<
        " at position " << std::distance(myContainer.begin(), it.second) << std::endl;
    // using function myfn as comp:
    auto it2 = std::minmax_element(myContainer.begin(), myContainer.end(), myfn);
    std::cout << "The lowest ID is " << it2.first->ID <<
        " at position " << std::distance(myContainer.begin(), it2.first) << std::endl;
    std::cout << "The largest ID is " << it2.second->ID <<
        " at position " << std::distance(myContainer.begin(), it2.second) << std::endl;
    return 0;
    
}
```

The function **std::minmax\_element()** is similar to the functions above described. The main difference is that this function returns a *pair* of iterators rather than a single one. The first iterator points to the element having the minimum value, while the second iterator points to the element having the maximum value.

Have you ever used these functions? Feel free to share your experience with us!