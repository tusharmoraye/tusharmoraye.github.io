<script>
	import data from '../../data/data.json';
</script>

<section class="about section " id="about">
	<h2 class="section-title">About</h2>

	<div class="about__container bd-grid">
		<div class="about__img">
			<img src={data.imageUrl.withWhiteBackground} alt="" />
		</div>

		<div>
			<h2 class="about__subtitle">I'am {data.name}</h2>
			<p class="about__text">
				{data.about}
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	.about {
		&__container {
			row-gap: 2rem;
			text-align: center;
		}

		&__subtitle {
			margin-bottom: var(--mb-2);
		}

		&__img {
			justify-self: center;

			& img {
				width: 200px;
				border-radius: 0.5rem;
			}
		}
	}

	@media screen and(min-width: 768px) {
		.about {
			&__container {
				grid-template-columns: repeat(2, 1fr);
				align-items: center;
				text-align: initial;
			}

			&__img {
				& img {
					width: 300px;
					width: 400px;
				}
			}
		}
	}
</style>
