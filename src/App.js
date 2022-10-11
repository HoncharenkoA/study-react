import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="mainBlock">
        <div className="row">
          <div className="col-md-6">
            <h1 className="city-name" id="current-city"></h1>
          </div>
          <form className="col-md-6 row" id="search-city">
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control shadow-sm border-0"
                id="searchInput"
                autocomplete="off"
              />
            </div>
            <div className="col-md-4">
              <input
                className="form-control btn btn-primary shadow-sm"
                type="submit"
                value="Search"
                id="submitButton"
              />
            </div>
          </form>
        </div>
        <div className="location">
          <a href="#" id="my-loc">My location📍</a>
        </div>
        <div className="row">
          <div className="col-md-2">
            <img id="icon" src=" " alt="sun" />
            <ul className="description" id="temperature-description">
              <li id="description"></li>
              <li id="humidity"></li>
              <li id="windSpeed"></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="description">
              <li className="currentDay" id="current-day"></li>
              <li className="currentTime" id="current-time"></li>
              <span className="temp" id="temperature"></span>
              <span className="unit">
                <a href="#" id="celsium-link" className="active">˚C</a> |
                <a href="#" id="fahrenheit-link">˚F</a>
              </span>
            </ul>
          </div>
          <div className="col-md-7">
            <div className="position d-flex justify-content-center"></div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
          <hr />
          <div className="version-city">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-london"
                    className="js-city secondary-weather-name"
                    data-city-name="London"
                    >London</a
                  >
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-tokyo"
                    className="js-city secondary-weather-name"
                    data-city-name="Tokyo"
                    >Tokyo</a
                  >
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-sydney"
                    className="js-city secondary-weather-name"
                    data-city-name="Sydney"
                    >Sydney</a
                  >
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-lviv"
                    className="js-city secondary-weather-name"
                    data-city-name="Lviv"
                    >Lviv</a
                  >
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-paris"
                    className="js-city secondary-weather-name"
                    data-city-name="Paris"
                    >Paris</a
                  >
                  <img
                    className="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span className="js-temperature secondary-weather-temp"></span>
                  <span className="js-description secondary-weather-des"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="link-source">
        <a
          href="https://github.com/HoncharenkoA/my-existing-progect"
          target="_blank"
        >
          Open-source code</a
        >
        <span> by Anastasiia Honcharenko</span>
      </p>
    </div>
  );
}
