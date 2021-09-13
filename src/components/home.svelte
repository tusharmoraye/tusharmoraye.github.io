<script>
	import HeroImage from './heroImage.svelte';
	import data from '../../data/data.json';
</script>

<section class="home bd-grid" id="home">
	<div class="home__data">
		<h1 class="home__title">
			Hi,<br />I'am <span class="home__title-color">{data.name}</span><br />
			{data.designation}
		</h1>

		<div class="home__action-btns">
			<a href="#contact" class="button">Contact</a>

			<div class="home__social">
				<a href={data.socialLinks.linkedin} class="home__social-icon" target="_blank">
					<i class="bx bxl-linkedin" />
				</a>
				<a href={data.socialLinks.github} class="home__social-icon" target="_blank">
					<i class="bx bxl-github" />
				</a>
				<a href={data.socialLinks.twitter} class="home__social-icon" target="_blank">
					<i class="bx bxl-twitter" />
				</a>
				<a href={data.socialLinks.producthunt} class="home__social-icon" target="_blank">
					<i class="bx bxl-product-hunt" />
				</a>
			</div>
		</div>
	</div>

	<div class="home__img">
		<HeroImage />
	</div>
</section>

<style lang="scss">
	.home {
		row-gap: 1rem;
		position: relative;

		&__title {
			font-size: var(--big-font-size);
			margin-bottom: var(--mb-5);
			margin-top: var(--mb-xl);

			&-color {
				color: var(--first-color);
			}
		}

		&__social {
			display: flex;
			margin-top: 24px;

			&-icon {
				width: max-content;
				font-size: var(--h2-font-size);
				color: var(--second-color);

				&:hover {
					color: var(--first-color);
				}

				&:not(:last-child) {
					margin-right: var(--mb-4);
				}
			}
		}

		&__img {
			position: absolute;
			right: 0;
			top: 40px;
		}

		&__action-btns {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media screen and(min-width: 576px) {
		.home {
			&__social {
				position: static;
				flex-direction: row;
				padding: 0;
				margin-left: 40px;
				margin-top: 0;

				&-icon {
					margin-bottom: 0;
					font-size: 2rem;

					&:not(:last-child) {
						margin-right: var(--mb-4);
					}
				}
			}

			&__action-btns {
				align-items: center;
				flex-direction: row;
			}
		}
	}

	@media screen and(min-width: 768px) {
		.home {
			&__title {
				margin-top: var(--mb-6);
			}

			&__img {
				top: 50%;
				transform: translate(0, -50%);
			}
		}
	}
</style>
