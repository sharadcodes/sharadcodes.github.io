---
title: "Contact Me"
subtitle: ":loudspeaker:"
layout: page_with_sidebar
---

<form name="CONTACT FORM" method="POST" data-netlify="true">
	<div class="form-group">
		<label for="name">Name</label>
		<input type="text" class="form-control" name="Name" id="name" placeholder="Captain America" />
	</div>
	<div class="form-group">
		<label for="email">Email address</label>
		<input
			type="email"
			class="form-control"
			id="email"
            placeholder="captain@avengers.com"
            name="Email"
		/>
	</div>
	<div class="form-group">
		<label for="query">Your message</label>
		<textarea name="Message" class="form-control" id="query" rows="3" placeholder="Make me a webapp, website, app ..."></textarea>
    </div>
    <button type="submit" class="btn btn-danger block">Send Message</button>
</form>
