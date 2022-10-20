---
code: reventure

meta_title: Reventure FAQ
permalink: /faq/reventure/
layout: empty

theme_text: is-secondary
type: game
---



{% capture faq_data %}
    {% assign product = site.data.products | where_exp:"item","item.code == page.code" | first %}
{% endcapture %}

{% include faq.html content=faq_data %}