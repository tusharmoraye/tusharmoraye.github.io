<script>
	import data from '../../data/data.json';
</script>

<footer class="footer">
	<p class="footer__title">{data.name}</p>
	<div class="footer__social">
		<a href={data.socialLinks.linkedin} target="_blank" class="footer__icon">
			<i class="bx bxl-linkedin" />
		</a>
		<a href={data.socialLinks.github} target="_blank" class="footer__icon">
			<i class="bx bxl-github" />
		</a>
		<a href={data.socialLinks.twitter} target="_blank" class="footer__icon">
			<i class="bx bxl-twitter" />
		</a>
		<a href={data.socialLinks.producthunt} target="_blank" class="footer__icon">
			<i class="bx bxl-product-hunt" />
		</a>
	</div>
	<p>&#169; {new Date().getFullYear()} copyright all right reserved</p>
</footer>

<style lang="scss">
	.footer {
		background-color: var(--second-color);
		color: #fff;
		text-align: center;
		font-weight: var(--font-semi);
		padding: 2rem 0;

		&__title {
			font-size: 2rem;
			margin-bottom: var(--mb-4);
		}

		&__social {
			margin-bottom: var(--mb-4);
		}

		&__icon {
			font-size: 1.5rem;
			color: #fff;
			margin: 0 var(--mb-2);
		}
	}
</style>
