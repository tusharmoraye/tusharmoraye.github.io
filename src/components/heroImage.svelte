<script>
	import data from '../../data/data.json';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 200 187"
	class="hero-image"
>
	<mask id="mask0" mask-type="alpha">
		<path
			d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547          130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775          97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666          0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
		/>
	</mask>
	<g mask="url(#mask0)">
		<path
			d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403          129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028          -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
		/>
		<image x="-40" y="10" class="hero-image__img" xlink:href={data.imageUrl.withColorBackground} />
	</g>
</svg>

<style lang="scss">
	.hero-image {
		width: 200px;
		fill: var(--first-color);

		&__img {
			width: 300px;
		}
	}

	@media screen and(min-width: 576px) {
		.hero-image {
			width: 250px;
		}
	}

	@media screen and(min-width: 992px) {
		.hero-image {
			width: 350px;
		}
	}
</style>
