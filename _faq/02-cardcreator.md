---
code: card-creator

meta_title: Card Creator
permalink: /faq/card-creator/
layout: empty

theme_text: is-primary
type: app
---


{% capture faq_data %}
    {% assign product = site.data.products | where_exp:"item","item.code == page.code" | first %}
{% endcapture %}


{% include faq.html content=faq_data %}