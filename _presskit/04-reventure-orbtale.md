---
title: |
    Reventure: Orbtale | The official Reventure tabletop game

subtitle: The official Reventure tabletop game about nudist chickens, unbalanced dragons and random nuclear explosions.
description: The fantasy tabletop game about nudist chickens, unbalanced dragons and random nuclear explosions.

keywords: reventure, orbtale, kickstarter, tabletop game, card game

permalink: /presskit/reventure-orbtale/
layout: empty
---

{% capture product_data %}
  {% assign product = site.data.products | where_exp:"item","item.code == 'reventure-orbtale'" | first %}
{% endcapture %}

{% include product-presskit.html content=product_data %}
