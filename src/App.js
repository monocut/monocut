import style from "./App.module.css"
import ProfileInfo from "./Components/ProfileInfo/ProfileInfo";
import ProfileHighLights from "./Components/HighLights/ProfileHighLights";
import Navigation from "./Components/Navigation-publications/Navigation";
import ContentWall from "./Components/Content-wall/ContentWall";
import Nav from "./Components/NAV/Nav";

function App() {


  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Nav />
      </div>

      <div className={style.content}>
      <ProfileInfo />
      <ProfileHighLights />
      <Navigation />
      <ContentWall />
      </div>


    </div>
  );
}

export default App;
