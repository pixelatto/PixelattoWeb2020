---
layout: post
title: New Update (2.8.0) - "Reliable card rendering and new sample project"
date: 2019-12-19T11:11:52.790Z
categories: PatchNotes
---
<!--StartFragment-->

Hi, CardCreators!\
\
We started this update to be only a small hotfix/update for the rendering, but turned out to be a bigger update with lots of improvements that will ease your experience creating cards.\
Because of the nature of the update we needed to do some breaking changes that will change how your cards are rendering now to match how you create them in blueprint mode.\
\
**Important**: In order to update your existing projects, all you need to do is open a project and enter in edit mode on each blueprint your project contains. It's possible you need also to update the padding of your panels if you did use them (see changelog below). That's all, all the new projects will use the new card render automatically and should render perfectly.\
\
This update is released in the ***beta*** branch (see below at the bottom for more info).\
\
Hope you enjoy it!

**Breaking Improvements**

* Fix card rendering with panels not being the same size as it was in blueprint mode. Now the cards display and export the same as you design them in blueprint mode.
* Fix padding values (now are consistent). Values are in percentage of the panel, before it was the percentage of the distance for the shorter side of the panel.



**New Features**

* New tutorial on [how use the variables feature to embed icons and text in your card text panels](https://steamcommunity.com/sharedfiles/filedetails/?id=1940349060).
* New TresDeck sample project.



Improvements

* Change default spacing on new layers to 0.
* Doubled the minimum size of the line handle when resizing panels in blueprint mode.
* Change default spacing on the default blueprint to 0.
* Updated internal values in the default blueprint for the new card rendering.
* Updated internal values in sample projects for the new card rendering.



**Bugfixes**

* Fix icon picker dialog recent icons overlapping the dialog text.
* Fix localized label not appearing after export is finished.

\
\
\
\
\
Because of the two breaking improvements, we'll hold the update in the beta branch for some time and then update the master branch, moving the current version in master branch (2.7.1) into a new "legacy 2019" branch.\
\
\
\[Updated] This update is released in the ***master*** branch. If you want to use an older app version, you can learn [how to change to a beta or legacy branch in steam here](https://steamcommunity.com/linkfilter/?url=https://steamcommunity.com/sharedfiles/filedetails/?id=1129108624).

<!--EndFragment-->