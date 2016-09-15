---
title: CYCLONE Use Cases
layout: default
teaser: One of the main cornerstones of CYCLONE is the deployment of all of our developments in a production environment. On this page, we present our current CYCLONE use cases.
---
{% for usecase in site.usecases %}

{% assign cclean = usecase.content | strip_newlines %}

{% unless cclean  == "" %}
<h1>[{{ usecase.title }}]({{usecase.url}})</h1>

{{ usecase.teaser }}

{% endunless %}

{% endfor %}

# More information on our [use case portal](https://cyclone.france-bioinformatique.fr/usecases/)

You will find **use case workflows**, **user stories**, and **reqirements**.

{:.previewlink}
[![Use case portal](/assets/images/use_case_portal.png)](https://cyclone.france-bioinformatique.fr/usecases/)

# Upcoming usecases

{% for usecase in site.usecases %}
{% assign cclean = usecase.content | strip_newlines %}
{% if cclean == "" %}
* {{ usecase.title }}
{% endif %}
{% endfor %}
