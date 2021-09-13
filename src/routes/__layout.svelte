<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	import env from '../env';
	import data from '../../data/data.json';

	const measurementId = env.measurementId;

	const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

	if (typeof window !== 'undefined') {
		window.GTAG_MEASUREMENT_ID = measurementId;
	}
</script>

<svelte:head>
	<title>{data.title}</title>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src={gtagUrl}></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', window.GTAG_MEASUREMENT_ID);
	</script>
</svelte:head>

<div class="">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
