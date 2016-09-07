---
title: Contacts
layout: page
---
<h1>Ask us anything, we're happy to help you!</h1>

{:.lead}
Here is a list of people from our project, sorted by their area of expertise. If in doubt, [Mathias](#mathias-slawik) and [Yuri](#yuri-demchenko) will gladly respond via Skype or email.

<script>
// http://stackoverflow.com/a/92819
function imgError(image) {
  image.onerror = "";
  image.src = "/assets/images/CYCLONE-LOGO-WHITE.png";
  image.style = "margin-top: 1.25em";
  return true;
}
</script>

{% assign topics = site.array %}
{% assign topics_by_person = site.data.contacts | map: 'to_liquid' | map: 'Topics' %}

{% for topic in topics_by_person %}
{% assign person_topics = topic | split: "|" %}
{% for person_topic in person_topics %}
{% assign topics = topics | push: person_topic %}
{% endfor %}
{% endfor %}

{% assign unique_topics = topics | uniq | sort %}

{% assign contacts = site.data.contacts | sort: 'Family' %}

{% assign partners = site.data.contacts | map: 'to_liquid' | map: 'Partner' | uniq %}

{% for topic in unique_topics %}
# {{ topic | slice: 1,100 }}

{% for contact in contacts %}
{% if contact.Topics contains topic %}
{% include contact.html %}
{% endif %}
{% endfor %}
{% endfor %}

{% comment %}

# Contacts by name

{% for contact in contacts %}
{% include contact.html %}
{% endfor %}

# Contacts by Partner

{% for partner in partners %}
## {{ partner }}
{% for contact in contacts %}
{% if contact.Partner contains partner %}
{% include contact.html %}
{% endif %}
{% endfor %}
{% endfor %}

{% endcomment %}
