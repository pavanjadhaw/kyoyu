async function main() {
	const {
		args: [filename]
	} = Deno;

	if (filename) {
		const file = await Deno.open(filename);
		await Deno.copy(file, Deno.stdout);
		file.close();
	}

	if (!filename) {
		console.log(`
	You need to provide path to atleast one torrent file.
	See, kyoyu --help for more`);

		Deno.exit(1);
	}
}

if (import.meta.main) {
	main();
}
