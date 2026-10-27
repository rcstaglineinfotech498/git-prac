import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import SiteLayout from "./components/common/SiteLayout.jsx";
import Preloader from "./components/common/Preloader.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function RouteLoader() {
  return (
    <div className="route-loader" role="status">
      Loading page…
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
          <Preloader />
          <SiteLayout>
            <Suspense fallback={<RouteLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<BlogDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </SiteLayout>
          <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
