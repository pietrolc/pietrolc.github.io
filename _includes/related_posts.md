<style>
.rect {
    border-top: 3px solid #333;
    border-bottom: 3px solid #333;
    padding-top: 15px;
    margin:0 auto;
}

.rel {
    width: 200px;
    display: inline-block;
    padding: 5px;
    opacity: 0.8;
}

.rel hover {
     opacity: 1;
}
</style>

{% assign maxRelated = 4 %}
{% assign minCommonTags = 1 %}
{% assign maxRelatedCounter = 0 %}
{% assign relatedPostsExist = false %}
{% assign relatedPostsContent = '' %}

{% for post in site.posts %}
  {% assign sameTagCount = 0 %}
  {% assign commonTags = '' %}

  {% for tag in post.tags %}
    {% if post.url != page.url %}
      {% if page.tags contains tag %}
        {% assign sameTagCount = sameTagCount | plus: 1 %}
        {% capture tagmarkup %} <span class="label label-default">{{ tag }}</span> {% endcapture %}
        {% assign commonTags = commonTags | append: tagmarkup %}
      {% endif %}
    {% endif %}
  {% endfor %}

  {% if sameTagCount >= minCommonTags %}
    {% assign relatedPostsExist = true %}
    {% capture relatedPost %}
        <a href="{{ site.baseurl }}{{ post.url }}">
              <div class="rel">
                  <h5>{{ post.title }}</h5>
                  <img width="100%" src="{{ site.url }}{{ site.baseurl }}{{ post.image }}">
              </div>
        </a>
    {% endcapture %}
    {% assign relatedPostsContent = relatedPostsContent | append: relatedPost %}
    {% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
    {% if maxRelatedCounter >= maxRelated %}
      {% break %}
    {% endif %}
  {% endif %}
{% endfor %}

{% if relatedPostsExist %}
<div class="rect">
  {{ relatedPostsContent }}
</div>
{% endif %}