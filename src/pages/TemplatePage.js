import Header from "./Header";
import Footer from "./Footer";

function TemplatePage() {
	return (
		<div className="bg-zinc-700 min-h-screen">
			<Header />
			<p className="text-center text-5xl p-24">INSERT CONTENT HERE!</p>
			<Footer />
		</div>
	);
}

export default TemplatePage;
