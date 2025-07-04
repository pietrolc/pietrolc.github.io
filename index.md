---
layout: default
title: C++ coding challenges & programming tutorials
excerpt: "C++ blog, full of tutorials and coding challenges. Book a call with Pietro to discuss about C++ and more."
---

<h1>C++ coding challenges and programming tutorials</h1>

<style>
.featured-posts{
  margin-top: 20px;
}

.all-posts ul,
.featured-posts ul {
  list-style: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
}

.all-posts li,
.featured-posts li {
  margin-bottom: 20px; /* Add spacing between list items */
  padding-bottom: 20px;
  border-bottom: 1px solid #eee; /* Add a subtle divider */
}

/* Remove the bottom border from the last item */
.all-posts li:last-child,
.featured-posts li:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

</style>

<section class="featured-posts">

  <h2>C++ Coding Challenges &amp; Solutions</h2>

  <ul>
    {% assign featured_posts = site.posts | where: "featuredPost", true %}
    {% for post in featured_posts %}
      <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
          {% if post.image %}
            <img
              src="/images/blank.png"
              srcset="
                {{ site.baseurl }}{{ post.image }} 320w,
                {{ site.baseurl }}{{ post.image }} 640w,
                {{ site.baseurl }}{{ post.image }} 960w"
              sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 960px"
              data-echo="{{ site.baseurl }}{{ post.image }}"
              alt="{{ post.title }}" class="responsive-image">
          {% endif %}
          {{ post.title }}
        </a>
        <small>{{ post.date | date: "%B %-d, %Y" }}</small>
        {% if post.excerpt %}
        <p>{{ post.excerpt }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</section>

<section class="all-posts">

  <h3>All Other Posts</h3>

  <ul>
    {% assign other_posts = site.posts | where_exp:"post", "post.featuredPost != true" %}
    {% for post in other_posts %}
      <li>
        <a href="{{ post.url | prepend: site.baseurl }}">
          {% if post.image %}
            <img
              src="/images/blank.png"
              srcset="
                {{ site.baseurl }}{{ post.image }} 320w,
                {{ site.baseurl }}{{ post.image }} 640w,
                {{ site.baseurl }}{{ post.image }} 960w"
              sizes="(max-width: 600px) 320px, (max-width: 1200px) 640px, 960px"
              data-echo="{{ site.baseurl }}{{ post.image }}"
              alt="{{ post.title }}" class="responsive-image">
          {% endif %}
          {{ post.title }}
        </a>
        <small>{{ post.date | date: "%B %-d, %Y" }}</small>
        {% if post.excerpt %}
        <p>{{ post.excerpt }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</section>

{% include mailchimp_form.html %}

{% include share_box.html %}
