---
layout: post
title: I created World's smallest static site genertor in 2 hours.
categories: python
author: Sharad Raj
image: /assets/uploads/old-computer-minimalism-2e-1336x768.jpg
date: '2020-01-20 12:00:00'
---
I have used almost all the popular static site generators and I always wanted to make one.

As my vacations were going on and I was thinking of doing some project stuff, It was the right time to make it happen so I started.I wanted it to be almost similar to Jekyll and also compatible with Netlify CMS. 

I had experience of development of SSG using C++ and it helped me in achieving what I wanted in almost 2 hours. 

## HIGHLIGHTS OF my_py_site

  * YML Front matter is supported
  * Jinja 2 Templates
  * Almost similary to Jekyll
  * Deploy on Netlify (Just fork and add it to netlify)
  * Compatible with Netlify CMS
  * Made in India :smile:

I think [my_py_site](https://github.com/sharadcodes/my_py_site) is the most 
simplest and lightweight static site generator out there, with less than
90 lines of code.

I'll request you all to show some ♥ to the project and share it in the community. Also don't forget to star the repo https://github.com/sharadcodes/my_py_site

The development will go further and enhancements will be done in the future to make things more easy.

# How to use

After cloning or downloading the [repo](https://github.com/sharadcodes/my_py_site) just run
```
pip install -r requirements.txt
python my_py_site.py
```
and the site will be generated.

## [Live Demo](https://mypysite.netlify.com/)

**my_py_site** supports multiple blogs and pages, you dont have to do modify the `my_py_site.py` file.

## Configuration file

The contents of this file can be accessed from templates which are inside `templates` directory. You will have to use the **Jinja2** syntax for accessing the data of `config.json` file.

### Example

```json
{
  "site": {
    "title": "My Awesome Site",
    "author": "Sharad Raj"
  },
  "social": [
    {
      "site": "twitter",
      "id": "iamsharadraj"
    },
    {
      "site": "github",
      "id": "sharadcodes"
    }    
  ]
}
```

In the above config you for accessing the value of `title` inside `site` you will do

```python
{{data.site.title}}
```

in the templates. **data** is global and it is needed for accessing the values of `config.json` file

Similarly for looping over an array of objects like `social` you will do

```python
{% for i in data.social %}
  {{ i.site }}
  {{ i.id }}
{% endfor %}
```

## Let us take example of this config file

```json
{
    "site": {
        "title": "My Py Site",
        "author": "Dojo",
        "year": "2020"
    },
    "nav_links": [
        {
            "title": "Home",
            "url": "index.html"
        },
        {
            "title": "About",
            "url": "about.html"
        }
    ]
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{data.site.title}} | {{data.page.title}}</title>
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>

  <body>
    <nav>
      {% for i in data.nav_links %}
      <a href="/{{i.url}}">{{ i.title }}</a>
      {% endfor %}
    </nav>

    <section class="hero">
      <p class="a-title">
        {{data.page.title}}
      </p>
      <p class="a-date">{{data.page.date or data.page.datetime}}</p>
      <p class="a-author">{{data.page.author or data.site.author}}</p>
    </section>

    <div class="content markdown-body">
      {{data.page.content}}
    </div>

    <footer>
      <p>
        &copy; {{data.site.year}} {{data.site.title}}
      </p>
    </footer>
  </body>
</html>
```
[Actual code example](https://github.com/sharadcodes/my_py_site/blob/master/templates/post.html)

**Anything inside `config.json` can be accessed from any of the templates**

## List of collections

All the meta info about files inside the collections folder can be accessed from any page which is inside `pages` folder.
The meta information about files is inside `data.collections` object which is an array of objects. The YML front matter of the page is also available.

### Example

To access list of articles inside `posts` folder you will do

```
{% for i in data.site.collections %}
  {{i.url}}
  {{i.title}}
  {{i.author}}
  {{i.date or i.datetime}}
{%endfor%}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{data.site.title}} | {{data.page.title}}</title>
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>

  <body>
    <nav>
      {% for i in data.nav_links %}
      <a href="/{{i.url}}">{{ i.title }}</a>
      {% endfor %}
    </nav>

    <section class="hero center">
      {{data.page.title}}
    </section>

    <main>
      {% for i in data.site.collections %}
      <a href="{{i.url}}" style="text-decoration: none;">
        <div class="article">
          <p class="a-title">
            {{i.title}}
          </p>
          <p class="a-date">{{i.date or i.datetime}}</p>
        </div>
      </a>
      {%endfor%}
    </main>

    <footer>
      <p>
        &copy; {{data.site.year}} {{data.site.title}}
      </p>
    </footer>
  </body>
</html>
```

[Actual code example](https://github.com/sharadcodes/my_py_site/blob/master/templates/blog.html)

---

## For any help
https://www.codingindian.codes/contact

## Github
https://github.com/sharadcodes

## Twitter
https://twitter.com/iamsharadraj
