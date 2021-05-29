---
code: reventure-orbtale

title: |
    Reventure: Orbtale | The official Reventure tabletop game

subtitle: The official Reventure tabletop game about nudist chickens, unbalanced dragons and random nuclear explosions.
description: The fantasy tabletop game about nudist chickens, unbalanced dragons and random nuclear explosions.

keywords: reventure, orbtale, kickstarter, tabletop game, card game

permalink: /store/reventure-orbtale/
layout: empty

#theme_text: is-primary
type: game
---

{% assign product = site.data.products | where_exp:"item","item.code == 'reventure-orbtale'" | first %}
{% include product.html content=product_info %}
