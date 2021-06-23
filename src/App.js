import "./Style/App.css";
import ConnectWallet from "./Components/ConnectWallet";

import Routes from "./config/Routes";

import Navbar from "./Components/navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ConnectWallet />
      <Routes />

    </div>
  );
}

export default App;
