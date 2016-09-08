---
title: News
layout: default
---
<div class="news" markdown="0">
      {% for post in site.posts %}
	    <div class="news_post">
		  <span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-newspaper-o fa-stack-1x fa-inverse"></i></span>
		  <span>
			<p class="post_date">{{ post.date | date: "%e %b %y") }}, <span class="disqus-comment-count" data-disqus-identifier="{{ post.id }}"></span></p>
			<h3><a href="{{post.url}}">{{ post.title }}</a></h3>
			<div class="news_body">
			      {% if post.teaser %}
				    <h4>{{ post.teaser }}</h4>
			      {% endif %}
			</div>
		  </span>
	    </div>
      {% endfor %}
</div>
