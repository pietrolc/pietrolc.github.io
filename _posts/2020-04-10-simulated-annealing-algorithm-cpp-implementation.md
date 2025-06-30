---
id: 2814
title: 'A C++ implementation of the Simulated Annealing algorithm'
date: '2020-04-10T16:31:18+02:00'
author: 'Pietro L. Carotenuto'
excerpt: 'In this article, the C++ code implementation of the "More Pizza" algorithm is provided and commented. The complete source file is available. '
layout: post
guid: 'https://www.pietrolc.com/?p=2814'
permalink: /simulated-annealing-algorithm-cpp-implementation/
rank_math_primary_category:
    - '681'
rank_math_description:
    - 'Explore a detailed C++ implementation of the Simulated Annealing algorithm to efficiently solve the More Pizza problem. Ideal for professionals.'
rank_math_focus_keyword:
    - 'simulated annealing algorithm'
rank_math_facebook_title:
    - '"More Pizza" problem: C++ code solution'
rank_math_facebook_description:
    - 'In this article, the C++ code implementation of the "More Pizza" algorithm is provided and commented. The complete source file is available.'
rank_math_twitter_title:
    - '"More Pizza" problem: C++ code solution'
rank_math_twitter_description:
    - 'In this article, the C++ code implementation of the "More Pizza" algorithm is provided and commented. The complete source file is available.'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_twitter_use_facebook:
    - 'off'
rank_math_internal_links_processed:
    - '1'
rank_math_analytic_object_id:
    - '60'
rank_math_seo_score:
    - '81'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:16;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '16'
dpsp_networks_shares_last_updated:
    - '1670932811'
blocksy_post_meta_options:
    - 'a:57:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}s:16:"post_title_panel";s:0:"";s:16:"has_hero_section";s:7:"default";s:32:"28af7d0de67f4441964de86eb63f2090";s:0:"";s:12:"hero_section";s:6:"type-1";s:13:"hero_elements";a:4:{i:0;a:4:{s:2:"id";s:12:"custom_title";s:7:"enabled";b:1;s:11:"heading_tag";s:2:"h1";s:5:"title";s:4:"Home";}i:1;a:3:{s:2:"id";s:18:"custom_description";s:7:"enabled";b:1;s:22:"description_visibility";a:3:{s:7:"desktop";b:1;s:6:"tablet";b:1;s:6:"mobile";b:0;}}i:2;a:4:{s:2:"id";s:11:"custom_meta";s:7:"enabled";b:1;s:13:"meta_elements";a:5:{i:0;a:5:{s:2:"id";s:6:"author";s:7:"enabled";b:1;s:5:"label";s:2:"By";s:17:"has_author_avatar";s:3:"yes";s:11:"avatar_size";i:25;}i:1;a:5:{s:2:"id";s:9:"post_date";s:7:"enabled";b:1;s:5:"label";s:2:"On";s:18:"date_format_source";s:7:"default";s:11:"date_format";s:6:"M j, Y";}i:2;a:5:{s:2:"id";s:12:"updated_date";s:7:"enabled";b:0;s:5:"label";s:2:"On";s:18:"date_format_source";s:7:"default";s:11:"date_format";s:6:"M j, Y";}i:3;a:4:{s:2:"id";s:10:"categories";s:7:"enabled";b:1;s:5:"label";s:2:"In";s:5:"style";s:6:"simple";}i:4;a:2:{s:2:"id";s:8:"comments";s:7:"enabled";b:1;}}s:18:"page_meta_elements";a:3:{s:6:"joined";b:1;s:14:"articles_count";b:1;s:8:"comments";b:1;}}i:3;a:2:{s:2:"id";s:11:"breadcrumbs";s:7:"enabled";b:0;}}s:32:"44e92dd6437bf100324910f22646f253";s:0:"";s:15:"hero_alignment1";s:16:"CT_CSS_SKIP_RULE";s:11:"hero_margin";i:40;s:15:"hero_alignment2";s:6:"center";s:23:"hero_vertical_alignment";s:6:"center";s:32:"e9bf163a91917d3332ed17931b67d282";s:0:"";s:14:"hero_structure";s:6:"narrow";s:32:"4f013b1f4d1c6d061f72443ded5770af";s:0:"";s:18:"page_title_bg_type";s:14:"featured_image";s:22:"custom_hero_background";a:1:{s:13:"attachment_id";N;}s:21:"page_title_image_size";s:4:"full";s:8:"parallax";a:3:{s:7:"desktop";b:0;s:6:"tablet";b:0;s:6:"mobile";b:0;}s:32:"aca41272331441917f9c83f00316fff8";s:0:"";s:11:"hero_height";s:5:"250px";s:13:"pageTitleFont";a:7:{s:6:"family";s:7:"Default";s:9:"variation";s:7:"Default";s:4:"size";s:4:"30px";s:11:"line-height";s:16:"CT_CSS_SKIP_RULE";s:14:"letter-spacing";s:16:"CT_CSS_SKIP_RULE";s:14:"text-transform";s:16:"CT_CSS_SKIP_RULE";s:15:"text-decoration";s:16:"CT_CSS_SKIP_RULE";}s:18:"pageTitleFontColor";a:1:{s:7:"default";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}}s:12:"pageMetaFont";a:7:{s:6:"family";s:7:"Default";s:9:"variation";s:2:"n6";s:4:"size";s:4:"12px";s:11:"line-height";s:3:"1.3";s:14:"letter-spacing";s:16:"CT_CSS_SKIP_RULE";s:14:"text-transform";s:9:"uppercase";s:15:"text-decoration";s:16:"CT_CSS_SKIP_RULE";}s:17:"pageMetaFontColor";a:2:{s:7:"default";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}s:5:"hover";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}}s:33:"page_meta_button_type_font_colors";a:2:{s:7:"default";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}s:5:"hover";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}}s:39:"page_meta_button_type_background_colors";a:2:{s:7:"default";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}s:5:"hover";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}}s:15:"pageExcerptFont";a:7:{s:6:"family";s:7:"Default";s:9:"variation";s:7:"Default";s:4:"size";s:16:"CT_CSS_SKIP_RULE";s:11:"line-height";s:16:"CT_CSS_SKIP_RULE";s:14:"letter-spacing";s:16:"CT_CSS_SKIP_RULE";s:14:"text-transform";s:16:"CT_CSS_SKIP_RULE";s:15:"text-decoration";s:16:"CT_CSS_SKIP_RULE";}s:16:"pageExcerptColor";a:1:{s:7:"default";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}}s:15:"breadcrumbsFont";a:7:{s:6:"family";s:7:"Default";s:9:"variation";s:7:"Default";s:4:"size";s:16:"CT_CSS_SKIP_RULE";s:11:"line-height";s:16:"CT_CSS_SKIP_RULE";s:14:"letter-spacing";s:16:"CT_CSS_SKIP_RULE";s:14:"text-transform";s:16:"CT_CSS_SKIP_RULE";s:15:"text-decoration";s:16:"CT_CSS_SKIP_RULE";}s:20:"breadcrumbsFontColor";a:3:{s:7:"default";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}s:7:"initial";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}s:5:"hover";a:1:{s:5:"color";s:23:"CT_CSS_SKIP_RULEDEFAULT";}}s:16:"pageTitleOverlay";a:10:{s:15:"background_type";s:5:"color";s:18:"background_pattern";s:6:"type-1";s:16:"background_image";a:3:{s:13:"attachment_id";N;s:1:"x";i:0;s:1:"y";i:0;}s:8:"gradient";s:65:"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)";s:17:"background_repeat";s:6:"repeat";s:15:"background_size";s:4:"auto";s:21:"background_attachment";s:6:"scroll";s:12:"patternColor";a:1:{s:7:"default";a:1:{s:5:"color";s:7:"#e5e7ea";}}s:12:"overlayColor";a:1:{s:7:"default";a:1:{s:5:"color";s:16:"CT_CSS_SKIP_RULE";}}s:15:"backgroundColor";a:1:{s:7:"default";a:1:{s:5:"color";s:16:"CT_CSS_SKIP_RULE";}}}s:19:"pageTitleBackground";a:10:{s:15:"background_type";s:5:"color";s:18:"background_pattern";s:6:"type-1";s:16:"background_image";a:3:{s:13:"attachment_id";N;s:1:"x";i:0;s:1:"y";i:0;}s:8:"gradient";s:65:"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)";s:17:"background_repeat";s:6:"repeat";s:15:"background_size";s:4:"auto";s:21:"background_attachment";s:6:"scroll";s:12:"patternColor";a:1:{s:7:"default";a:1:{s:5:"color";s:7:"#e5e7ea";}}s:12:"overlayColor";a:1:{s:7:"default";a:1:{s:5:"color";s:16:"CT_CSS_SKIP_RULE";}}s:15:"backgroundColor";a:1:{s:7:"default";a:1:{s:5:"color";s:28:"var(--theme-palette-color-6)";}}}s:16:"pageTitlePadding";a:5:{s:3:"top";s:4:"50px";s:6:"bottom";s:4:"50px";s:4:"left";s:4:"auto";s:5:"right";s:4:"auto";s:6:"linked";b:1;}s:32:"0de4d016b134b7d2100d6d62d4a79599";s:0:"";s:19:"page_structure_type";s:7:"default";s:32:"e4deb4ebc59c1f321f43df4573972bcb";s:0:"";s:20:"content_style_source";s:7:"inherit";s:13:"content_style";s:4:"wide";s:32:"fa0dbc60e2042527a296d36f0aa845df";s:0:"";s:23:"vertical_spacing_source";s:7:"inherit";s:20:"content_area_spacing";s:4:"both";s:10:"background";a:10:{s:15:"background_type";s:5:"color";s:18:"background_pattern";s:6:"type-1";s:16:"background_image";a:3:{s:13:"attachment_id";N;s:1:"x";i:0;s:1:"y";i:0;}s:8:"gradient";s:65:"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)";s:17:"background_repeat";s:6:"repeat";s:15:"background_size";s:4:"auto";s:21:"background_attachment";s:6:"scroll";s:12:"patternColor";a:1:{s:7:"default";a:1:{s:5:"color";s:7:"#e5e7ea";}}s:12:"overlayColor";a:1:{s:7:"default";a:1:{s:5:"color";s:16:"CT_CSS_SKIP_RULE";}}s:15:"backgroundColor";a:1:{s:7:"default";a:1:{s:5:"color";s:16:"CT_CSS_SKIP_RULE";}}}s:18:"content_background";a:10:{s:15:"background_type";s:5:"color";s:18:"background_pattern";s:6:"type-1";s:16:"background_image";a:3:{s:13:"attachment_id";N;s:1:"x";i:0;s:1:"y";i:0;}s:8:"gradient";s:65:"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)";s:17:"background_repeat";s:6:"repeat";s:15:"background_size";s:4:"auto";s:21:"background_attachment";s:6:"scroll";s:12:"patternColor";a:1:{s:7:"default";a:1:{s:5:"color";s:7:"#e5e7ea";}}s:12:"overlayColor";a:1:{s:7:"default";a:1:{s:5:"color";s:16:"CT_CSS_SKIP_RULE";}}s:15:"backgroundColor";a:1:{s:7:"default";a:1:{s:5:"color";s:28:"var(--theme-palette-color-8)";}}}s:20:"content_boxed_shadow";a:8:{s:7:"inherit";b:0;s:4:"blur";i:18;s:6:"spread";i:-6;s:8:"v_offset";i:12;s:8:"h_offset";i:0;s:5:"inset";b:0;s:6:"enable";b:1;s:5:"color";a:1:{s:5:"color";s:23:"rgba(34, 56, 101, 0.04)";}}s:20:"content_boxed_border";a:3:{s:5:"width";i:1;s:5:"style";s:4:"none";s:5:"color";a:1:{s:5:"color";s:18:"rgba(44,62,80,0.2)";}}s:20:"content_boxed_radius";a:5:{s:3:"top";s:3:"3px";s:6:"bottom";s:3:"3px";s:4:"left";s:3:"3px";s:5:"right";s:3:"3px";s:6:"linked";b:1;}s:21:"boxed_content_spacing";a:3:{s:7:"desktop";a:5:{s:3:"top";s:4:"40px";s:6:"bottom";s:4:"40px";s:4:"left";s:4:"40px";s:5:"right";s:4:"40px";s:6:"linked";b:1;}s:6:"tablet";a:5:{s:3:"top";s:4:"35px";s:6:"bottom";s:4:"35px";s:4:"left";s:4:"35px";s:5:"right";s:4:"35px";s:6:"linked";b:1;}s:6:"mobile";a:5:{s:3:"top";s:4:"20px";s:6:"bottom";s:4:"20px";s:4:"left";s:4:"20px";s:5:"right";s:4:"20px";s:6:"linked";b:1;}}s:32:"73dff4bf7d6100a446ba6bb04b5ad99e";s:0:"";s:22:"disable_featured_image";s:2:"no";s:17:"disable_post_tags";s:2:"no";s:17:"disable_share_box";s:2:"no";s:18:"disable_author_box";s:2:"no";s:24:"disable_posts_navigation";s:2:"no";s:32:"ae87a713d86cb11fcfb3af676160b9e9";s:0:"";s:21:"disable_related_posts";s:2:"no";s:14:"disable_header";s:2:"no";s:14:"disable_footer";s:2:"no";}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:0:{}'
wp_featherlight_disable:
    - ''
footnotes:
    - ''
rank_math_og_content_image:
    - 'a:2:{s:5:"check";s:32:"bf5aefa3c81a1e23cd58e7f39e015446";s:6:"images";a:1:{i:0;s:100:"https://www.pietrolc.com/wp-content/uploads/2020/04/morepizza_small_consoleoutput-1.jpg?v=1586591342";}}'
uag_migration_processed:
    - '1'
rank_math_title:
    - 'C++ Simulated Annealing Algorithm - "More Pizza" Problem'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
categories:
    - 'Problem-Solving Tournaments'
tags:
    - Algorithms
    - 'Google hashcode'
---

## How whe Simulated Annealing algorithm works

The idea behind the Simulated Annealing algorithm used to solve the “More Pizza” problem is very simple: starting from a randomly chosen solution, this is further improved until a stop condition is met (e.g., the maximum score is achieved).

The [description of the “More Pizza” algorithm](https://www.pietrolc.com/more-pizza-problem-algorithm-description/) have been provided in a previous post.

In this article, the C++ code implementation of that algorithm is provided and commented.

### The main() function

Independently of the used approach, it is expected that these steps are followed:

1. Reading of the input parameters (input file name, specific procedure parameters, etc. ).
2. Reading of input data and storage of the information in a proper data structure.
3. The solving procedure.
4. Validation of the result (optional, as it is done by Google itself)
5. Output of the solution to a file (if not already done in the solving procedure).

A set of global variables have been defined at the very top of the script:

```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include <chrono>
#include <map>
#include <set>
#include <random>
#include <memory>

using namespace std;

// Default input and output filenames 
string iFileName{ "..\a_example.in" };
string oFileName{ "..\a_example.out" };

// Max number of slices (capacity)
int32_t M{ 0 };

// Number available of pizzas
int32_t N{ 0 };

using TSol = vector<int32_t>; // it is used for both pizzas and solution
TSol pizzas{}; // storing number of slices of each pizza

// Random numbers generator
std::random_device rd;
std::mt19937 g(rd());
std::uniform_int_distribution<int32_t> rnProbValue(0, 100);
std::uniform_real_distribution<double> rnProb(0, 1);
// Number of neighbors to check
int32_t numMaxItemsToCheck{ 5u };
double T0 = 10000.0; // Default initial temperature
double ae = 0.000001; // Default reduction factor
```

The structure of the main() function replicates the steps listed above.

```cpp
int main(int argc, char* argv[])
{
    // Reading input parameters
    for (int i = 0; i < argc; i++)
    {
        cout << "argv[" << i << "] = " << argv[i] << endl;
    }
    if (argc > 1)
    {
        iFileName = argv[1];
        oFileName = iFileName;
        oFileName.append(".out");
        if (argc >= 3)
        {
            T0 = std::atof(argv[2]);
            if (argc >= 4)
            {
                numMaxItemsToCheck = std::atoi(argv[3]);
                if (argc >= 5)
                {
                    ae = std::atof(argv[4]);
                }
            }
        }
    }
    std::cout << "input file: " << iFileName << endl;
    std::cout << "output file: " << oFileName << endl;
    std::cout << "initial temperature: " << T0 << endl;
    std::cout << "alpha exp: " << ae << endl;
    std::cout << "num neighbours: " << numMaxItemsToCheck << endl;
    // Read data from input file
    readInput();
    auto start = chrono::steady_clock::now();
    orderPizzas();
    auto end = chrono::steady_clock::now();
    cout << "Elapsed time in milliseconds : "
        << chrono::duration_cast<chrono::milliseconds>(end - start).count()
        << " ms" << endl;
    return 0;
}
```

The validation of the solution and the saving of the solution to a file are part of the procedure itself. In fact, it is expected that each calculated solution is also valid. In addition, if the new solution improves the current result, then it should be saved to a file too.

### Reading data from a file

The following code has been implemented to read the input file. The first two integers represent the maximum number of slices (i.e., the maximum score) and the number of pizzas respectively. The remaining N integers represent the number of each pizza.

```cpp
// Read input data from a file
void readInput()
{
    ifstream iFile;
    iFile.open(iFileName);
    iFile >> M; // Maximum number of slices (i.e., max score)
    iFile >> N; // Number of pizzas
    std::cout << "Max. num. slices: " << M << endl;
    std::cout << "N. pizzas: " << N << endl;
    //init pizzas vector
    pizzas.reserve(N);
    for (int32_t i = 0; i < N; i++)
    {
        int32_t tmpPizza{};
        iFile >> tmpPizza;
        pizzas.emplace_back(tmpPizza);
    }
    iFile.close();
    pizzas.shrink_to_fit();
    std::cout << "DONE!" << endl;
}
```

### The solution class

I preferred to represent the solution inside a class to:

- store the actual solution.
- store the score of the solution.
- save the “state” of a solution (e.g., which pizzas can be added to the current solution).
- implement utility functions to:
    -- create an empty solution (i.e., having zero score).
    -- create a random solution.
    -- change the current solution in a random way (please, check *mutate()* function).
    -- calculate the score of the solution (please, check *score()* function).
    -- save the solution into a file with the required format (please, check the function *saveSolutionToFile()* ).
    -- print the current solution to screen

```cpp
// Container used to store the solution
// including its "state". The state of
// a solution is required to quickly change it
// and generate a new "neighbour"
struct TSolCnt
{
    // This constructor is used to create an empty solution
    TSolCnt() : sol{}, score{0}, availablePizzas(N,0)
    {
        // Initially, all pizzas are available
        for (int i = 0; i < N; i++)
        {
            availablePizzas[i]=i;
        }
    }
    // Constructor used to make an initial random solution
    TSolCnt( std::uniform_int_distribution<>& rnPizzaID ) :
        sol(), // empty solution
        score(0), // initial score
        availablePizzas(N,0)
    {
        // Initially, all pizzas are available
        for (int i = 0; i < N; i++)
        {
            availablePizzas[i] = i;
        }
        // Pizzas that cannot be used will be stored at the end of this vector
        std::sort(availablePizzas.begin(), availablePizzas.end(),[&](int a, int b)
        {
            return (M - (score + pizzas[a])) > (M - (score + pizzas[b]));
        });
        while ( score < M &&
            ( !availablePizzas.empty() && ( M - ( score + pizzas[availablePizzas.front()]))>0 ))
        {
            auto it_end = std::find_if(availablePizzas.cbegin(),
                availablePizzas.cend(),
                [&](int idx) {
                    return (M - (score + pizzas[idx])) < 0;
                });
            const auto numElToCheck = std::distance(availablePizzas.cbegin(), it_end);
            const int32_t avIdx = rnPizzaID(g) % numElToCheck;
            const auto searchIt = std::next(availablePizzas.cbegin(), avIdx);
            const int32_t searchIdx = *searchIt;
            if ( (pizzas[searchIdx] + score) <= M)
            {
                sol.emplace_back(searchIdx);
                score += pizzas[searchIdx];
                availablePizzas.erase(searchIt);
                cout << "searchIdx: " << searchIdx << ", score: " << score << "tr";
                // Sorting indexes by our criteria in descending order
                std::sort(availablePizzas.begin(), availablePizzas.end(), [&](int a, int b)
                {
                    return (M - (score + pizzas[a])) > (M - (score + pizzas[b]));
                });
                // Sorting indexes
                std::sort(sol.begin(), sol.end());
            }
        }
    }
    TSolCnt& operator= (const TSolCnt& rhs)
    {
        score = rhs.score;
        sol.assign(rhs.sol.begin(), rhs.sol.end());
        availablePizzas = rhs.availablePizzas;
        return *this;
    };
    void mutate(
        std::uniform_int_distribution<int32_t>& rnPizzaID,
        const int32_t maxNumRemovals)
    {
        const int32_t oldSize = static_cast<int32_t>(sol.size());
        int32_t numRemovals = 0;
        do
        {
            // find a pizza to remove
            const int32_t searchIdx = sol[rnPizzaID(g) % sol.size()];
            // update set of available pizzas
            availablePizzas.emplace_back(searchIdx);
            // update solution and its score
            score -= pizzas[searchIdx];
            auto it = std::find(sol.cbegin(), sol.cend(), searchIdx);
            sol.erase(it);
            // increase counter
            ++numRemovals;
        } while (!sol.empty()
            && (sol.size() == oldSize || numRemovals < maxNumRemovals));
        // Sorting indexes by our criteria in descending order
        std::sort(availablePizzas.begin(), availablePizzas.end(), [&](int a, int b)
        {
            return (M - (score + pizzas[a])) >(M - (score + pizzas[b]));
        });
        // adding slices to fill the order
        while (score < M &&
            (!availablePizzas.empty() && ( M - ( score + pizzas[availablePizzas.front() ] ) ) >=0 ) )
        {
            const int32_t avIdx = rnPizzaID(g) % availablePizzas.size();
            const auto searchIt = std::next(availablePizzas.cbegin(), avIdx);
            const int32_t searchIdx = *searchIt;
            if ((pizzas[searchIdx] + score) <= M)
            {
                sol.emplace_back(searchIdx);
                score += pizzas[searchIdx];
                availablePizzas.erase(searchIt);
                // Sorting indexes by our criteria in descending order
                std::sort(availablePizzas.begin(), availablePizzas.end(), [&](int a, int b)
                {
                    return (M - (score + pizzas[a])) > (M - (score + pizzas[b]));
                });
                // Sorting indexes
                std::sort(sol.begin(), sol.end());
            }
        }
    }
    // Helper function to print the solution
    void print()
    {
        std::cout << "Ordering " << sol.size() << " pizzas:" << std::endl;
        int32_t score = 0;
        for (auto item : sol)
        {
            std::cout << item << " ";
            score += pizzas[item];
        }
        cout << endl;
        cout << "Score: " << score << endl;
    }
    // Save solution to a file.
    // The name of the file is SCENARIO + "_" + SCORE + ".txt"
    void saveSolutionToFile()
    {
        // print to a file
        ofstream outFile;
        outFile.open(iFileName + "_" + to_string(score) + ".out");
        outFile << sol.size() << endl;
        int x = 0;
        for (auto& item : sol)
        {
            outFile << item;
            if (x < static_cast<int32_t>(sol.size() - 1))
            {
                outFile << " ";
            }
            ++x;
        }
        outFile << endl;
        outFile.close();
    }
    TSol sol; // vector of indexes of the pizzas
    int32_t score; // score of the current solution
    // Set storing the indexes of the available pizzas
    // This vector will be always sorted in a descending order
    // by the difference <M - (score + pizzas[index])>, where index
    // refers to each value stored inside this vector.
    TSol availablePizzas;
};
```

#### How to quickly calculate new solutions?

The Simulated Annealing is – by its nature – a slow algorithm. Despite that, it is easy to adapt the code proposed in this article to solve many NP-hard problems.

The implementation of this algorithm has been done having performance always in mind.

A bottleneck is – at each step – the choice of pizzas to replace and to add to the current solution.

For this reason, in the *mutate()* function, after a certain number of pizzas have been *randomly* removed, then only the pizzas that can effectively contribute to the solution are considered in the *selection process.*

For this reason, the vector of available pizzas is sorted so that the pizzas that can fit better inside the solution are placed at the front of the vector.

If no pizzas can be selected, then a score greater than the maximum value is achieved if the first at the front of the vector is chosen.

### The orderPizzas() function

As described in [this post](https://www.pietrolc.com/more-pizza-problem-algorithm-description/), the used algorithm is a “Simulated Annealing” procedure. Please, find the implementation of that algorithm below:

```cpp
// Using smart pointers, it is straightforward and faster
// to replace local solution with a better solution.
using TSolPtr = std::shared_ptr<TSolCnt>;
void orderPizzas()
{
    const int32_t numEl{ static_cast<int32_t>( pizzas.size() ) };
    // This is used to choose randomly a pizza to order or remove
    std::uniform_int_distribution<int32_t> rnPizzaID(0, numEl - 1);
    // Counters 
    int32_t numItBetweenImprovement = 0;
    int32_t cntIters{ 0 };
    cout << "...ok! Ready to start..." << endl;
    // make local initial solution
    TSolPtr localSol = std::make_shared<TSolCnt>(rnPizzaID);
    localSol->saveSolutionToFile();
    // this is the best solution until now found... so let's save it!
    TSolPtr savedSol = std::make_shared<TSolCnt>(*localSol);
    // Print some data...
    cout << "Initial score: " << savedSol->score << "tsize: " << savedSol->sol.size() << endl;
#ifdef _DEBUG
    savedSol->print();
#endif // _DEBUG
    double temperature = T0; // initialize temperature
    while (savedSol->score<M && numItBetweenImprovement < 500'000)
    {
        // Calculating new temperature
        ++cntIters;
        temperature = T0 * exp(-ae * cntIters);
        // Calculating the number of pizzas to be replaced
        const auto maxNumRemovals = 1 + numItBetweenImprovement / 100;
        // creating new solutions from current one!
        TSolPtr bestNb = std::make_shared<TSolCnt>(); // with zero score
        for (auto i = 0; i < numMaxItemsToCheck; i++)
        {
            // Creating a copy of the local solution
            TSolPtr nb = std::make_shared<TSolCnt>(*localSol);
            if (nb)
            {
                // Mutate the new solution
                nb->mutate(rnPizzaID, maxNumRemovals);
                // Checking if the new solution is better
                if (nb->score > bestNb->score )
                {
                    bestNb.swap(nb);
                }
            }
        }
        const int32_t deltaEnergy = bestNb->score - savedSol->score;
        // If a better solution is found
        if (bestNb->score>0 && deltaEnergy > 0)
        {
            savedSol.swap(bestNb);
            localSol = std::make_shared<TSolCnt>(*savedSol);
            savedSol->saveSolutionToFile();
            cout << "New max score: " << savedSol->score << "tsize: " << savedSol->sol.size();
            cout << "tTemperature: " << temperature;
            cout << "tdelta: " << deltaEnergy;
            cout << "tnumItBetweenImprovements: " << numItBetweenImprovement << endl;
            numItBetweenImprovement = 0;
#ifdef _DEBUG
            savedSol->print();
#endif // _DEBUG
        }
        else
        {
            // check if it can be accepted
            const auto probAccept = 1.0 / (1 + exp(-deltaEnergy / temperature));
            if (rnProb(g) < probAccept) // accepted
            {
                localSol.swap(bestNb);
                cout << "Accepted lower score: " << localSol->score << "tsize: " << localSol->sol.size();
            }
            else
            {
                // Reset local solution to be equal to the best one found until now
                localSol = std::make_shared<TSolCnt>(*savedSol);
                cout << "Unaccepted lower score: " << bestNb->score << "tsize: " << bestNb->sol.size();
            }
            cout << "tTemperature: " << temperature;
            cout << "tProbAccept: " << probAccept;
            cout << "tnumIts: " << numItBetweenImprovement << "r";
            ++numItBetweenImprovement;
        }
    }
#ifdef _DEBUG
    savedSol->print();
#endif // _DEBUG
}
```

Every time a better solution is found, it is also saved to a file. In this way, it is possible to commit as soon as possible a new solution to the Google Hash Code Judge System.

### The console output

The algorithm has been executed for all the *unsolved* test scenarios, as shown in the following images.

[![more pizza small console output](/wp-content/uploads/2020/04/morepizza_small_consoleoutput-1.jpg)](/wp-content/uploads/2020/04/morepizza_small_consoleoutput-1.jpg) Small
[![more pizza medium console output](/wp-content/uploads/2020/04/morepizza_medium_consoleoutput.jpg)](/wp-content/uploads/2020/04/morepizza_medium_consoleoutput.jpg) Medium
[![more pizza quite big console output](/wp-content/uploads/2020/04/morepizza_quitebig_consoleoutput.jpg)](/wp-content/uploads/2020/04/morepizza_quitebig_consoleoutput.jpg) Quite big
[![more pizza also big console output](/wp-content/uploads/2020/04/morepizza_alsobig_consoleoutput.jpg)](/wp-content/uploads/2020/04/morepizza_alsobig_consoleoutput.jpg) Also Big

#### Results for each test scenario

In the following table, the average execution time for each scenario is shown:

| Scenario | Average execution time |
|---|---|
| Small | &lt;1s |
| Medium | &lt;1s |
| Quite Big | 1-2 minutes |
| Also Big | &lt;1s |

[Input files (scenarios) for the “More Pizza” problem [Download]](/wp-content/uploads/2020/03/more-pizza-scenarios.zip)

### The complete code

```cpp
// Author: Pietro L. Carotenuto
// Website: https://www.pietrolc.com
#include "stdafx.h"
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include <chrono>
#include <map>
#include <set>
#include <random>
#include <memory>

using namespace std;

// Default input and output filenames 
string iFileName{ "..\a_example.in" };
string oFileName{ "..\a_example.out" };

// Max number of slices (capacity)
int32_t M{ 0 };
// Number available of pizzas
int32_t N{ 0 };
using TSol = vector<int32_t>; // it is used for both pizzas and solution
TSol pizzas{}; // storing number of slices of each pizza

// Random numbers generator
std::random_device rd;
std::mt19937 g(rd());
std::uniform_int_distribution<int32_t> rnProbValue(0, 100);
std::uniform_real_distribution<double> rnProb(0, 1);

// Number of neighbours to check
int32_t numMaxItemsToCheck{ 5u };
double T0 = 10000.0; // Default initial temperature
double ae = 0.000001; // Default reduction factor

// Read input data from a file
void readInput()
{
    ifstream iFile;
    iFile.open(iFileName);
    iFile >> M;
    iFile >> N;
    std::cout << "Max num slices: " << M << endl;
    std::cout << "N. pizzas: " << N << endl;
    //init pizzas vector
    pizzas.reserve(N);
    for (int32_t i = 0; i < N; i++)
    {
        int32_t tmpPizza{};
        iFile >> tmpPizza;
        pizzas.emplace_back(tmpPizza);
    }
    iFile.close();
    pizzas.shrink_to_fit();
    std::cout << "DONE!" << endl;
}
// Container used to store the solution
// including its "state". The state of
// a solution is required to quickly change it
// and generate a new "neighbour"
struct TSolCnt
{
    TSolCnt() : sol{}, score{0}, availablePizzas(N,0)
    {
        for (int i = 0; i < N; i++)
        {
            availablePizzas[i]=i;
        }
    }

    // Constructor used to make an initial solution
    TSolCnt( std::uniform_int_distribution<>& rnPizzaID ) :
        sol(), // empty solution
        score(0), // initial score
        availablePizzas(N,0)
    {
        for (int i = 0; i < N; i++)
        {
            availablePizzas[i] = i;
        }
        // Sorting indexes by our criteria in descending order
        std::sort(availablePizzas.begin(), availablePizzas.end(),[&](int a, int b)
        {
            return (M - (score + pizzas[a])) > (M - (score + pizzas[b]));
        });
        while ( score < M &&
            ( !availablePizzas.empty() && ( M - ( score + pizzas[availablePizzas.front()]))>0 ))
        {
            auto it_end = std::find_if(availablePizzas.cbegin(),
                availablePizzas.cend(),
                [&](int idx) {
                    return (M - (score + pizzas[idx])) < 0;
                });
            const auto numElToCheck = std::distance(availablePizzas.cbegin(), it_end);
            const int32_t avIdx = rnPizzaID(g) % numElToCheck;
            const auto searchIt = std::next(availablePizzas.cbegin(), avIdx);
            const int32_t searchIdx = *searchIt;
            if ( (pizzas[searchIdx] + score) <= M)
            {
                sol.emplace_back(searchIdx);
                score += pizzas[searchIdx];
                availablePizzas.erase(searchIt);
                cout << "searchIdx: " << searchIdx << ", score: " << score << "tr";
                // Sorting indexes by our criteria in descending order
                std::sort(availablePizzas.begin(), availablePizzas.end(), [&](int a, int b)
                {
                    return (M - (score + pizzas[a])) > (M - (score + pizzas[b]));
                });
                // Sorting indexes
                std::sort(sol.begin(), sol.end());
            }
        }
    }

    TSolCnt& operator= (const TSolCnt& rhs)
    {
        score = rhs.score;
        sol.assign(rhs.sol.begin(), rhs.sol.end());
        availablePizzas = rhs.availablePizzas;
        return *this;
    };

    void mutate(
        std::uniform_int_distribution<int32_t>& rnPizzaID,
        const int32_t maxNumRemovals)
    {
        const int32_t oldSize = static_cast<int32_t>(sol.size());
        int32_t numRemovals = 0;
        do
        {
            // find a pizza to remove
            const int32_t searchIdx = sol[rnPizzaID(g) % sol.size()];
            // update set of available pizzas
            availablePizzas.emplace_back(searchIdx);
            // update solution and its score
            score -= pizzas[searchIdx];
            auto it = std::find(sol.cbegin(), sol.cend(), searchIdx);
            sol.erase(it);
            // increase counter
            ++numRemovals;
        } while (!sol.empty()
            && (sol.size() == oldSize || numRemovals < maxNumRemovals));
        // Sorting indexes by our criteria in descending order
        std::sort(availablePizzas.begin(), availablePizzas.end(), [&](int a, int b)
        {
            return (M - (score + pizzas[a])) >(M - (score + pizzas[b]));
        });
        // adding slices to fill the order
        while (score < M &&
            (!availablePizzas.empty() && ( M - ( score + pizzas[availablePizzas.front() ] ) ) >=0 ) )
        {
            const int32_t avIdx = rnPizzaID(g) % availablePizzas.size();
            const auto searchIt = std::next(availablePizzas.cbegin(), avIdx);
            const int32_t searchIdx = *searchIt;
            if ((pizzas[searchIdx] + score) <= M)
            {
                sol.emplace_back(searchIdx);
                score += pizzas[searchIdx];
                availablePizzas.erase(searchIt);
                // Sorting indexes by our criteria in descending order
                std::sort(availablePizzas.begin(), availablePizzas.end(), [&](int a, int b)
                {
                    return (M - (score + pizzas[a])) > (M - (score + pizzas[b]));
                });
                // Sorting indexes
                std::sort(sol.begin(), sol.end());
            }
        }
    }

    // Helper function to print the solution
    void print()
    {
        std::cout << "Ordering " << sol.size() << " pizzas:" << std::endl;
        int32_t score = 0;
        for (auto item : sol)
        {
            std::cout << item << " ";
            score += pizzas[item];
        }
        cout << endl;
        cout << "Score: " << score << endl;
    }

    // Save solution to a file.
    // The name of the file is SCENARIO + "_" + SCORE + ".txt"
    void saveSolutionToFile()
    {
        // print to a file
        ofstream outFile;
        outFile.open(iFileName + "_" + to_string(score) + ".out");
        outFile << sol.size() << endl;
        int x = 0;
        for (auto& item : sol)
        {
            outFile << item;
            if (x < static_cast<int32_t>(sol.size() - 1))
            {
                outFile << " ";
            }
            ++x;
        }
        outFile << endl;
        outFile.close();
    }
    TSol sol; // vector of indexes of the pizzas
    int32_t score; // score of the current solution
    // Set storing the indexes of the available pizzas
    // This vector will be always sorted in a descending order
    // by the difference <M - (score + pizzas[index])>, where index
    // refers to each value stored inside this vector.
    TSol availablePizzas;
};

// Using smart pointers, it is straightforward and faster
// to replace local solution with a better solution.
using TSolPtr = std::shared_ptr<TSolCnt>;
void orderPizzas()
{
    const int32_t numEl{ static_cast<int32_t>( pizzas.size() ) };
    // This is used to choose randomly a pizza to order or remove
    std::uniform_int_distribution<int32_t> rnPizzaID(0, numEl - 1);
    // Counters 
    int32_t numItBetweenImprovement = 0;
    int32_t cntIters{ 0 };
    cout << "...ok! Ready to start..." << endl;
    // make local initial solution
    TSolPtr localSol = std::make_shared<TSolCnt>(rnPizzaID);
    localSol->saveSolutionToFile();
    // this is the best solution until now found... so let's save it!
    TSolPtr savedSol = std::make_shared<TSolCnt>(*localSol);
    // Print some data...
    cout << "Initial score: " << savedSol->score << "tsize: " << savedSol->sol.size() << endl;
#ifdef _DEBUG
    savedSol->print();
#endif // _DEBUG
    double temperature = T0; // initialize temperature
    while (savedSol->score<M && numItBetweenImprovement < 500'000)
    {
        // Calculating new temperature
        ++cntIters;
        temperature = T0 * exp(-ae * cntIters);
        // Calculating the number of pizzas to be replaced
        const auto maxNumRemovals = 1 + numItBetweenImprovement / 100;
        // creating new solutions from current one!
        TSolPtr bestNb = std::make_shared<TSolCnt>(); // with zero score
        for (auto i = 0; i < numMaxItemsToCheck; i++)
        {
            // Creating a copy of the local solution
            TSolPtr nb = std::make_shared<TSolCnt>(*localSol);
            if (nb)
            {
                // Mutate the new solution
                nb->mutate(rnPizzaID, maxNumRemovals);
                // Checking if the new solution is better
                if (nb->score > bestNb->score )
                {
                    bestNb.swap(nb);
                }
            }
        }
        const int32_t deltaEnergy = bestNb->score - savedSol->score;
        // If a better solution is found
        if (bestNb->score>0 && deltaEnergy > 0)
        {
            savedSol.swap(bestNb);
            localSol = std::make_shared<TSolCnt>(*savedSol);
            savedSol->saveSolutionToFile();
            cout << "New max score: " << savedSol->score << "\tsize: " << savedSol->sol.size();
            cout << "\tTemperature: " << temperature;
            cout << "\tdelta: " << deltaEnergy;
            cout << "\tnumItBetweenImprovements: " << numItBetweenImprovement << endl;
            numItBetweenImprovement = 0;
#ifdef _DEBUG
            savedSol->print();
#endif // _DEBUG
        }
        else
        {
            // check if it can be accepted
            const auto probAccept = 1.0 / (1 + exp(-deltaEnergy / temperature));
            if (rnProb(g) < probAccept) // accepted
            {
                localSol.swap(bestNb);
                cout << "Accepted lower score: " << localSol->score << "\tsize: " << localSol->sol.size();
            }
            else
            {
                // Reset local solution to be equal to the best one found until now
                localSol = std::make_shared<TSolCnt>(*savedSol);
                cout << "Unaccepted lower score: " << bestNb->score << "\tsize: " << bestNb->sol.size();
            }
            cout << "\tTemperature: " << temperature;
            cout << "\tProbAccept: " << probAccept;
            cout << "\tnumIts: " << numItBetweenImprovement << "\r";
            ++numItBetweenImprovement;
        }
    }

#ifdef _DEBUG
    savedSol->print();
#endif // _DEBUG

}
int main(int argc, char* argv[])
{
    // Reading algorithm parameters
    for (int i = 0; i < argc; i++)
        cout << "argv[" << i << "] = " << argv[i] << endl;
    if (argc > 1)
    {
        iFileName = argv[1];
        oFileName = iFileName;
        oFileName.append(".out");
        if (argc >= 3)
        {
            T0 = std::atof(argv[2]);
            if (argc >= 4)
            {
                numMaxItemsToCheck = std::atoi(argv[3]);
                if (argc >= 5)
                {
                    ae = std::atof(argv[4]);
                }
            }
        }
    }

    std::cout << "input file: " << iFileName << endl;
    std::cout << "output file: " << oFileName << endl;
    std::cout << "initial temperature: " << T0 << endl;
    std::cout << "alpha exp: " << ae << endl;
    std::cout << "num neighbours: " << numMaxItemsToCheck << endl;
    // Read data from input file
    readInput();
    auto start = chrono::steady_clock::now();
    orderPizzas();
    auto end = chrono::steady_clock::now();
    cout << "Elapsed time in milliseconds : "
        << chrono::duration_cast<chrono::milliseconds>(end - start).count()
        << " ms" << endl;
    return 0;
}
```

### New code - using OOP design - is on Github

After five years, I've found the time to refactor this original code I used for the Google HashCode challenge.
I've decided to split this large piece of code into smaller classes.
The complete and updated code can be found here: [SimulatedAnnealingCpp repo](https://github.com/pietrolc/SimulatedAnnealingCpp).

Hope this helps!

---
