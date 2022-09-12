import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://admin.smartwaste.app/api/Controller/API/BarcodeAPI/read.php";

function App() {
  const [Photo, setUserData] = useState({});

  useEffect(() => {
    getApiWithAxios();
  }, []);

  const getApiWithAxios = async () => {
    const response = await axios.get(apiUrl);
    setUserData(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Unidentified Photos</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{Photo.id}</h5>
        <h5 className="info-item">{Photo.photoUnidentified}</h5>
        <h5 className="info-item">{Photo.userIdentified}</h5>
        <h5 className="info-item">{Photo.device}</h5>
        <h5 className="info-item">{Photo.timeTaken}</h5>
      </div>
    </div>    
  );
}

export default App;