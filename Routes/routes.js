import { redirect } from "react-router-dom";
import MainLayout from "../src/components/mainLayout/MainLayout";
import Intro from "../src/Pages/Intro/Intro.jsx";
import About from "../src/Pages/about/About.jsx";
import ImageGallery from "../src/Pages/imageGallery/ImageGallery.jsx";
// import Countdown from "../src/Pages/countdown/Countdown";

 const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Intro,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/image-gallery",
        Component: ImageGallery,
      },
      {
        path: "/portfolio",
        loader: () => redirect("/image-gallery"),
      },
      // {
      //   path: "/countdown",
      //   Component: Countdown
      // }
    ],
  },
];
export default routes
