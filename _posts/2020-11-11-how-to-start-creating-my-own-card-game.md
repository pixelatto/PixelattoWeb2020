---
layout: post
title: How to start creating my own card game
summary: Discover different approaches for creating your own card game
date: 2020-11-11
author: Fali Ronda
hide_hero: "true"
image: create-card-game.jpg
tags:
  - Guides
---

### "I'm going to create my own Card Game!... but how?"

There are several options when searching for "how to make a card game", "design card game" or "card creation tool" at Google, but most of them are not oriented to games and there are several tools for doing it, so we ended up testing them and creating **[Card Creator](http://www.pixelatto.com/products/card-creator/)** later.

Those tools have very different feature sets and goals, so depending on what your project is about you will find this or that more useful. Let's start summarizing them!

<hr>

## nanDECK

Let's start with one of the most powerful ones:[ nanDECK](http://www.nand.it/nandeck/), since this tool allows you to create different decks of cards with custom layouts composed of images, texts, icons, polygons, etc.

![nanDECK card preview](/img/upload/nandeck_main_preview.png)

For creating our deck of cards, we will use mainly two screens:

- nanDECK main screen: where we will configure our project, preview our cards, handling decks and printing projects.
- Visual editor: here we can set up our cards by adding images and texts, with the support of the project excel file, where we will store all the cards data for linking it later with different areas.

![nandeck_excel](/img/upload/nandeck_excel.png)

This last fact it's important, as we will need first to set up this excel with the fields, texts and links to our images to start editing our cards. After that, we need to add a bit of code (although there is a guide available, but it has 175 pages!) for being able to start creating our cards.

During our test using nanDECK, we reach the following conclusions:

- Pros
  - Flexibility and fast edition of the cards, thanks to the visual editor and the excel where all the data is located
  - Handling of several decks as projects inside the application
  - Preview and print your cards in a easy way
  - It's free!
- Cons
  - There are no custom templates or blueprints that we could use to define the cards layout of our different sets, so we can make changes that are applied to all these cards at once
  - Lack of digital integrations: project structure does not support version control (repository) for collaborating with others nor digital testing (e.g. with Tabletop Simulator)
  - At the end, the project is developed using code, which makes harder to achieve specific results and is not trivial for the average user
  - The whole interface is out of date, there are tons of buttons and options that require time to learn
  - The information is not always available in the screen, which makes hard to figure out how your decks are looking in order to iterate

<hr>

## Tools based on existing games

On the other hand, there is a set of tools that are very similar regarding their functionality and goal, as they provide the user with card templates from existing games, like Magic the gathering or Yu-Gi-Oh!

Let's cover a couple of them quickly: [Magic Set Editor](http://magicseteditor.sourceforge.net/) and [Yu-Gi-Oh! Card Maker](https://www.aygocm.co.uk/).

As mentioned above, these tools provide the user with different templates from other games, which is very handy in case you are looking for extending those for playing with your friends or something similar.

![magic_1](/img/upload/magic_1.gif)

Starting with Magic Set Editor, it provides templates for:

- Magic the Gathering
- Magic Vanguard
- Yu-Gi-Oh!
- VS System

All you need to do is: to install the program, open it, choose create a new deck and the game and template you want to use for your card.

![magic_2](/img/upload/magic_2.PNG)

It is very similar to Yu-Gi-Oh! Card Maker, where at opening the program we will see a lot of templates from Yu-Gi-Oh! card game, so we can select the one we want and start customizing the images and texts to create our card set to extend the game or to create our own personalized deck.

![anime_yugioh](/img/upload/anime_yugioh.png)

In both applications we found the same pros and cons:

- Pros
  - No code and very easy to use for an extend public
  - Very straightforward: since are based on existing games, there is a lot of work already done on the templates
- Cons
  - Too much limited: we can just create cards similar to the existing games
  - UI outdated: It could be more friendly and fresh

<hr>

## Graphic design tools

There is also the option of using a graphic design software, like[ Photoshop](https://www.adobe.com/es/products/photoshop.html),[ Gimp](http://www.gimp.org.es/) or[ Inkscape](https://inkscape.org/), for creating our card game and printing them later.

This option results quite logic when thinking that graphics need to be done on these tools anyway, as other software oriented to card creation does not support graphic edition (are two different types of product indeed).

![photoshop](/img/upload/photoshop.jpg)

Our experience was that, for making the cards graphic design, these tools allow you to generate any layout you may want, with unlimited flexibility and with all the benefits of using a professional tool like Photoshop: "what could go wrong?".

While it is true that after checking the options so far this one seems to be the best for designing our cards, we will find the problems later, since handling dozens or even hundreds of cards in these kinds of software could result on a complete chaos, not to mention that making massive changes will become a nightmare of layers and independent texts and images.

![gimp](/img/upload/gimp.png)

At this point we went back in time and started thinking: "hmm, perhaps we should make our art assets using photoshop, but we should handle cards and decks with another tool similar to nanDECK...".

SPOILER: we were getting closer to the point we decided to make our own Card Creation software, [**Card Creator**](https://pixelatto.com/products/card-creator/).

- Pros
  - 100% flexibility designing graphics for our cards
  - A lot of templates and resources already available on Internet
  - Accessible to an extensive public
- Cons
  - Handle tons of different types of cards with these tools would result in chaos
  - There is no support for making massive changes easily
  - For more professional results it might need deep learning of the tool
  - In short, these tools are designed for developing graphics, not for card games creation

<hr>

## Conclusion

If you read the spoiler above you probably know the answer. We needed a tool to generate the graphics, and that point is very clear, but we also wanted a tool that allows us to:

- Generate our own card templates (like the ones available for other games in Magic Set Editor) in a visual way, so we can change those affecting all our current cards in a deck.
- Handle different decks and create new cards easily based on these templates
- Make massive changes on the template or the data (like the excel/csv file at nanDECK)
- Collaborate with other remotely and to test it on digital platforms


<figure class="image is-16by9" style="border-radius: 30px 0px 30px 0px; overflow: hidden;">
    <iframe class="has-ratio" width="640" height="360"
        src="https://www.youtube.com/embed/liMw3yfeTdo?rel=0" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</figure>

So we have finally arrived... here is when we decided to make [**Card Creator**](http://www.pixelatto.com/products/card-creator/), the card creation tool that allows you to do all that and more! And this was its origin and the reason for its existence.