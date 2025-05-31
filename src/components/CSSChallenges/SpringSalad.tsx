import '@/assets/styles/css-challenges.css';
import '@/assets/styles/spring-salad.css';

export function SpoilerRevealer() {
  return (
    <>
      <div className="post">
        <p>
          In the 1968 film Planet of the Apes, they find
          <span className="spoiler">
            the ruins of the Statue of Liberty. The Plant of the Apes is Earth!
          </span>
        </p>
      </div>
      <div className="post">
        <p>
          Soylent Green
          <span className="spoiler">is made of people!</span>
        </p>
      </div>
      <div className="post">
        <p>
          OMG I can't believe that Darth Vader is
          <span className="spoiler">Luke Skywalker's father!</span>
        </p>
      </div>
    </>
  );
}

export function ColorfulButton() {
  return (
    <div className="container">
      <div className="button-border">
        <button type="button" className="button">
          Start Coding!
        </button>
      </div>
    </div>
  );
}

export function ExpandingSearchbar() {
  return (
    <div className="container-2">
      <label htmlFor="search-field" className="visually_hidden">
        Search
      </label>

      <input
        type="search"
        className="search-bar"
        id="search-field"
        placeholder="Search..."
        aria-label="Search"
      />
    </div>
  );
}

export function CodepenTile() {
  return (
    <main>
      <div className="codepen-tile">
        <div className="codepen-card">
          <div className="card-thumbnail">
            <img alt="" src="/jr-korpa-unsplash.jpg" />
          </div>
          <div className="card-body">
            <div className="card-avatar">
              {/* <img alt="" src="images/daniel-park-unsplash.jpg" /> */}
              <img alt="" src="/daniel-park-unsplash.jpg" />
            </div>
            <div className="card-details">
              <h3>Abstract Gradient Project</h3>
              <p>Scrimsbee McScrimslee</p>
            </div>
          </div>
          <ul className="card-stats">
            <li>🤍 8</li>
            <li>💬 32</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export function LoadingAnimationOne() {
  return (
    <div className="circle-container">
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export function LoadingAnimationTwo() {
  return (
    <div className="square-container">
      <div className="square square1"></div>
      <div className="square square2"></div>
      <div className="square square3"></div>
    </div>
  );
}

export function ArcheryTarget() {
  return (
    <div className="rings">
      <div className="ring ring-1">
        <div className="ring ring-2">
          <div className="ring ring-3">
            <div className="ring bullseye"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WordCarousel() {
  return (
    <div className="word-carousel">
      <h1>I love</h1>
    </div>
  );
}

export function FrenchFlag() {
  return (
    <div className="flag-france">
      <div className="blue stripe"></div>
      <div className="white stripe"></div>
      <div className="red stripe"></div>
    </div>
  );
}

export function GermanFlag() {
  return (
    <div className="flag-germany">
      <div className="black stripe"></div>
      <div className="red stripe"></div>
      <div className="yellow stripe"></div>
    </div>
  );
}

export function MadagascarFlag() {
  return (
    <div className="flag-madagascar">
      <div className="white stripe"></div>
      <div>
        <div className="red stripe"></div>
        <div className="green stripe"></div>
      </div>
    </div>
  );
}

export function SwissFlag() {
  return (
    <div className="flag flag-swiss">
      <div className="cross cross1"></div>
      <div className="cross cross2"></div>
    </div>
  );
}
