import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Newsletter from "./pages/Newsletter";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import { PrivateRoute } from "./components/PrivateRoute";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import CreateBlogs from "./pages/CreateBlogs";
import EditBlogs from "./pages/EditBlogs";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/category/:type/:blog" element={<Blogs />} />
          <Route path="/create-blogs" element={<PrivateRoute />}>
            <Route path="/create-blogs" element={<CreateBlogs />} />
          </Route>
          <Route path="/edit-blogs" element={<PrivateRoute />}>
            <Route path="/edit-blogs/:blogs" element={<EditBlogs />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
