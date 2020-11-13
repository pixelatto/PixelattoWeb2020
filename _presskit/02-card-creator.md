---
title: Card Creator presskit | Information and media resources
description: Press and media information and resources about Card Creator
keywords: card creator presskit, card creator information, card creator press, card creator media, card creator resources

permalink: /presskit/card-creator/
layout: empty

theme_text: is-primary
type: app
---

{% capture product_data %}
  {% assign product = site.data.products | where_exp:"item","item.code == 'card-creator'" | first %}
{% endcapture %}

{% include product-presskit.html content=product_data %}