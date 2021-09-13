<script>
	import data from '../../data/data.json';

	const projects = data.projects;
</script>

<section class="work section" id="work">
	<h2 class="section-title">Work</h2>

	<div class="work__container bd-grid">
		{#each projects as project}
			<div class="work__project">
				<img class="work__img" src={project.imageUrl} alt={project.alt} loading="lazy" />
				<div class="work__details">
					<div class="work__name">
						<a href={project.websiteUrl} target="_blank">
							{project.name}
						</a>
					</div>
					<div class="work__description">
						{project.description}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.work {
		&__container {
			row-gap: 2rem;
		}

		&__project {
			box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
			border-radius: 0.5rem;
			overflow: hidden;
			max-width: 360px;
			margin: 0 auto;
		}

		&__img {
			width: 100%;
			height: 200px;
			object-fit: contain;
			transition: 1s;
			cursor: pointer;
			transform: scale(0.9);
			display: block;

			&:hover {
				transform: scale(1);
			}
		}

		&__details {
			padding: 12px;
		}

		&__name {
			a {
				color: var(--first-color);
				font-weight: var(--font-semi);

				&:hover {
					text-decoration: underline;
				}
			}
		}

		&__description {
			font-size: var(--small-font-size);
		}
	}

	@media screen and(min-width: 576px) {
		.work {
			&__container {
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 2rem;
			}
		}
	}

	@media screen and(min-width: 768px) {
		.work {
			&__container {
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 2rem;
			}
		}
	}
</style>
