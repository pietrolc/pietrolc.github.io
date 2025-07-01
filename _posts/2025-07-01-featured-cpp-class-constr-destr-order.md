---
layout: post
author: 'Pietro L. Carotenuto'
title: C++ Object Construction and Destruction Order Challenge
date: 2025-07-01 10:35:29 +0200
categories: [Coding Challenges]
tags: ['C++', 'Class Hierarchy']
featuredPost: true
excerpt: "Can you predict the exact order of construction / destruction of these classes? Which is the console output?"
permalink: '/cpp-object-construction-destruction-order/'
---

## The Challenge: determine the complete output

Understanding the precise order in which objects are constructed and destroyed in C++ is crucial for writing robust and bug-free code, especially when dealing with inheritance and member objects. This challenge presents a simple class hierarchy and composition scenario. Your task is to predict the exact output when the provided C++ program is executed.

Consider the following C++ code:

```cpp
#include <iostream>

class A {
public:
    A() { std::cout << "+A" << std::endl; }
    ~A() { std::cout << "-A" << std::endl; }
};

class B {
public:
    B() { std::cout << "+B" << std::endl; }
    ~B() { std::cout << "-B" << std::endl; }
};

class D
{
public:
    D() { std::cout << "+D" << std::endl; }
    ~D() { std::cout << "-D" << std::endl; }
};

class C : A {
private:
    const B b;
    D d;

public:
    C() : d(), b() { std::cout << "+C" << std::endl; }
    ~C() { std::cout << "-C" << std::endl; }
};

int main(int argc, char* argv[]) {
    C c_instance;
    std::cout << "End of main" << std::endl;
    return 0;
}

```

---

Without running the code, determine the complete output that will be printed to the console from the moment c_instance is created until the program exits.

### The Solution

Please, find the commented code and solution on <a href="https://github.com/pietrolc/ClassHierarchyChecks01" target="_blank">my Github repo.</a>

### Hint

Pay close attention to:

* The order of construction for base classes.
* The order of construction for member objects.
* The order in which member objects are declared within the class.
* The order of destructors, which is always the reverse of construction.
