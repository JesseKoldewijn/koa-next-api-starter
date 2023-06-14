const notfound = () => {
	return (
		<div className="inset-0 flex h-screen w-full items-center justify-center gap-2 font-mono">
			<h1 className="border-r-2 border-red-500 pr-4 text-4xl font-bold">404</h1>
			<p className="pl-2 text-xl font-medium">Page Not Found</p>
		</div>
	);
};

export default notfound;
