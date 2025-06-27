---
id: 5716
title: 'Git &#8211; Unstaged changes after a revert &#8211; CRLF/LF issue'
date: '2021-09-06T21:32:11+02:00'
author: 'Pietro L. Carotenuto'
layout: post
guid: 'https://www.pietrolc.com/?p=5716'
permalink: /git-unstaged-changes-after-a-revert-crlf-lf-issue/
inline_featured_image:
    - '0'
rank_math_seo_score:
    - '71'
rank_math_internal_links_processed:
    - '1'
rank_math_description:
    - 'A Git checkout or the pull process can fail if the git workspace contains some local and unstaged changes. Reverting files might not be enough.'
rank_math_focus_keyword:
    - 'unstaged changes,git revert fails,git checkout,git checkout fails'
rank_math_primary_category:
    - '97'
rank_math_analytic_object_id:
    - '96'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:0;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '0'
dpsp_networks_shares_last_updated:
    - '1670936415'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
uag_migration_processed:
    - '1'
image: /wp-content/uploads/2021/09/unstaged_changes_git_revert.png.webp
categories:
    - 'Version Control Systems'
tags:
    - Git
---

## The problem: unexpected unstaged changes after a revert

Recently, when using the GIT command-line to switch to an existing user branch, the checkout failed due to some local changes in the current workspace. In this case, git suggests to commit or to stash the local changes.  
Since I was not interested in the local changes, I decided to revert these files to the last commit (HEAD). The revert process succeeded 😊.

Surprisingly, when trying to checkout the new user branch, the same files were shown as unstaged.

Initially, I tried reverting again the changes to the last commit. Instead of git revert, I used the following command:

```
git reset --hard HEAD
```

Unfortunately, it did not work. 🙁

Indeed, when running the command:

```
git status
```

the same files were shown again as unstaged.

I immediately realized that Git was not reverting the CRLF/LF characters at the end of the lines of the relevant files. These characters were ignored during the revert process.

This was pretty evident because when running the git command:

```
git diff
```

the whole content of these files was shown.

## The solution

In order to solve this issue, I found a workaround solution:

```
git checkout --force mySuperUserBranch
```

When switching branches using the “–force” option, then the checkout proceeds even if the index or the working tree differs from HEAD. In this way, all local changes are thrown away.

Nevertheless, it is clear that this issue depends on some settings of the *.gitattributes* file.

The [.gitattributes file](https://git-scm.com/docs/gitattributes) allows you to specify the files and paths attributes that should be used by git when performing any git action. In this file, the user can his own configuration. For example, we can specify which characters should be used at the end of the lines, i.e., CRLF or LF.

Therefore, in order to solve this issue, an easy fix is provided by the following sequence of operations:

```
git rm .gitattributes
git add -A
git reset --hard
```

After getting the correct version of the .gitattributes file, it is possible to execute all those git commands that require no local changes (e.g., a git checkout or pull operation).