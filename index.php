<?php require 'header.php' ?>

<!-- SECTION DIVIDER -->

<section id="hero">
	<div class="row">
		<div class="small-12 columns">
			<h1>Delorean Motor Company</h1>
			<h4>Back To The Future again...</h4>
		</div>
	</div>
</section>

<!-- SECTION DIVIDER -->

<section id="about" class="pad-und-md">
	<div class="row">
		<div class="small-12 medium-6 columns text-center">
			<h1 class="text-right">Lorem ipsum dolor</h1>
			<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi necessitatibus architecto ratione reprehenderit, sapiente esse est doloribus quam. Magni, impedit veniam? Veritatis laborum ad iure a aperiam assumenda. Eligendi, ipsa!</p>
			<a href="#" class="button">Buy now</a>
		</div>
		<div class="small-12 medium-6 columns">
			<img src="img/delorean-lat.jpg">
		</div>
	</div>
</section>

<!-- SECTION DIVIDER -->

<section id="gallery">
	<div class="row expanded">
		<div class="small-12 small-up-1 medium-up-3 columns">
			<div class="column">
				
			</div>
			<div class="column">
				<div class="claim small-10 small-push-1 columns">
					<h3 class="text-center">Come and Meet</h3>
					<hr>
					<h1 class="text-center">DELOREAN</h1>
				</div>
			</div>
			<div class="column">
				
			</div>
		</div>
	</div>
</section>

<!-- SECTION DIVIDER -->

<section id="points">
	<div class="row">
		<div class="small-12 columns">
			<h1>Our Services</h1>
		</div>
		<div class="small-12 medium-4 columns">
			<img src="img/d1.jpg" alt="">
			<label>Lorem ipsum dolor</label>
		</div>
		<div class="small-12 medium-4 columns">
			<img src="img/d2.jpg" alt="">
			<label>Lorem ipsum dolor</label>
		</div>
		<div class="small-12 medium-4 columns">
			<img src="img/d3.jpg" alt="">
			<label>Lorem ipsum dolor</label>
		</div>
	</div>
</section>

<!-- SECTION DIVIDER -->

<section id="title-2" class="pad-und-lg">
	<div class="row">
		<div class="small-10 small-push-1 medium-6 medium-push-3 large-4 large-push-4 columns">
			<h1 class="text-center">Lorem ipsum dolor sit amet</h1>
		</div>
	</div>
</section>

<!-- SECTION DIVIDER -->

<section id="contacto" class="pad-und-sm">
	<div class="row">
		<div class="small-10 small-push-1 medium-6 medium-push-3 large-4 large-push-4 columns text-center">
			<form id="form-contacto">
				<div class="input-group"><label for="nombre">Nombre</label><input required type="text" id="nombre" name="nombre"></div>
				<div class="input-group"><label for="correo">Email</label><input required type="email" id="correo" name="correo"></div>
				<div class="input-group"><label for="telefono">Teléfono</label><input type="tel" id="telefono" name="telefono"></div>
				<div class="input-group"><label for="mensaje">Mensaje</label><input type="text" id="mensaje" name="mensaje"></div>
				<input type="submit" class="display-none hide">
				<button type="button" class="button" onclick="send()">Enviar</button>
			</form>
		</div>
	</div>
</section>
<?php require 'footer.php' ?>