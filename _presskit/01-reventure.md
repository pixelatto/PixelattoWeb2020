---
title: Reventure
permalink: /presskit/reventure/
layout: empty

theme_text: is-secondary
type: game
---

{% capture product_data %}
  {% assign product = site.data.products | where_exp:"item","item.code == 'reventure'" | first %}
{% endcapture %}

{% include product-presskit.html content=product_data %}