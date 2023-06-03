import style from "./App.module.css";
import { Nav } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile/Profile";
import { Feed } from "./pages/Feed/Feed";


function App() {
  return (
    <BrowserRouter>
      <div className={style.container}>
        <div className={style.nav}>
          <Nav />
        </div>
        <div className={style.content}>
          <Routes>
            <Route path="*" element={<Profile />}/>
            <Route path="feed" element={<Feed />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
