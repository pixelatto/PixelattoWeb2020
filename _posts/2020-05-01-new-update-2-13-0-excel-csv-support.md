---
layout: post
title: Card Creator - New Update (2.13.0) - Excel & CSV support
keywords: card creator guide, card creator excel, card creator csv, card creator tutorial

date: 2020-05-01T08:16:38.105Z
tags: [PatchNotes, Guides]
image: /img/upload/card-creator-patch-notes-2-13-0.png
hide_hero: true
description: Now you can export/import your project using excel/csv files
author: Juan Delgado
---
Hi CardCreators !

The long awaited import & export feature is finally here! You can now import and export data from/to your cardsets and between projects. This feature has been made to be flexible so it can adapt to your own workflow and needs. **Please read more about this update below after the changelog.**

**New Features**

* Import and export data from/to Excel files.
* Import and export data from/to CSV files.

**Improvements**

* Updated all sample projects and default blueprint.

**Bugfixes**

* Fix project name not being saved.
* Fix cardset not rendering on rare cases.
* Fix font not using fallback when not defined in cardset panels.
* Fix embedded image scaling values being ignored.

Import/export data from/to Excel & CSV


First, you need to define the panels you want to import or export its data. To do that, go to the blueprint mode and open the Advanced options in the panel, then write a field label. That label will be used to identify the data as columns in the Excel / CSV.

Also, very important, if you want to import data and update cards (not only add them), you need to define a way to identify each card, to do so, you need to check the "Card ID" toggle On in the panel you want to be the ID of that card.

![](https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/28448748/b214491af6d8a4624b31a3dfd094d4fe833bdec0.png)

Once you have defined the panel names, you are ready to export or import your data! Go to the dropdowns in the navbar or the cardset. You can only export one cardset per CSV file (since they don't have "worksheets" as Excels do). You can import Excels in either XLSX or XLSM format (the old XLS format is not supported).

![](https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/28448748/0894a35c391feff5be6bd40e5c33bffc4de01640.png)

The first row (either in CSV or Excel worksheets) will always contain the panel names.

Optionally, if you name the **first** column "amount", that column will be used as the amount of that card on import. On export that column will be always created in addition of the other panel columns.

The worksheet names in Excels will be composed by the blueprint name + cardset name separated by the character **@**. When importing, the worksheet names should have the same format, example:

blueprintName@cardSetName

In addition, you need to keep in mind some limitations of the Excel format:

* Worksheet names max length is 31 characters.
* Worksheet names can't have any of the following chars **\[ ] * / \ ? :**


Worksheet those names doesn't follow this format **will be ignored on import**.

When importing Excels, the blueprint name (in the worksheet name) **needs to match an existing blueprint in the project**.

If the cardset name is found already in the project it *will update or add the new cards on import*, if not, *a new cardset will be created* with that name in the project.

That's all ! Hope you enjoy the new feature :)


---

📌 If you have feedback or want to report an issue, please join to our **[Discord server](http://discord.gg/pixelatto)** 💬\

📌 This update is released in the ***beta*** branch. [Learn how to change to another branch here](/blog/beta-and-legacy-versions).