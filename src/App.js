import "./styles.css";

export default function App() {
  return (
    <div class="container">
      <div class="mainBlock">
        <div class="row">
          <div class="col-md-6">
            <h1 class="city-name" id="current-city"></h1>
          </div>
          <form class="col-md-6 row" id="search-city">
            <div class="col-md-8">
              <input
                type="text"
                placeholder="Enter a city"
                class="form-control shadow-sm border-0"
                id="searchInput"
                autocomplete="off"
              />
            </div>
            <div class="col-md-4">
              <input
                class="form-control btn btn-primary shadow-sm"
                type="submit"
                value="Search"
                id="submitButton"
              />
            </div>
          </form>
        </div>
        <div class="location">
          <a href="#" id="my-loc">My location📍</a>
        </div>
        <div class="row">
          <div class="col-md-2">
            <img id="icon" src=" " alt="sun" />
            <ul class="description" id="temperature-description">
              <li id="description"></li>
              <li id="humidity"></li>
              <li id="windSpeed"></li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="description">
              <li class="currentDay" id="current-day"></li>
              <li class="currentTime" id="current-time"></li>
              <span class="temp" id="temperature"></span>
              <span class="unit">
                <a href="#" id="celsium-link" class="active">˚C</a> |
                <a href="#" id="fahrenheit-link">˚F</a>
              </span>
            </ul>
          </div>
          <div class="col-md-7">
            <div class="position d-flex justify-content-center"></div>
            <div class="weather-forecast" id="forecast"></div>
          </div>
          <hr />
          <div class="version-city">
            <div class="row">
              <div class="d-flex justify-content-center">
                <div class="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-london"
                    class="js-city secondary-weather-name"
                    data-city-name="London"
                    >London</a
                  >
                  <img
                    class="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span class="js-temperature secondary-weather-temp"></span>
                  <span class="js-description secondary-weather-des"></span>
                </div>
                <div class="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-tokyo"
                    class="js-city secondary-weather-name"
                    data-city-name="Tokyo"
                    >Tokyo</a
                  >
                  <img
                    class="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span class="js-temperature secondary-weather-temp"></span>
                  <span class="js-description secondary-weather-des"></span>
                </div>
                <div class="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-sydney"
                    class="js-city secondary-weather-name"
                    data-city-name="Sydney"
                    >Sydney</a
                  >
                  <img
                    class="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span class="js-temperature secondary-weather-temp"></span>
                  <span class="js-description secondary-weather-des"></span>
                </div>
                <div class="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-lviv"
                    class="js-city secondary-weather-name"
                    data-city-name="Lviv"
                    >Lviv</a
                  >
                  <img
                    class="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span class="js-temperature secondary-weather-temp"></span>
                  <span class="js-description secondary-weather-des"></span>
                </div>
                <div class="col-md-2 d-flex flex-column align-items-center">
                  <a
                    href="#"
                    id="city-paris"
                    class="js-city secondary-weather-name"
                    data-city-name="Paris"
                    >Paris</a
                  >
                  <img
                    class="js-icon secondary-weather-icon"
                    src=" "
                    alt="icon"
                  />
                  <span class="js-temperature secondary-weather-temp"></span>
                  <span class="js-description secondary-weather-des"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="link-source">
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
