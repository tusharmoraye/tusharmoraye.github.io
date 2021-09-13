<section class="skills section" id="skills">
	<h2 class="section-title">Skills</h2>

	<div class="skills__container bd-grid">
		<div>
			<h2 class="skills__subtitle">Profesional Skills</h2>
			<p class="skills__text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias
				architecto consectetur error eum eaque sit.
			</p>
			<div class="skills__data">
				<div class="skills__names">
					<i class="bx bxl-html5 skills__icon" />
					<span class="skills__name">HTML5</span>
				</div>
				<div class="skills__bar skills__html" />
				<div>
					<span class="skills__percentage">95%</span>
				</div>
			</div>
			<div class="skills__data">
				<div class="skills__names">
					<i class="bx bxl-css3 skills__icon" />
					<span class="skills__name">CSS3</span>
				</div>
				<div class="skills__bar skills__css" />
				<div>
					<span class="skills__percentage">85%</span>
				</div>
			</div>
			<div class="skills__data">
				<div class="skills__names">
					<i class="bx bxl-javascript skills__icon" />
					<span class="skills__name">JAVASCRIPT</span>
				</div>
				<div class="skills__bar skills__js" />
				<div>
					<span class="skills__percentage">65%</span>
				</div>
			</div>
			<div class="skills__data">
				<div class="skills__names">
					<i class="bx bxs-paint skills__icon" />
					<span class="skills__name">UX/UI</span>
				</div>
				<div class="skills__bar skills__ux" />
				<div>
					<span class="skills__percentage">85%</span>
				</div>
			</div>
		</div>

		<div>
			<img src="/work.jpeg" alt="" class="skills__img" />
		</div>
	</div>
</section>

<style lang="scss">
	.skills {
		&__container {
			row-gap: 2rem;
			text-align: center;
		}

		&__subtitle {
			margin-bottom: var(--mb-2);
		}

		&__text {
			margin-bottom: var(--mb-4);
		}

		&__data {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			font-weight: var(--font-semi);
			padding: 0.5rem 1rem;
			margin-bottom: var(--mb-4);
			border-radius: 0.5rem;
			box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
		}

		&__icon {
			font-size: 2rem;
			margin-right: var(--mb-2);
			color: var(--first-color);
		}

		&__names {
			display: flex;
			align-items: center;
		}

		&__bar {
			position: absolute;
			left: 0;
			bottom: 0;
			background-color: var(--first-color);
			height: 0.25rem;
			border-radius: 0.5rem;
			z-index: var(--z-back);
		}

		&__html {
			width: 95%;
		}

		&__css {
			width: 85%;
		}

		&__js {
			width: 65%;
		}

		&__ux {
			width: 85%;
		}

		&__img {
			border-radius: 0.5rem;
		}
	}

	@media screen and(min-width: 768px) {
		.skills {
			&__container {
				grid-template-columns: repeat(2, 1fr);
				align-items: center;
				text-align: initial;
			}
		}
	}
</style>
