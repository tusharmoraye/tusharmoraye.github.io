<script>
	import data from '../../data/data.json';

	const links = [
		{
			name: 'Home',
			to: '#/'
		},
		{
			name: 'About',
			to: '#about'
		},
		// {
		// 	name: 'Skills',
		// 	to: '#skills'
		// },
		{
			name: 'Work',
			to: '#work'
		},
		{
			name: 'Contact',
			to: '#contact'
		},
		{
			name: 'Resume',
			target: '_blank',
			to: data.resume,
			class: 'button button--sm'
		}
	];
	let showMenu = false;

	function toggleShowMenu() {
		showMenu = !showMenu;
	}
</script>

<header class="l-header">
	<nav class="nav bd-grid">
		<div>
			<a href="#/" class="nav__logo">{data.name}</a>
		</div>

		<div class="nav__menu" class:show={showMenu === true}>
			<ul class="nav__list">
				{#each links as link}
					<li class="nav__item" on:click={showMenu && toggleShowMenu}>
						<a class={'nav__link ' + (link.class || '')} href={link.to} target={link.target || ''}>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="nav__toggle" on:click={toggleShowMenu}>
			<i class="bx bx-menu" />
		</div>
	</nav>
</header>

<style lang="scss">
	.nav {
		height: var(--header-height);
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: var(--font-semi);

		&__menu {
			@media screen and (max-width: 768px) {
				position: fixed;
				top: var(--header-height);
				right: -100%;
				width: 80%;
				height: 100%;
				padding: 2rem;
				background-color: var(--second-color);
				transition: 0.5s;
			}

			&.show {
				right: 0;
			}
		}

		&__item {
			margin-bottom: var(--mb-4);
		}

		&__link {
			position: relative;
			color: #fff;

			&:hover {
				position: relative;

				&::after {
					position: absolute;
					content: '';
					width: 100%;
					height: 0.18rem;
					left: 0;
					top: 2rem;
					background-color: var(--first-color);
				}
			}
		}

		&__logo {
			color: var(--second-color);
		}

		&__toggle {
			color: var(--second-color);
			font-size: 1.5rem;
			cursor: pointer;
		}
	}

	/*Active menu*/
	.active::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 0.18rem;
		left: 0;
		top: 2rem;
		background-color: var(--first-color);
	}

	/*=== Show menu ===*/

	@media screen and(min-width: 768px) {
		.nav {
			height: calc(var(--header-height) + 1rem);

			&__list {
				display: flex;
				padding-top: 0;
			}

			&__item {
				display: flex;
				align-items: center;
				margin-bottom: 0;

				&:not(:first-child) {
					margin-left: var(--mb-5);
				}
			}

			&__toggle {
				display: none;
			}

			&__link:not(.button) {
				color: var(--second-color);
			}
		}
	}
</style>
