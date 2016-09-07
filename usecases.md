---
title: CYCLONE Use Cases
layout: default
---
# We deliver

{:.lead}
One of the main cornerstones of CYCLONE is the deployment of all of our developments in a production environment. In the following, we present our current CYCLONE use cases:

{% for usecase in site.usecases %}

{% assign cclean = usecase.content | strip_newlines %}

{% unless cclean  == "" %}
<h2>[{{ usecase.title }}]({{usecase.url}})</h2>

### {{ usecase.teaser }}
{% endunless %}

{% endfor %}

## Upcoming usecases

{% for usecase in site.usecases %}
{% assign cclean = usecase.content | strip_newlines %}
{% if cclean == "" %}
* {{ usecase.title }}
{% endif %}
{% endfor %}
