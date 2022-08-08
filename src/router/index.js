import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainView , SearchView , SearchResultView} from "../pages";


const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainView />} />
				<Route path="/search" element={<SearchView />} />
				<Route path="/search/:searchText" element={<SearchResultView/>} />
			</Routes>

		</BrowserRouter>
	);
};

export default Router;
