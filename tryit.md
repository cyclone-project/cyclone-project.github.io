---
layout: page
title: Try our software
---
# First, our stack.

The [tools section](/software.html) provides an overview about the **main components**, the **tools and libraries** we created to support DevOps, as well as **demo applications**.

Our [project deliverables](/deliverables.html) provide further information, especially about the **security architecture** (D4.1 & D4.3), **software-defined networking** (D5.1 and D5.2) as well as our approaches to **application description, brokering, and matchmaking** (D6.1 and D6.2). 

# Helping you is part of our job

We welcome any user of the CYCLONE stack and want to help you with any questions and challenges you may have. Please see our [contact page](/contact.html) for more information who to contact regarding the software.

# See our demo applications

{% assign in_demo_apps = false %}
{% for software in site.data.software %}
<div markdown="0">
  {% if in_demo_apps %}
    {% include software_item.html %}
  {% endif %}
  {% if software.Component == "Demo applications" %}{% assign in_demo_apps = true %}{% endif %}
</div> 
{% endfor %}

# Tryout our main components

## Use Slipstream for free on nuv.la

You can tryout **SlipStream** through the [Nuvla Online Deployment Platform](http://nuv.la) that gives free access to all of the functionality of the open source version of SlipSream. See the CYCLONE button besides the login form? You can use this to login via the Federation Provider 

## Testdrive the Open Service Compendium

While still in early alpha, the latest development version is always deployed under [http://dev.open-service-compendium.org/#/](http://dev.open-service-compendium.org/#/).

## Check out the [CYCLONE One-Click-Demo](http://demo.cyclone-project.eu)

It includes the [Cyclone Federation Provider](http://demo.cyclone-project.eu/auth) with a DemoIDP, the [Cyclone Logging System](http://demo.cyclone-project.eu/kibana) and a [demo Wordpress](http://demo.cyclone-project.eu/). Go to the [Github repository](https://github.com/cyclone-project/oneclickdemo) for more information and check it out at [http://demo.cyclone-project.eu](http://demo.cyclone-project.eu) or visit the components individually by following the links above.

