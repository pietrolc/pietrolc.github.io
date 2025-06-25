---
id: 2898
title: 'Enum type size: how to determine it?'
date: '2020-04-20T17:37:59+02:00'
author: 'Pietro L. Carotenuto'
excerpt: 'Size of the enum type: can you answer to this C++ quiz?'
layout: post
guid: 'https://www.pietrolc.com/?p=2898'
permalink: /enum-type-size/
rank_math_primary_category:
    - '680'
rank_math_description:
    - 'Take the C++ quiz to uncover the secrets behind the enum type size and understand the factors that impact it.'
rank_math_focus_keyword:
    - 'enum type size'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_internal_links_processed:
    - '1'
rank_math_seo_score:
    - '58'
rank_math_analytic_object_id:
    - '57'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:4;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '4'
dpsp_networks_shares_last_updated:
    - '1670940010'
wp_featherlight_disable:
    - 'yes'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:1:{i:0;s:12:"Size of enum";}'
uag_migration_processed:
    - '1'
rank_math_title:
    - 'Exploring the Factors that Influence the Enum Type Size'
rank_math_facebook_title:
    - 'Unveiling the Size of the Enum: Exploring Factors that Influence Enum Type Size'
rank_math_facebook_description:
    - "Take our C++ Quiz to unravel the mysteries behind the size of the enum type. Discover the key factors that impact the size of enums and gain a deeper understanding of this crucial aspect of C++ programming. Perfect for professionals seeking technical insights. Boost your knowledge today!\n\nLanguage: UK English"
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
categories:
    - 'Programming Languages'
tags:
    - 'C++ programming'
    - 'Data Structures'
image: '/wp-content/uploads/2020/04/cpp-enum-type-sizeof-blue-shapes.jpg.webp'
---

Definition of the “enum” type:

> An *enumeration* is a distinct type whose value is restricted to a range of values (see below for details), which may include several explicitly named constants (“*enumerators*“). The values of the constants are values of an integral type known as the *underlying type* of the enumeration.
> 
> <cite>[CppReference.com](https://en.cppreference.com/w/cpp/language/enum)</cite>

## Size of the *enum* type

If you have read carefully the definition of the *enum type*, then it should be easy for you to provide the correct answer to the following problem:

```
#include <iostream>
enum foo
{
    typeA = 0,
    typeB,
    typeC
};
enum bar : typename uint64_t
{
    typeD = 0,
    typeE,
    typeF
};
int main()
{
    std::cout << "Size of <foo> type variable: " << sizeof(foo) << " bytes" << std::endl;
    std::cout << "Size of <bar> type variable: " << sizeof(bar) << " bytes" << std::endl;
    return 0;
}
```

### Which is the calculated size of the enum type?

Please, find the correct answer below:

```
Size of <foo> type variable: 4 bytes
Size of <bar> type variable: 8 bytes
Press any key to continue . . .
```
