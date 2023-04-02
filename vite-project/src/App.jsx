import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Facility from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservations";
import Restaurant from "./pages/Restaurant";
import Blogs from "./pages/Blogs";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Facility", element: <Facility /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/Reservations", element: <Reservation /> },
      { path: "/Restaurant", element: <Restaurant /> },
      { path: "/Blogs", element: <Blogs /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/AboutUS" element={<AboutUs />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/Facilities" element={<Facility />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
        <Route path="/Reservation" element={<Reservation />}></Route>
        <Route path="/Restaurant" element={<Restaurant />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
