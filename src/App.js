import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StevePage from "./pages/StevePage";
import MarkPage from "./pages/MarkPage";
import ElonPage from "./pages/ElonPage";
import JackPage from "./pages/JackPage";
import ErrorPage from "./pages/ErrorPage";

import BillPage from "./pages/BillPage";
import ContactPage from "./pages/ContactPage";

import BlogPage from "./pages/BlogPage";
import Stagiaire from "./pages/Stagiaire";
import ShowStagiaire from "./pages/ShowStagiaire";


function App() {
	// const [color, setColor] = useState("bg-blue-500");
	return (
		<Router>
			{/* <Navigation color={color} setColor={setColor} /> */}
			<Routes>
				<Route path='/' element=<StevePage /> />
				<Route path='/mark' element=<MarkPage /> />
				<Route path='/elon' element=<ElonPage /> />
				<Route path='/jack' element=<JackPage /> />
				<Route path='/bill' element=<BillPage /> />
				<Route path='/contact' element=<ContactPage /> />
				<Route path='*' element=<ErrorPage /> />
				<Route path='/blog' element=<BlogPage /> />
				<Route path='/stagiaire' element=<Stagiaire /> />
				<Route path='/showstagiaire/:id' element=<ShowStagiaire /> />
			</Routes>
			{/* <Footer color={color} /> */}
		</Router>
	);
}

export default App;
