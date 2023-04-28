import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Styles/app.scss";
import axios from "axios";

function App() {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const navigate = useNavigate();

  const getWeather = (lon, lat) => {
    const options = {
      method: "GET",
      url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
      params: { lon, lat },
      headers: {
        "X-RapidAPI-Key": "9ae629c33bmshc19d4d888dc13ffp19d43fjsn37540565e161",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        navigate("/Show-Weather", { state: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="main">
      <h1>
        Weather.<span>io</span>
      </h1>
      <div className="form-container">
        <form
          className="form"
          onSubmit={(e) => {
            console.log("Hey");
            e.preventDefault();
            getWeather(lon, lat);
          }}
        >
          <div className="form-group">
            <label>Enter Longitude in Degrees</label>
            <br></br>
            <input
              type="text"
              value={lon}
              placeholder="Enter Longitude"
              onChange={(e) => {
                setLon(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label> Enter Latitude in Degrees </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Latitude"
              value={lat}
              onChange={(e) => {
                setLat(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Enter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
