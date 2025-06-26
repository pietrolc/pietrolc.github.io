---
id: 3479
title: 'How-to install Raspberry PI Desktop (Raspbian) on a VirtualBox VM'
date: '2020-08-28T17:30:43+02:00'
author: 'Pietro L. Carotenuto'
excerpt: 'Installing Raspberry PI Desktop (Raspbian) on a Virtualbox VM is very easy and it allows to run some basic scripts on an emulated Raspberry PI board.'
layout: post
guid: 'https://www.pietrolc.com/?p=3479'
permalink: /install-raspberry-pi-desktop-on-virtualbox-vm/
inline_featured_image:
    - '0'
rank_math_primary_category:
    - '682'
rank_math_description:
    - 'Learn how to effortlessly set up Raspberry PI Desktop on a VirtualBox VM for emulating a Raspberry PI board. Perfect for professionals.'
rank_math_focus_keyword:
    - 'Raspberry pi desktop'
rank_math_news_sitemap_robots:
    - index
rank_math_robots:
    - 'a:1:{i:0;s:5:"index";}'
rank_math_facebook_image:
    - 'https://www.pietrolc.com/wp-content/uploads/2020/08/WelcomeToRaspbian-e1598614910814.jpg'
rank_math_facebook_image_id:
    - '3505'
rank_math_twitter_image:
    - 'https://www.pietrolc.com/wp-content/uploads/2020/08/RaspbianDesktopISOReady.jpg'
rank_math_twitter_image_id:
    - '3497'
rank_math_twitter_use_facebook:
    - 'off'
rank_math_internal_links_processed:
    - '1'
rank_math_seo_score:
    - '85'
rank_math_analytic_object_id:
    - '51'
dpsp_networks_shares:
    - 'a:4:{s:8:"facebook";i:7;s:9:"pinterest";i:0;s:6:"reddit";i:0;s:7:"twitter";i:0;}'
dpsp_networks_shares_total:
    - '7'
dpsp_networks_shares_last_updated:
    - '1670929210'
blocksy_post_meta_options:
    - 'a:1:{s:17:"styles_descriptor";a:3:{s:6:"styles";a:3:{s:7:"desktop";s:0:"";s:6:"tablet";s:0:"";s:6:"mobile";s:0:"";}s:12:"google_fonts";a:0:{}s:7:"version";i:6;}}'
ilj_blacklistdefinition:
    - 'a:0:{}'
ilj_linkdefinition:
    - 'a:1:{i:0;s:20:"install Raspberry Pi";}'
wp_featherlight_disable:
    - ''
saswp_schema_type_product_pros_enable_cons:
    - '0'
saswp_modify_this_schema_72507:
    - '1'
uag_migration_processed:
    - '1'
rank_math_title:
    - 'Easy Guide: Install Raspberry PI Desktop on VirtualBox VM'
rank_math_facebook_title:
    - 'Effortlessly Install Raspberry PI Desktop on VirtualBox VM | Step-by-Step Guide'
rank_math_facebook_description:
    - 'Learn how to easily set up Raspberry PI Desktop on a VirtualBox VM to emulate a Raspberry PI board. This comprehensive step-by-step guide is perfect for professionals looking to harness the power of Raspberry PI in a virtual environment. Boost your productivity and explore endless possibilities with Raspberry PI Desktop on a VirtualBox VM. Don''t miss out on this technical tutorial!'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
image: /wp-content/uploads/2020/08/WelcomeToRaspbian.jpg.webp
categories:
    - 'How-to and tutorials'
tags:
    - 'Linux OS'
    - 'Raspberry Pi'
    - 'virtual machines'
---

Installing **Raspberry PI Desktop OS** (also known as *Raspbian*) on a *VirtualBox* Virtual Machine (VM) is very useful to run and test some code without needing a real Raspberry PI.

The Raspberry PI Desktop includes an emulated Raspberry PI board that can be used to test some basic scripts and check the most common functionalities of this board.

In addition, using VM snapshots, it is really easy to save the state of the machine and revert all the changes done after that point. In this way, it is possible to run different experiments starting from the same virtual machine state. For additional information about snapshots, please check the [official Oracle documentation](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/snapshots.html).

## Steps to install Raspberry PI Desktop on a VM

1. In order to install **VirtualBox from Oracle** on your PC, you first need to download it from [the official website](https://www.virtualbox.org).  
    When the installation of VirtualBox is complete, then you can install any Operating System (OS) is needed.  
    In particular, you can install Raspbian, a Linux OS deriving from Debian.
2. Download the [Raspberry PI Desktop ISO image](https://www.raspberrypi.org/downloads/raspberry-pi-desktop/) from the official website.
3. Launch VirtualBox.
4. Create a new *Linux* Virtual Machine indicating Debian 64 bit as Operating System to use. In order to use the same amount of RAM available on a Raspbarry PI 3 (model B+), select 1GB of RAM. After this, when prompted for hard-disk type, select dynamic size and 8-10 GB of available space.
5. When prompted, select “Graphical Install”.
6. Setup Language and Keyboard layout.
7. Choose your partitioning scheme. Choose the default one if you haven’t particular requirements.
8. When prompted, select and install GRUB Bootloader (select /dev/sda).
9. Wait until the VM boots into the Raspberry PI Desktop.
10. When loaded, the OS will check for new updates. Please, wait until all updates have been downloaded and installed.

### Install VM Guest Addon for Linux (Debian)

11. From the menu, click on **Devices &gt; Insert Guest Additions**.
12. Open a terminal window and type the following command to install the VirtualBox Guest Additions for Linux Debian:  
    `sudo sh /media/cdrom0/VBoxLinuxAdditions.run`
13. In order to enable the shared folders, please type this command:  
    `sudo adduser pi vboxsf`
14. Add a shared folder to your VM: for example, a shared folder called “PC” pointing to any location to your host machine.
15. When finished, please reboot typing:  
    `sudo reboot`

[![Rebooting Raspbian - Linux OS](/wp-content/uploads/2020/08/RaspbianDebianLinuxRebooting.jpg.webp)](/wp-content/uploads/2020/08/RaspbianDebianLinuxRebooting.jpg.webp)
Press Enter to start Linux Debian with Raspberry PI Desktop

16. When the OS has finished rebooting, you should have an environment similar to the following one:

[![Raspbian Desktop OS is ready](/wp-content/uploads/2020/08/RaspbianDesktopISOReady.jpg)](https://www.pietrolc.com/wp-content/uploads/2020/08/RaspbianDesktopISOReady.jpg.webp)
Raspbian Desktop OS is ready

On the Desktop, there will be two icons: the used Shared Folder (starting with “sf\_” prefix) and the VM Guest Addons folder. If you open the Terminal, you can access both under the *media* folder; in other words, you need to type:

`cd /media/ `

You can find both folders “cdrom0” and “sf\_PC” (or another name, depending on your choice).

In order to eject the VM Guest Addons cdrom, you can also click on the “eject” button on the top-right of the Desktop.