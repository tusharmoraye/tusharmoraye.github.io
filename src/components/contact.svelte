<script>
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	import env from '../env';

	let formSubmitError = false;

	const schema = yup.object().shape({
		name: yup.string().required('Name is required'),
		email: yup.string().required('Email is required').email('Email is invalid'),
		message: yup.string().required('Message is required')
	});

	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
			name: '',
			message: ''
		},
		validationSchema: schema,
		onSubmit: (values) => {
			formSubmitError = false;

			const body = new FormData();
			for (let key in values) {
				body.append(key, values[key]);
			}

			fetch(env.googleScript, { method: 'POST', body })
				.then((response) =>
					console.log('Thanks for Contacting us..! We Will Contact You Soon...', response)
				)
				.catch((error) => {
					formSubmitError = true;
					console.error('Error!', error.message);
				});
		}
	});
</script>

<section class="contact section" id="contact">
	<div class="container">
		<h2 class="section-title">Contact</h2>
		<form on:submit|preventDefault={handleSubmit}>
			<div>
				<input
					type="text"
					name="email"
					bind:value={$form.email}
					placeholder="Email"
					on:change={handleChange}
				/>

				{#if $errors.email}
					<span class="error">{$errors.email}</span>
				{/if}
			</div>

			<div>
				<input
					type="text"
					name="name"
					bind:value={$form.name}
					placeholder="Name"
					on:change={handleChange}
				/>

				{#if $errors.name}
					<span class="error">{$errors.name}</span>
				{/if}
			</div>
			<div>
				<textarea
					rows="5"
					name="message"
					bind:value={$form.message}
					placeholder="Your message"
					on:change={handleChange}
				/>

				{#if $errors.message}
					<span class="error">{$errors.message}</span>
				{/if}
			</div>

			<div>
				<button type="submit" class="contact__button button">Submit</button>
			</div>
			{#if formSubmitError}
				<span class="error">Something went wrong. Please try again.</span>
			{/if}
		</form>
	</div>
</section>

<style>
	.container {
		max-width: 400px;
		margin: auto;
	}

	form {
		margin-left: var(--mb-2);
		margin-right: var(--mb-2);
	}

	form div {
		margin-top: 1em;
	}

	input,
	textarea {
		display: block;
		font-family: inherit;
		font-size: inherit;
		max-width: 100%;
		width: 100%;
		padding: 12px;
		box-sizing: border-box;
		border: 1px solid var(--grey);
		border-radius: 4px;
		transition: all 150ms ease;
		background: var(--white);
	}

	input:focus,
	textarea:focus {
		outline: none;
		box-shadow: 0 0 0 4px rgb(227, 227, 245);
		border-color: var(--grey);
	}

	input:disabled,
	textarea:disabled {
		color: #ccc;
	}

	.error {
		display: block;
		font-size: 0.75rem;
		color: var(--red);
	}
</style>
