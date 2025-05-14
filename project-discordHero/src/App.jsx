import "./App.css";
import discordImage from "./assets/image/discord-logo-white.png";
import menuOption from "./assets/image/menu-icon.png";
import imagePeople from "./assets/image/discord-background.png"

function App() {
  return (
    <div className="App">
      <div id="logo-discord">
        <img src={discordImage} alt="logo-discord" />
      </div>
      <div id="menu-button">
        <img src={menuOption} alt="menu-logo" />
      </div>
      <div id="text-page">
        <h1>IMAGINE A PLACE...</h1>
        <br />
        <p>
          ...where you cant belong to a school club, a gaming group, or a
          whorldwide art community. When just you and a handful of friends can
          spend time toguether. A place that makes it easy to talck ecery day
          and hang out more often.
        </p>
      </div>
      <div id="button1">
        <button>Download for Mac</button>
      </div>
      <div id="button2">
        <button>Open Discord in your browser</button>
      </div>
      <div id="image-people">
        <img src={imagePeople} alt="image-people" />
      </div>
    </div>
  );
}

export default App;
