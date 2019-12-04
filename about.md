---
layout: default
title: Sharad Raj
image: assets/uploads/pro.jpg
---


<div id="gd"> 
<img id="dp" alt="{{site.data.owner.name}}" src="{{site.baseurl}}/assets/uploads/{{site.data.owner.dp}}">
<p>
I'm a passionate developer and a student, learning to be a giant. 
I love making projects, having fun and enjoy playing video games.
<br/>
I am most skilled in ReactJS, NodeJS, ExpressJS and Drinking Cold Coffee.
I was selected as one of the student receiving the Google India Challenge Scholarship in the year 2018.
I'm currently doing freelancing and side projects in API development using NodeJS & Python.
</p>
</div>

<style>

#gd{
    display: grid;
    grid-template-columns: 1fr 5fr;
}

#dp{
    border-radius: 100%;
    max-width: 30vh !important;
    padding: 1rem;
}

@media screen and (max-width: 550px){
    #gd{
        display: flex;
        flex-direction: column;
    }

    #dp{
        position: relative;
        left: 0;
        right: 0;
        margin: auto;
        margin-top: -72px !important;
    }
}
</style>