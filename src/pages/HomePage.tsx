import Navbar from "../ui/home/Navbar";
import HeroSection from "../ui/home/HeroSection";
import Footer from "../ui/home/Footer";

const HomePage = () => {
	return (
		<>
			<h1>Home Page</h1>
			<Navbar />

			{/* You can put this main in a new component if you want */}
			<main>
				<HeroSection />
				{/* Other things the page will have*/}
			</main>

			<Footer />
		</>
	);
};

export default HomePage;
