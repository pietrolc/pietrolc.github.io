---
id: 4786
title: 'Bad class design with STL containers: how-to fix it?'
date: '2021-11-14T22:23:05+01:00'
author: 'Pietro L. Carotenuto'
excerpt: 'A class must not inherit from a STL container to replicate its behavior and add some few new functionalities. Let''s see why...'
layout: post
guid: 'https://www.pietrolc.com/?p=4786'
permalink: /bad-class-design-inheritance-from-stl-container/
inline_featured_image:
    - '0'
rank_math_seo_score:
    - '70'
rank_math_internal_links_processed:
    - '1'
rank_math_primary_category:
    - '680'
rank_math_focus_keyword:
    - 'Bad class design'
rank_math_ca_keyword:
    - 'a:2:{s:7:"keyword";s:35:"stop inheriting from stl containers";s:7:"country";s:3:"all";}'
rank_math_contentai_score:
    - 'a:5:{s:9:"wordCount";s:4:"21.1";s:9:"linkCount";s:4:"6.67";s:12:"headingCount";s:2:"40";s:10:"mediaCount";s:1:"0";s:8:"keywords";s:5:"13.33";}'
rank_math_analytic_object_id:
    - '102'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:17;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '17'
dpsp_networks_shares_last_updated:
    - '1670943614'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
rank_math_title:
    - 'Bad class design example with STL containers %page% %sep% %sitename%'
rank_math_description:
    - 'A bad class design example is discussed in this post: a class inheriting from a STL container. The right approach is proposed and commented. '
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:0:{}'
wp_featherlight_disable:
    - ''
saswp_schema_type_product_pros_enable_cons:
    - '0'
uag_migration_processed:
    - '1'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
image: /wp-content/uploads/2021/11/stl-containers-inheritance.png.webp
categories:
    - 'Programming Languages'
tags:
    - C++
    - 'Class design'
    - 'STL containers'
---

The **STL containers** are largely used. Sometimes, they could be badly used. Let’s see an example for the **[std::queue](https://en.cppreference.com/w/cpp/container/queue)**.

## Design a class reusing methods from a STL Container

We want to implement a class that replicates or reuse the methods of a specific STL (Standard Template Library) container. In this post, I describe two possible approaches to solve this problem: in the former, a class inherits from a STL container (the dangerous class design); in the latter, a class “is made/composed of” the STL container (the correct class design).

### A bad class design example: a class inheriting *from* a STL container

When thinking to this problem, it is easier to think of designing a class that *directly inherits from the std::queue all of its functions*. In the derived class, then all the additional methods can be implemented.

For easy of understanding, let’s assume we need to implement our own *MyQueue* class. This class is expected to provide the same functionalities of the std::queue&lt;&gt; with some additional methods (for the goal of this article, we can ignore these methods).

The class design here below is for lazy programmers and it is – for some reasons I’m going to explain in this post – a bad approach.

```
template<typename T>
class MyQueue : public std::queue<T>
{
public:
    MyQueue();
    virtual ~MyQueue();
    void SomeAdditionalMethod(int x);
};
template<typename T>
MyQueue<T>::MyQueue()
{
    std::cout << "Constructor called" << std::endl;
}
template<typename T>
MyQueue<T>::~MyQueue()
{
    std::cout << "Destructor called" << std::endl;
}
template<typename T>
void MyQueue<T>::SomeAdditionalMethod(int x)
{
    // ...
}
```

Using this class, we can perform all operations offered by the std::queue ( e.g., push(), emplace(), size(), … ). We can also dynamically allocate our new class MyQueue.

```
int main()
{
    std::queue<int>* ptr = new MyQueue<int>();
    ptr->push(5);
    std::cout << ptr->size() << std::endl;
    delete ptr; // DANGER!
    return 0;
}
```

What’s the big mistake in the proposed code? Let’s run the program and check the console output:

```
Constructor called
1
Press any key to continue . . .
```

As you can see, the class destructor has not been called and – in my case – the code has crashed when destroying the MyQueue object instance. Why?

The answer is that the STL containers are not designed to be inheritable. No virtual methods, all data members are private, no protected getters or setters functions… and – above all – **no virtual class destructors** …

Actually, the destruction of the class instance leads to an undefined behaviour. Therefore, this class design is really dangerous!

### The correct class design: when the class *has* a STL container

Instead, we should really be using the containers via composition rather than implementation inheritance, in a “has-a” approach rather than an “is-a” one.

Let’s redesign the same example shown above.

```
template<typename T>
class MyGoodQueue
{
public:
    MyGoodQueue();
    virtual ~MyGoodQueue();
    void SomeAdditionalMethod(const int x);
    void push(const T& x);
    size_t size() const;
private:
    std::queue<T> q;
};
template<typename T>
MyGoodQueue<T>::MyGoodQueue()
{
    std::cout << "Constructor called" << std::endl;
}
template<typename T>
MyGoodQueue<T>::~MyGoodQueue()
{
    std::cout << "Destructor called" << std::endl;
}
template<typename T>
void MyGoodQueue<T>::SomeAdditionalMethod(int x)
{
    // ...
}
template<typename T>
void MyGoodQueue<T>::push(const T& x)
{
    q.push(x);
}
template<typename T>
size_t MyGoodQueue<T>::size() const
{
    return q.size();
}
```

Without any change to the main function code, could you see the difference when using the class defined above?

```
Constructor called
1
Destructor called
Press any key to continue . . .
```

### Conclusions

Inheriting from the STL containers is really a bad practice. Indeed, the class should “have” a container and not be designed to “be” a STL container. The main reason is that inheriting from the STL containers can lead to undefined behaviour because the STL containers are not designed to be inheritable.