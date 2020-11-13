---
layout: post
title: Card Creator - The project structure and how to duplicate it
description: Learn about the different elements of a project structure and how to duplicate projects properly
keywords: card creator guide, card creator duplicate project, card creator tutorial, card creator project files
date: 2020-06-24T10:02:55.638Z
tags: Guides
image: duplicate_project.png
hide_hero: true
author: Fali Ronda
---

## Project Structure

When you create a new project in Card Creator, it will create several folders and files inside your project folder:

![The%20project%20structure%20and%20how%20to%20duplicate%20it%2046d5258bc7454b8f9069cfe2695e392a/Untitled.png](/img/upload/untitled.png)

Let's talk about these elements.

### .cc file

This file **is not the project**. Card Creator uses this file as an "anchor" to open your project, but all the information about your blueprints, cards, images, etc, are not contained here.

### Assets folder

This folder content will be like the following picture:

![The%20project%20structure%20and%20how%20to%20duplicate%20it%2046d5258bc7454b8f9069cfe2695e392a/Untitled%201.png](/img/upload/untitled-1-.png)

Here you can organize your icons and images, by creating folders inside the icon_gallery, image and images_inlines ones, in order to use them inside Card Creator.

### Backups

Card Creator creates periodically backups every five minutes of your work inside this folder. You can learn more about how to restore them by following the [How to restore your projects using backups](https://www.notion.so/How-to-restore-your-projects-using-backups-31f42a2c1ebc4b429883a0b7b6a8e415)  guide.

![The%20project%20structure%20and%20how%20to%20duplicate%20it%2046d5258bc7454b8f9069cfe2695e392a/Untitled%202.png](/img/upload/untitled-2-.png)

### Data

Here are located **really important json files**, as those are the ones that define your blueprints, cardsets, variables, etc. This files are the ones copied by card Creator during the backup process.

![The%20project%20structure%20and%20how%20to%20duplicate%20it%2046d5258bc7454b8f9069cfe2695e392a/Untitled%203.png](/img/upload/untitled-3-.png)

### Output

Card Creator will generate here a new folder everytime you do a new export of a cards set, creating all the exported files inside it.

### Temp

Just temporally files, nothing to worry about!

## Duplicating a project

Taking into account how the projects structure works, duplicating a project is a **really simple** process:

**1)** **Copy the whole folder of your project** (which includes the .cc file and all the rest of folders and files inside them).

**2)** Enjoy your new project!