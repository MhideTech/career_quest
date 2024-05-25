const WelcomeScreen = () => {
	return (
		<div className="flex flex-row  min-h-screen p-4 gap-4">
			<div className="basis-7/12 p-6">
				<div className="navigation flex justify-between">
					<div className="text-3xl">
						Title<sup>®</sup>
					</div>
					<div className="border px-3 py-1 rounded-3xl border-black cursor-pointer hover:bg-black hover:text-white">
						Login
					</div>
				</div>

				<div className="border border-black  rounded-3xl w-fit px-6 my-12">
					An app that changes your mindset
				</div>

				<h1 className="text-7xl font-bold my-24">
					The best way to enjoy Learning
				</h1>

				<div className="flex justify-between">
					<div className="break-normal w-7/12">
						This is an app that will help you unlock your hidden potential in
						learning
					</div>
					<div className="border bg-black text-white px-4 py-2 rounded-2xl flex place-items-center">
						Sign Up
					</div>
				</div>
			</div>
			<div className="flex basis-5/12  items-center justify-center">
				<img src="./book.png" alt="A Book Illustration" />
			</div>
		</div>
	);
};

export default WelcomeScreen;
