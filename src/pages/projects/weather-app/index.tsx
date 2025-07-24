// ✅ 1. Core Features
// [ j Search
//  [x] Input field for searching weather by city name
//  [x] Submit button or search-on-type (with debounce)
//  [ ] Show validation or error for invalid city input
//  [ ] Optional: Use current geolocation for weather
//
// [x] Current Weather Display
//  [x] City name and country
//  [x] Temperature (Celsius and/or Fahrenheit)
//  [x] Weather description (e.g. “light rain”)
//  [x] Weather icon (from API)
//  [x] Feels like temperature
//  [x] Humidity
//  [x] Wind speed
//
// [ ] API Integration
//  [x] Use a weather API (e.g. OpenWeatherMap)
//  [x] Handle loading state
//  [ ] Handle error state (e.g. "City not found")
//
// ⚙️ 2. State & Data Management
// [ ] Store:
//  [x] Search query
//  [x] Weather data response
//  [ ] Loading/error states
// [x] Use React's useState, useEffect
// [x] Optional: useContext or useReducer for more complex data flows
//
// 🎨 3. UI/UX
// [ ] Responsive design (mobile-first layout)
// [ ] Clean and modern UI
// [x] Weather icons match condition (e.g. sun, rain, snow)
// [ ] Dynamic background or styling based on weather (optional)
// [ ] Temperature toggle (°C / °F)
//
// 🧪 4. Optional Features to Elevate the App
// [x] Forecast
//  [x] 5-day or 7-day forecast
//  [ ] Show daily high/low temps and weather icons
//
// [ ] Location Detection
//  [ ] Use browser geolocation to show weather for current location
//
// [ ] Search History
//  [ ] Show recent searches
//  [ ] Allow users to click a past search to load its weather
//
// [ ] Theme Toggle
//  [ ] Light/dark mode toggle
//
// [ ] Error Handling & Edge Case
//  [ ] No internet / API down
//  [ ] Empty input
//  [ ] Nonexistent cities
import Button from '@/components/Resume/Button';
import WeatherProvider from '@/context/WeatherContext';
import { BorderOutlined } from '@ant-design/icons';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';

import WeatherApp from './WeatherApp';

const WeatherAppPage = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(`/projects`);
  };

  return (
    <div className="mt-4">
      <Button variant="vanilla" onClick={handleGoBack}>
        Back to Gallery
      </Button>
      <div className="bg-white h-[100%] mt-4 border-4  border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] py-4 px-8">
        <div className="relative my-4">
          <h2 className="text-4xl font-black mb-4 relative inline-block">
            <span className="relative z-10 uppercase">Weather</span>
            <div className="absolute -bottom-1 left-0 w-full h-3 bg-green-400 -rotate-1 z-0"></div>
          </h2>
          <p className="absolute uppercase text-white font-black bg-red-400 text-[16px]! -top-0.5 -right-0.5 py-1.5 sm:-top-5 sm:-right-3  px-4 border-2 border-black rotate-3">
            APP
          </p>
        </div>

        <div>
          <p className="text-xl max-w-2xl mt-6 mb-8!">A simple weather app.</p>
        </div>
        <div className="mb-8 flex grow justify-center items-center">
          <div className="w-11/12 pt-4 rounded-md border-5 flex justify-stretch items-start border-black bg-white min-h-[800px] h-[800px] max-h-[800px]">
            <WeatherProvider>
              <WeatherApp />
            </WeatherProvider>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-black mb-8 relative inline-block">
            <span className="relative z-10 uppercase">Tech Stack</span>
            <div className="absolute -bottom-0 left-0 w-full h-2 bg-purple-400 -rotate-1 z-0"></div>
          </h3>
          <ul className="flex flex-row justify-start items-center mb-8 gap-4">
            <li className="px-2 py-1 bg-green-400">React</li>
            <li className="px-2 py-1 bg-red-400">TailwindCSS</li>
            <li className="px-2 py-1 bg-blue-400">CSS</li>
          </ul>
        </div>
        <hr className="border-2 mb-8 border-black" />
        <div>
          <h4>About this project</h4>
          <p className="mb-2">
            I queried some generative AI and asked it to provide me with
            checklist to achieve an MVP. This is what it gave me. Eventual goal
            is to have completed all of these items.
          </p>
          <ul className="list-decimal ml-4 text-sm">
            <li>
              Core Features
              <ul className="ml-4 mb-4">
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Search
                  </span>
                  <ul className="ml-4 mb-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Input field for searching weather by city name
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Submit button or search-on-type (with debounce)
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Show validation or error for invalid city input
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Optional: Use current geolocation for weather
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Current Weather Display
                  </span>
                  <ul className="ml-4 mb-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        City name and country
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Temperature (Celsius and/or Fahrenheit)
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Weather description (e.g. “light rain”)
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Weather icon (from API)
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Feels like temperature
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Humidity
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Wind speed
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    API Integration
                  </span>
                  <ul className="ml-4 mb-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Use a weather API (e.g. OpenWeatherMap)
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Handle loading state
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Handle error state (e.g. "City not found")
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              State & Data Management
              <ul className="ml-4 mb-4">
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Store:
                  </span>
                  <ul className="ml-4 mb-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Search query
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Weather data response
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Loading/error states
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Use React's useState, useEffect
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Optional: useContext or useReducer for more complex data
                    flows
                  </span>
                </li>
              </ul>
            </li>
            <li>
              UI/UX
              <ul className="ml-4 mb-4">
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Responsive design (mobile-first layout)
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Clean and modern UI
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Weather icons match condition (e.g. sun, rain, snow)
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Dynamic background or styling based on weather (optional)
                  </span>
                </li>
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Temperature toggle (°C / °F)
                  </span>
                </li>
              </ul>
            </li>
            <li>
              Optional Features to Elevate the App
              <ul className="ml-4 mb-4">
                <li>
                  <span className="flex flex-row items-start">
                    <BorderOutlined className="mr-2 mt-1" />
                    Use useState and useEffect for managing:
                  </span>
                  <ul className="ml-4 mb-4">
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Current question index
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Selected answer
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Score
                      </span>
                    </li>
                    <li>
                      <span className="flex flex-row items-start">
                        <BorderOutlined className="mr-2 mt-1" />
                        Quiz completion status
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <hr className="border-2 my-8 border-black" />
      </div>
    </div>
  );
};

export default WeatherAppPage;
