let div = document.querySelector('#content');
for (let cssClass of div.classList) {
    console.log(cssClass);
}

let btn = document.querySelector('#btn');

function display() {
    alert('It was clicked!');
}

btn.addEventListener('click',display);


<form action="signup.html" method="post" id="signup">
	<h1>Sign Up</h1>
	<div class="field">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" placeholder="Enter your fullname" />
		<small></small>
	</div>
	<div class="field">
		<label for="email">Email:</label>
		<input type="text" id="email" name="email" placeholder="Enter your email address" />
		<small></small>
	</div>
	<button type="submit">Subscribe</button>
</form>
