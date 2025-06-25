---
id: 72541
title: 'Fix black screen issue for Ubuntu VM in 8 blessed steps'
date: '2023-03-04T15:58:04+01:00'
author: 'Pietro L. Carotenuto'
layout: post
guid: 'https://www.pietrolc.com/?p=72541'
permalink: /fix-black-screen-issue-ubuntu-vm/
saswp_schema_type_product_pros_enable_cons:
    - '0'
rank_math_internal_links_processed:
    - '1'
rank_math_primary_category:
    - '682'
rank_math_seo_score:
    - '85'
wp_featherlight_disable:
    - ''
rank_math_focus_keyword:
    - 'black screen issue,ubuntu vm,hard-disk space'
rank_math_description:
    - 'Resolve the black screen issue in your Ubuntu VM with this simple guide on managing hard-disk space effectively.'
uag_migration_processed:
    - '1'
rank_math_title:
    - 'Fix Black Screen Issue on Ubuntu VM: 8 Essential Steps'
um_content_restriction:
    - 'a:8:{s:26:"_um_custom_access_settings";b:0;s:14:"_um_accessible";i:0;s:28:"_um_access_hide_from_queries";b:0;s:19:"_um_noaccess_action";i:0;s:30:"_um_restrict_by_custom_message";i:0;s:27:"_um_restrict_custom_message";s:0:"";s:19:"_um_access_redirect";i:0;s:23:"_um_access_redirect_url";s:0:"";}'
image: /wp-content/uploads/2023/03/black-screen-issue.gif
categories:
    - 'How-to &amp; tutorials'
tags:
    - 'virtual machines'
    - virtualbox
---

This step-by-step tutorial contains the solution to one of the most common issues when using virtual machines from [Oracle VM VirtualBox](https://www.virtualbox.org): after starting the virtual machine, it shows a black screen and it seems to not work anymore.

Do not panic! Luckily, there is an easy fix for the virtual machines **(VMs) black screen issue**.

## When can the black screen issue occur?

A virtual machine can stop working if there is no more free space on the hard disk of the host machine or on the hard disk of the virtual machine itself. In the first scenario, the virtual machine is simply paused and a message is shown to the user; as soon as some free memory is available, the execution of the VM can continue with no issues. In the second scenario, the virtual machine simply shows a black screen. There is no indication why the VM stopped working. Restarting the virtual machine does not solve the issue.

For the black screen issue, the root cause is – generally – the **lack of free space on the VM hard disk**.

First, we need to verify that this is *your* issue as well.

### How-to check how much free hard-disk space is available in Ubuntu?

That’s pretty simple.

- If you restart your Ubuntu VM, keep pressing *MAIUSC* or *SHIFT* key in order to enter into the boot menu. ![Gnu grub menu](/wp-content/uploads/2023/03/gnu-grub-1.png.webp) Select Advanced Options for Ubuntu

- Choose to continue in *recovery mode.* ![Gnu grub - recovery mode selection](/wp-content/uploads/2023/03/gnu-grub-2.png.webp) Continue in recovery mode

- When you are in the *recovery menu*, check the “system summary”. ![Choose system summary from recovery menu](/wp-content/uploads/2023/03/gnu-grub-recovery-menu.png.webp) Choose system summary

- In the system information, you should be able to see how much space is available on each mounted device, as shown in the picture below: ![System Information - hard disk is almost full](/wp-content/uploads/2023/03/gnu-grub-recovery-menu-used-hdd-space.png.webp) The black screen issue occurs when the hard-disk is used 100%.

If the available free space is zero, then you have confirmed the root cause of your black screen issue.

## How-to fix the black screen issue for your Ubuntu VM?

Since we have identified that the black screen issue is due to the lack of free available space on the Ubuntu hard disk, then fixing it should be pretty simple: let’s create more space!

In order to add hard-disk space (from your host machine), you should:

1.  If your host machine is using Windows OS, increase the VM disk space using the [VirtualBox Media manager](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/vdis.html).

    Otherwise, you can achieve the same result using the following [modifymedium](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/vboxmanage-modifymedium.html) command:

    `VBoxManage modifymedium "/my_path_to_vdi_file" --resize <new size in MB>`

    This command can be used on both Windows and Linux OS.

    If this step has succeeded, you have now some *“*unallocated” space on your VM.
2.  Download a [GParted Live CD/USB/HD/PXE Bootable Image](https://gparted.org). GParted is a free partition editor for graphically managing your disk partitions. Using this tool, you can easily grow or shrink your HDD drive (also on a VM).
3.  Insert this Live CD into the primary Optical drive of your VM. Make sure that boot order is configured so that your optical drives are checked before all the other units.
4.  Start or reboot your Ubuntu VM.
5.  When it is initialized, choose default options for GParted.
6.  Using GParted GUI, extend your VM hard-disk (consider at least 50% of your current hard-disk size) and apply the changes.
7.  Exit from GParted (reboot your system).
8.  The system will ask you to remove the GParted Live CD. When done, press Enter to continue.

If these 8 steps have been followed properly, the issue has been solved: no more blank screen issue for your Ubuntu VM.

I hope this step-by-step tutorial has been helpful to solve your issue. If you have a black screen issue but the lack of free hard-disk space is not the root cause, then I suggest to check / repair all your installed packages using the boot menu. If you still have the same issue, feel free to leave a comment with all the details and we will be happy to help you.