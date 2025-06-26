---
id: 3153
title: 'Understanding #pragma pack(push,n) / pack(pop)'
date: '2020-07-11T17:56:19+02:00'
author: 'Pietro L. Carotenuto'
excerpt: 'The directive #pragma pack is used to change the current packing alignment value on the internal compiler stack and  how data is stored inside a structure.'
layout: post
guid: 'https://www.pietrolc.com/?p=3153'
permalink: /pragma-pack-push-pop/
rank_math_primary_category:
    - '680'
rank_math_description:
    - 'Learn how to use #pragma pack to optimize data storage alignment in C/C++ structures.  Let''s check pros &amp; cons.'
rank_math_focus_keyword:
    - 'pragma pack'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_internal_links_processed:
    - '1'
rank_math_analytic_object_id:
    - '55'
rank_math_seo_score:
    - '72'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:43;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '43'
dpsp_networks_shares_last_updated:
    - '1670903537'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:1:{i:0;s:13:"|#pragma pack";}'
wp_featherlight_disable:
    - ''
uag_migration_processed:
    - '1'
rank_math_title:
    - '#pragma pack: Optimizing Data Storage Alignment'
rank_math_facebook_title:
    - 'Mastering #pragma pack to achieve optimal data storage Alignment'
rank_math_facebook_description:
    - 'Dive deep into the world of #pragma pack and discover how to achieve maximum performance through precise data storage alignment in C/C++ structures. This technical blog post is a must-read for professionals seeking to optimize their code and enhance overall efficiency. #pragma pack your knowledge and take control of data storage alignment today.'
rank_math_twitter_use_facebook:
    - 'off'
rank_math_twitter_title:
    - 'Unlocking Performance with #pragma pack: Optimizing Data Storage Alignment'
rank_math_twitter_description:
    - "Delve into the world of #pragma pack and discover how to leverage this powerful tool to optimize data storage alignment for improved performance in C/C++ structures. Gain insights into the benefits of proper packing and learn how to fine-tune your code for maximum efficiency. Boost your C/C++ programming skills now!\n\nLanguage: UK English"
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
image: /wp-content/uploads/2020/07/pragma_pack_push_pop.png.webp
categories:
    - 'Programming Languages'
tags:
    - C++
    - 'C++ programming'
    - compiler
---

## Why using #pragma pack?

The directive `#pragma pack` is used to change the current packing alignment value on the internal compiler stack. The packing alignment affects how data is being stored inside a structure, union, or a class.

### Using different packing values for two structures

In order to show the effect of the `pragma pack`, let’s consider the following code:

```
#include <iostream>
#include <type_traits>

// No pragma pack directive is being used for struct A
struct A
{
    char c;
    int n;
    double d;
};

#pragma pack(push,1)
struct B
{
    char c;
    int n;
    double d;
};
#pragma pack(pop)

int main()
{
    A foo;
    B bar;
    // Let's store the same data for "foo" and "bar"
    foo.c = 'A';
    foo.n = 0x12345678;
    foo.d = 0.89898989;
    bar.c = 'A';
    bar.n = 0x12345678;
    bar.d = 0.89898989;
    std::cout << "alignment_of<A>: " << std::alignment_of<A>::value << std::endl;
    std::cout << "alignment_of<B>: " << std::alignment_of<B>::value << std::endl;
    std::cout << "sizeof(A): " << sizeof(foo) << std::endl;
    std::cout << "sizeof(B): " << sizeof(bar) << std::endl;
    // code to print data stored in "foo" and "bar" structures
}
```

Which is the effect of the directives *\#pragma pack(push,1)* on the structure of type “B”? Which is the effect of *\#pragma pack(pop)*?

As explained in the [Microsoft documentation](https://docs.microsoft.com/en-us/cpp/preprocessor/pack?view=vs-2019), *\#pragma* can be used to push or to pop the current packing alignment value on the internal compiler stack.

In the example above, the compiler uses the one byte packing for B. A different value *n* can be chosen too. The permitted values for *n* are: 1, 2, 4, 8 and 16.

If this directive is not specified, then the compiler builds the code using the default packing alignment.

#### Quick question for you!

If the explanation is clear, which is then the expected output of the code in the example above?

If we run the code, then the following text is printed on the console:

```
alignment_of<A>: 8
alignment_of<B>: 1
sizeof(A): 16
sizeof(B): 13
```

The compiler is using 8 bytes packing for the structure “foo” and, as requested, the 1 byte packing for the structure “bar”.

The effect of and *\#pragma pack(pop)* is to restore the default compiler packing for the code following the declaration of the structure B.

If the memory data values are printed for both “foo” and “bar”, which values are expected to be printed?

Please, find the console output here below:

```
foo: 41 cc cc cc 78 56 34 12 26 82 1f 72 86 c4 ec 3f     // 8 byte packing
    ^-----------------------^-----------------------^
bar: 41 78 56 34 12 26 82 1f 72 86 c4 ec 3f              // 1 byte packing
    ^--^--^--^--^--^--^--^--^--^--^--^--^--^
```

As you can see, 3 bytes in the structure “foo” are completely unused. The value of these unused memory location is set to `0xcc`.

Instead, for the second variable that occupies only 13 bytes, there are no unused memory locations.

### Pro and cons

The usage of the #pragma pack directive reduces the amount of memory used to store data inside structures, union, …

Unfortunately, as side effect, a decrease in performance or also a hardware-generated exception for unaligned access might occur. In order to handle these exceptions, the function *SetErrorMode()* should be called with the input mode parameter equal to **SEM\_NOALIGNMENTFAULTEXCEPT**.