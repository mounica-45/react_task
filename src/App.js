// import "./App.css";
// import Navbar from "../src/components/Navbar";
// import Layout from "./components/Layout";
// import Content from "./components/Content";
// import Design from "./components/Design";
// import { BrowserRouter, Router, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <BrowserRouter>
//         <Router>
//           {/* <div className="app"> */}
//           {/* <Layout /> */}
//           <Route exact path="/" element={<Layout />} />
//           {/* </div> */}
//           {/* <div className="Contact">
//         <Content />
//       </div>
//       <div className="About">
//         <Design />
//       </div> */}
//         </Router>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Content from "./components/Content";
import Design from "./components/Design";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsFeed from "./components/NewsFeed";
import Lawyers from "./components/Lawyers";
import Connections from "./components/Connections";
import Chats from "./components/Chats";
import QHome from "./components/QHome";
import QAbout from "./components/QAbout";
import QContact from "./components/QContact";
import Settings from "./components/Settings";
import Admin from "./components/Admin";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/content" element={<Content />} />
          <Route path="/design" element={<Design />} />
          <Route path="/newfeed" element={<NewsFeed />} />
          <Route path="/findlawyers" element={<Lawyers />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/qhome" element={<QHome />} />
          <Route path="/qabout" element={<QAbout />} />
          <Route path="/qcontact" element={<QContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
