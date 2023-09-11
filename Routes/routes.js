import MainLayout from "../src/components/mainLayout/MainLayout";
import Intro from "../src/Pages/Intro/Intro.jsx";
import About from "../src/Pages/about/About.jsx";
import Portfolio from "../src/Pages/portfolio/Portfolio.jsx";
import Countdown from "../src/Pages/countdown/Countdown";

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
        path: "/portfolio",
        Component: Portfolio,
      },
      {
        path: "/countdown",
        Component: Countdown
      }
    ],
  },
];
export default routes