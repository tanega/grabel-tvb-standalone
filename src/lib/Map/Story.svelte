<script lang="ts">
	export let imgUrl =
		'https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80';
	export let title = 'Trame forestière';
	export let description =
		'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor idmus.';
</script>

<div class={`w-96 ${$$props.class}`}>
	<a
		href="/map"
		class="-m-3 flex rounded-lg p-3 transition duration-150 ease-in-out hover:shadow-lg bg-white"
	>
		<div class="hidden flex-shrink-0 sm:block">
			<img class="h-20 w-32 rounded-md object-cover" src={imgUrl} alt="" />
		</div>
		<div class="min-w-0 flex-1 sm:ml-8">
			<h4 class="truncate text-base font-medium text-gray-900">{title}</h4>
			<p class="mt-1 text-sm text-gray-500 line-clamp-2">
				{description}
			</p>
		</div>
	</a>
</div>
