import style from "./App.module.css";
import { ProfileInfo, ProfileHighLights , Navigation , ContentWall , Nav } from "./Components"

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
