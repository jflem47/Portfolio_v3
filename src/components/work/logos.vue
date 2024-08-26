<template>
<div class="logos-grid">
	<a href="https://www.coesio.com" target="_blank">
		<img class="logo-el" src="../../assets/coesio.svg"/>
	</a>
	<a href="https://www.au1884.ca" target="_blank">
		<img class="logo-el" src="../../assets/AU-1884-PLAISIRS-SAVEURS.png.webp"/>
	</a>
	<a href="https://www.lutherielacasse.com" target="_blank">
		<img class="logo-el" src="../../assets/lutherie_lacasse.webp"/>
	</a>
	<a href="https://mspmusique.com" target="_blank">
		<img class="logo-el" src="../../assets/msp_logo.png"/>
	</a>
	<a href="https://www.diffusio.ca" target="_blank">
		<img class="logo-el" src="../../assets/referencementsite.png"/>
	</a>
	<a href="https://www.iadessolutions.ca" target="_blank">
		<img class="logo-el" src="../../assets/Logo-IA-des-solutions-tr-309x155.png"/>
	</a>
</div>
</template>

<script setup>

</script>

<style scoped>
.logos-grid {
	display: grid;
	justify-content: space-evenly;
	align-items: center;
	grid-template-columns: repeat(4, 200px);
	padding: 20px;
}

.logo-el {
	width: 150px;
	margin: 30px;
}

.logo-el:hover {
	scale: 1.2;
	transition-duration: 200ms;
}

@media screen and (width < 1000px) {
	.logos-grid {
		grid-template-columns: repeat(3, 200px);
	}
}

@media screen and (width < 700px) {
	.logos-grid {
		grid-template-columns: repeat(2, 200px);
	}
}

@media screen and (width < 500px) {
	.logos-grid {
		grid-template-columns: repeat(1, 200px);
	}
}
</style>