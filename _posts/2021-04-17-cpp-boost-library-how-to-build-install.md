---
id: 4732
title: 'C++ Boost library v1.75.0 &#8211; how to build (x86) and install it &#8211; the basic approach'
date: '2021-04-17T13:16:09+02:00'
author: 'Pietro L. Carotenuto'
excerpt: 'Build, install and test the C++ Boost Library (v1.75.0): the basic approach step-by-step to build and install the 32 bit version.'
layout: post
guid: 'https://www.pietrolc.com/?p=4732'
permalink: /cpp-boost-library-how-to-build-install/
inline_featured_image:
    - '0'
rank_math_primary_category:
    - '682'
rank_math_seo_score:
    - '87'
rank_math_internal_links_processed:
    - '1'
rank_math_focus_keyword:
    - 'boost library,install boost,build boost'
uag_style_timestamp-css:
    - '1622701528'
uag_style_timestamp-js:
    - '1622701528'
rank_math_analytic_object_id:
    - '83'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:1;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '1'
dpsp_networks_shares_last_updated:
    - '1670940012'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:4:{i:0;s:13:"boost library";i:1;s:9:"boost lib";i:2;s:9:"c++ boost";i:3;s:12:"Install bost";}'
wp_featherlight_disable:
    - ''
rank_math_title:
    - 'C++ boost library: How-to build &amp; test it step-by-step'
uag_migration_processed:
    - '1'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
image: /wp-content/uploads/2021/04/c-boost-library.png.webp
categories:
    - 'How-to and tutorials'
tags:
    - 'boost library'
---

## What do you need to compile Boost?

In order to compile and install the Boost library, you must:

1. Download the boost library from official [Boost website](https://www.boost.org). You can download in your preferred format, e.g. zip file.
2. Install Microsoft Visual Studio 2015, 2017 or 2019 (if not already installed).

#### Why is important to check your Microsoft Visual studio version?

We have to build boost specifying which is the installed MS Visual Studio version, passing a specific parameter to the `booststrap.bat` script.
For MS Visual Studio 2019, this parameter is `vc142`. For the previous 2015 and 2017 versions, the parameter are `vc140 `and `vc141` respectively.

Let’s build boost v1.75.0

- Extract all files in the zip file to the destination folder (e.g., c:boost). A new sub-folder will be created depending on the boost version (in this case, the sub-folder is named “boost\_1\_75\_0”)
- Type “bootstrap vc142” (if you have installed MS Visual Studio 2019)

[![Type "bootstrap vc142" in the folder where you have extracted all files from boost zip archive](/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142.png)](/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142.png)
Now, we are ready to build using “.b2” command

[![Ready to start](/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142-ended.png)](https://www.pietrolc.com/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142-ended.png)
To build boost, type “.b2”

[![Let's type b2 command](https://www.pietrolc.com/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142-b2-build-command.png)](https://www.pietrolc.com/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142-b2-build-command.png) Patience… it’s building.. I suggest to watch a movie 🙂

[![The process requires a lot of patience](/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142-b2-building-patience.png)](/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142-b2-building-patience.png)
Boost C++ Libraries are successfully built!

### How to use boost with Visual Studio?

- Add the folder “c:\\boost\\boost\_1\_75\_0” to the compiler include paths
- Add the folder “c:\\boost\\boost\_1\_75\_0\\stage\\lib” to the linker library paths

[![c++ boost library built successfully](/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142-b2-built-successfully.png)](/wp-content/uploads/2021/04/Boost-1.75.0-bootstrap-vc142-b2-built-successfully.png)

#### Let’s test a basic example…

This code will produce a simple check failure for the test:

```
#define BOOST_TEST_ALTERNATIVE_INIT_API
#include <boost/test/included/unit_test.hpp>
#include <iostream>
BOOST_AUTO_TEST_CASE(test1)
{
    BOOST_TEST(false);
}
bool init_unit_test()
{
    std::cout << "using custom init" << std::endl;
    return true;
}
```

The console output will be:

```
using custom init
Running 1 test case...
C:/Users/UserPc/source/repos/FirstBoostTest/FirstBoostTest/FirstBoostTest.cpp(7): error: in "test1": check false has failed
*** 1 failure is detected in the test module "Master Test Suite"
```

As you have seen, the process to build and install boost 32-bit is not difficult. At each step, the instructions on how-to proceed are suggested.

### Install boost binaries only

If you are not interested building boost but just to *install boost,* then you can simply download them from [SourceForge](https://sourceforge.net/projects/boost/files/boost-binaries/). You can download boost binaries for all Microsoft Visual Studio versions or for a specific one.

If you have any question or you would like to contribute to this basic tutorial, feel free add your comment below.