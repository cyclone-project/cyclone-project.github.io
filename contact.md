---
title: Contact
layout: default
---
<h1>Ask us anything, we're happy to help you!</h1>

<section markdown="0">
	<script src="/assets/javascript/jquery.js"></script>
	<script type="text/javascript">
		//execute the function when the DOM is ready
		$(function() {
			//submit the form data
			$("#contactForm").submit(
					//submit handler
					function(event){ 
						// Stop form from submitting normally
						event.preventDefault();	
						// do some validation
						var $form = $( this ),
						url = $form.attr( "action" );

						//$( "#contactForm" ).serialize()
						var posting = $.post("mailto:contact@cyclone-project.eu");
						// somehow posting.done below or a callback function to the above method wont work
						var $inputs = $('#contactForm :input');

						var values = {};
						$inputs.each(function() {
							values[this.name] = $(this).val();
						});
						posting.always(function()
								{window.location ="mailto:contact@cyclone-project.eu?subject="+"CYCLONE Feedback from "+ values["name"]+"&body="+values["message"]+ "&cc=" + values["email"]}
						);
						$("#thankyou").html("<h2>Thank you for your message!</h2>");
					}
			);

		});
	</script>

	<form id="contactForm">
		<div class="form-group">
			<label for="name">Name</label>
			<input id="name" name="name" placeholder="Full Name" type="text" class="form-control">
		</div>
		<div class="form-group">
			<label for="name">E-mail</label>
			<input id="email" name="email" placeholder="E-mail Address" type="email" class="form-control">
		</div>
		<div class="form-group">
			<label for="name">Message</label>
			<textarea id="message" name="message" placeholder="Your Message to Us" class="form-control" rows="8"></textarea>
		</div>
		<div id="thankyou"></div>
		<button type="submit" class="btn btn-default">Send message</button>
	</form>
</section>
