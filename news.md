---
title: News
layout: default
---
<div class="news" markdown="0">
	{% for post in site.posts %}
		<div class="news_post">
			<div class="news_header">
				<p><small>{{ post.date | date: "%e %b %y") }}, <span class="disqus-comment-count" data-disqus-identifier="{{ post.id }}"></span></small></p>
				<h3><a href="{{post.url}}">{{ post.title }}</a></h3>
			</div>
			<div class="news_body">
				{% assign content = post.content %}
				{% assign parts = content | split: '<!-- more -->' %}
				{{ parts | first }}
			</div>
			<div class="news_footer">
				{% if parts.size > 1 %}<a href="{{post.url}}">Read more ...</a>{% endif %}
			</div>
		</div>
	{% endfor %}
</div>
