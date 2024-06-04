import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
	// Don't get confused by this... It's so that we can enable data fetching from react-router
	const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

	return <RouterProvider router={router} />;
};

export default App;
