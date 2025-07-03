---
id: 2576
title: 'C++ Lambda functions: typical usages'
date: '2020-03-22T16:52:57+01:00'
author: 'Pietro L. Carotenuto'
excerpt: 'C++ Lambda functions are largely used for many different purposes. In this post, 3 different examples are proposed to show classical usage of lambda functions.'
layout: post
guid: 'https://www.pietrolc.com/?p=2576'
permalink: /cpp-lambda-functions-usage/
rank_math_primary_category:
    - '680'
rank_math_description:
    - "Discover the versatility and power of C++ lambda functions with 3 practical examples. Enhance your coding skills now!\n\nLanguage: UK English"
rank_math_focus_keyword:
    - 'c++ lambda functions'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_facebook_image:
    - 'https://www.pietrolc.com/wp-content/uploads/2020/03/C-Lamba-functions-post.png'
rank_math_facebook_image_id:
    - '2616'
rank_math_internal_links_processed:
    - '1'
rank_math_analytic_object_id:
    - '62'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:22;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '22'
dpsp_networks_shares_last_updated:
    - '1670878811'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
rank_math_seo_score:
    - '70'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:0:{}'
wp_featherlight_disable:
    - ''
uag_migration_processed:
    - '1'
rank_math_title:
    - 'Master C++ Lambda Functions: 3 Powerful Examples'
rank_math_og_content_image:
    - 'a:2:{s:5:"check";s:32:"e31912c66399fd5999d72b84e5cdc878";s:6:"images";a:1:{i:0;i:74275;}}'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
categories:
    - 'Programming Languages'
tags:
    - 'C++ programming'
image:
    - '/wp-content/uploads/2020/03/C-Lamba-functions-post.png.webp'
---

![C++ Lambda functions can be used to do potentially whatever is needed.]({{ '/wp-content/uploads/2020/03/C-Lambda-functions-do-whatever-you-want.png.webp' | absolute_url }})

## C++ Lambda Functions Usage

C++ Lambda functions are largely used for many different purposes.

As explained in this [C++ Reference](https://en.cppreference.com/w/cpp/language/lambda) document, a C++ Lambda function constructs a *[closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)).* Using lambda functions, it is possible to store a function together with its environment.

Most used form of a C++ Lambda function is highlighted in the following example:

```cpp
#include "stdafx.h"
#include <iostream>
int main()
{
    auto isEven = [ & ]( const int value )->bool
    { 
        return value % 2 == 0; 
    };
    std::cout << "Is 11 an even number? " 
        << ( isEven( 11 ) ? "TRUE" : "FALSE" ) 
        << std::endl;
    return 0;
}
```

Output:

```cmd
Is 11 an even number? FALSE
Press any key to continue . . .
```

The \[\] characters define the *captured variables*. These variables can be accessed from the lambda functions as copies of the original value or by reference (using &amp; character). These variables are optional and they can be defined in any order.

The () characters enclose the input arguments of the function. The list of parameters are optional too.

The type following the “-&gt;” indicate the trailing return-type.

C++ Lambda functions can throw exceptions too.

Given this short introduction, some examples of lambda functions usage is provided in the following sections.

### 1) Initialize a class member variable

```cpp
#include "stdafx.h"
#include <iostream>
#include <vector>
// lambda function used to initialize a vector
auto setValues = []()->std::vector<int>
{
    std::vector<int> tmp{};
    for (int i = 0; i < 10; i++)
    {
        tmp.emplace_back(i);
    }
    return tmp;
};
class SomeClass
{
public:
    SomeClass()
        : m_data(setValues()) {}
    void print()
    {
        for (int v : m_data)
        {
            std::cout << v << std::endl;
        }
    }
private:
    const std::vector<int> m_data;
};
int main()
{
    SomeClass myClass; // create a class instance
    myClass.print();   // print vector values
    return 0;
}
```

Output:

```cmd
0
1
2
3
4
5
6
7
8
9
Press any key to continue . . .
```

In this example, a vector is initialized using a lambda function. Generally, lambda functions are used to initialize more complex data and help to implement more readable code.

### 2) Call a member function of class 2 from inside the member function of the class 1

In this example, the lambda function includes only one call to a member function of the class “OtherFilterManager”.

```cpp
#include "stdafx.h"
#include <iostream>
#include <set>
#include <string>
#include <functional>
struct Item
{
    int num;
    std::string msg;
};
class OtherFilterManager
{
public:
    OtherFilterManager() 
        : m_validInt{1,2,3,4,5}
    {
    }
    bool pass(const Item& el)
    {
        return m_validInt.end() != m_validInt.find(el.num);
    }
private:
    const std::set<int> m_validInt;
};
class FilterManager
{
public:
    void printMsgIfCheckPasses(
        const Item& el,
        const std::function<bool(const Item& obj)>& passFn
    )
    {
        if (!el.msg.empty())
        {
            if (passFn(el))
            {
                std::cout << el.msg << std::endl;
            }
            else
            {
                std::cout << "Cannot print msg since "
                    "other check failed" << std::endl;
            }
        }
        else
        {
            std::cout << "Message is empty" << std::endl;
        }
    }
};
int main()
{
    Item invalidItem{ 100, "This message is not "
        "printed because 100 is invalid"};
    Item invalidItem2{ 1, "" }; // Empty message 
                                // cannot be printed
    Item validItem{ 2, "This message is printed" };
    FilterManager fltMngr1; // first filter manager
    OtherFilterManager fltMngr2; // second filter manager
    // Lambda function
    auto checkSecondFilter = [&fltMngr2](const Item& obj)
    {
        /*
            Also additional tasks can be executed
            in this lambda function before checking
            the additional type of filters,
            e.g., increase a counter parameter.
        */
        return fltMngr2.pass(obj);
    };
    // Checking this item cannot print any message
    fltMngr1.printMsgIfCheckPasses( 
        invalidItem, 
        checkSecondFilter
    );
    // Checking this item cannot print any message
    fltMngr1.printMsgIfCheckPasses( 
        invalidItem2, 
        checkSecondFilter 
    );
    // Checking this item can print a message
    fltMngr1.printMsgIfCheckPasses( 
        validItem,
        checkSecondFilter
    );
    return 0;
}
```

Console output:

```cmd
Cannot print msg since other check failed
Message is empty
This message is printed
Press any key to continue . . .
```

If only this member function is called, then it might be obvious to replace, in the declaration of the function “printMsgIfCheckPasses()”, the function parameter “passFn” with an abstract class parameter (e.g., “OtherFilterManagerInterface” ). Then, a specific method can be called from inside the member function “printMsgIfCheckPasses()” to check if the integer is valid or not. Indeed, that’s another solution too.

Nevertheless, the lambda function can be used to perform additional tasks too, e.g., increase a counter value, perform other checks and complex actions. In some extent, they can be used to also mock the member function when testing the implemented code and return a desired value or throw an exception.

In addition, using the lambda function, the “FilterManager” class does not need to know about the existence of the class “OtherFilterManager”. Also, the lambda function can *capture* local variables. In this way, the behavior of the lambda function depends on the values of the captured variables too.

### 3) Define custom tasks

The previous example can be easily modified to use lambda functions to execute customized tasks, without necessarily returning any data to the caller function.

```cpp
#include "stdafx.h"
#include <iostream>
#include <set>
#include <string>
#include <functional>
struct Item
{
    int num;
    std::string msg;
};
class OtherFilterManager
{
public:
    OtherFilterManager() 
        : m_validInt{1,2,3,4,5}
    {
    }
    bool pass(const Item& el)
    {
        return m_validInt.end() != m_validInt.find(el.num);
    }
private:
    const std::set<int> m_validInt;
};
class FilterManager2
{
public:
    FilterManager2() {}
    void printMsgIfCheckPasses(
        const Item& el,
        const std::function<void(const Item& obj)>& passFn,
        const std::function<void(const Item& obj,
                                 const std::string& msg 
                                )>& rejectFn
    )
    {
        std::string myMsgOnFailure{ 
             "Custom message on Failure!" };
        if (!el.msg.empty())
        {
            passFn(el);
        }
        else
        {
            rejectFn(el, myMsgOnFailure );
        }
    }
};
int main()
{
    Item invalidItem{ 1, "" }; // Empty message 
                                // cannot be printed
    Item validItem{ 2, "This message is printed" };
    OtherFilterManager fltMngr;
    FilterManager2 fltMngr2;
    auto checkIntegerValidity = [&fltMngr2](const Item& obj)
    {
        if (fltMngr2.pass(obj))
            std::cout << "Valid integer ( "<< obj.num << " )" << std::endl;
    };
    bool printNumber = false;
    auto onReject = [&](const Item& obj,
                        const std::string& msgToPrint)
    {
        std::cout << msgToPrint << std::endl;
        if (printNumber) 
        {
            std::cout << "Integer "
                         "is: " << obj.num << std::endl;
        }
        else // printNumber is false
        {
            std::cout << "Integer "
            "is not printed." << std::endl;
        }
    };
    // Checking validity of this item
    fltMngr2.printMsgIfCheckPasses(
        invalidItem,
        checkIntegerValidity,
        onReject
    );
    // Checking validity of this item
    fltMngr2.printMsgIfCheckPasses(
        validItem,
        checkIntegerValidity,
        onReject
    );
    return 0;
}
```

Console output:

```cmd
Custom message on Failure!
Integer is not printed.
Valid integer ( 2 )
Press any key to continue . . .
```

The behavior of the lambda function “onReject()” depends on the value of the captured variable “printNumber” and also on values of the string variable “myMsgOnFailure” defined inside the caller member function itself ( please, check lines 74-90 highlighted in the example above ).

The message defined by the variable “myMsgOnFailure” can be only accessed from inside the class member function. In other words, the lambda function behavior depends on a string value that only exists inside a class.

This example is a starting point for an important consideration: the lambda functions can be used to access data that are private to a certain class “A” only. The data in the class “A” might be required to manipulate data in other classes (“B”, “C”, “Foo”, “Bar”,…).

Using Lambda functions, copying the (private) data from inside the class “A” to be used it in other parts of your code can be easily avoided. In fact, the lambda function can include calls to some member functions of the classes “B” and “Foo” that accept – as input arguments – the data private to the class “A” (similarly to the lambda function “onReject”).

For easy of understanding, please consider the following snippet of code:

```cpp
    class B
    {
    public:
        // ... other stuff
        void incrementValueAtIndex(const int index);
        void decrementValueAtIndex(const int index);
    };
    B instance1;
    // my great lambda function :)
    auto myLambda = [&](const bool valid,
                        const int privateDataFromA )
    {
        if (valid)
        {
            instance1.incrementValueAtIndex(privateDataFromA);
        }
        else
        {
            instance1.decrementValueAtIndex(privateDataFromA);
        }
    };
    class A
    {
        // Other stuff
        // This function is called when an item is added
        void onAddItem(
            const Item& el,
            const std::function<void(const bool valid, const int index)>& myFn
        )
        {
            /*
             Other stuff...
            */
            myFn( !el.msg.empty(), el.num );
        }
    };
```

In this way, there are three important consequences:

- if no copy occurs, there is *no loss of performance*
- since data is defined in one place only, then there is *no risk of data inconsistency.*
- the code design is simpler and neater.

### Final thoughts

In this article, three different examples have been proposed to show some Lambda functions usage. In C++, the Lambda functions are a sort of *Swiss Army knife.* They can be used in many situations to perform any kind of action, e.g., to access some data that are private to a specific class only and process them in other parts of the code ensuring data consistency and avoiding any loss of performance.