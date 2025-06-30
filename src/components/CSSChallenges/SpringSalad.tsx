import '@/assets/styles/css-challenges.css';
import '@/assets/styles/spring-salad.css';

export function SpoilerRevealer() {
  return (
    <div className="posts-container">
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
    </div>
  );
}

export function ColorfulButton() {
  return (
    <div className="button-container">
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
    <div className="search-container">
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
    <main className="codepen-container">
      <div className="codepen-tile">
        <div className="codepen-card">
          <div className="card-thumbnail">
            <img alt="" src="/src/assets/images/jr-korpa-unsplash.jpg" />
          </div>
          <div className="card-body">
            <div className="card-avatar">
              <img alt="" src="/src/assets/images/daniel-park-unsplash.jpg" />
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

export function JapaneseFlag() {
  return (
    <div className="flag flag-japan">
      <div className="flag-circle"></div>
    </div>
  );
}

export function SwedishFlag() {
  return (
    <div className="flag flag-sweden">
      <div className="flag-sweden-stripe stripe1"></div>
      <div className="flag-sweden-stripe stripe2"></div>
    </div>
  );
}

export function NigerFlag() {
  return (
    <div className="flag flag-niger">
      <div className="flag-niger-orange flag-niger-stripe"></div>
      <div className="flag-niger-white flag-niger-stripe">
        <div className="flag-niger-circle"></div>
      </div>
      <div className="flag-niger-green flag-niger-stripe"></div>
    </div>
  );
}

export function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <img alt="" src="/src/assets/images/code.png" />
        <div className="profile-details">
          <h2>Florian Olivo</h2>
          <h3>@florianolv</h3>
          <p>I'm the world's most prolific Fortran dev.</p>
          <button type="button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export function ToggleSwitch() {
  return (
    <div className="toggle-wrap">
      <label htmlFor="toggle">
        <input type="checkbox" id="toggle" className="toggle-input"></input>
        <div className="toggle-switch"></div>
      </label>
    </div>
  );
}

export function AceOfSpades() {
  return (
    <div className="playing-card-container">
      <div className="playing-card">
        <div className="playing-card__top">
          <div>A</div>
          <div>&spades;</div>
        </div>
        <div className="playing-card__center">&spades;</div>
        <div className="playing-card__bottom">
          <div>A</div>
          <div>&spades;</div>
        </div>
      </div>
    </div>
  );
}

export function FourOfHearts() {
  return (
    <div className="four-of-hearts-container">
      <div className="four-of-hearts-card">
        <div className="four-of-hearts-card__left">
          <div>4</div>
          <div>&hearts;</div>
        </div>
        <div className="four-of-hearts-card__middle">
          <div>&hearts;</div>
          <div>&hearts;</div>
          <div>&hearts;</div>
          <div>&hearts;</div>
        </div>
        <div className="four-of-hearts-card__right">
          <div>4</div>
          <div>&hearts;</div>
        </div>
      </div>
    </div>
  );
}

export function AdjustableProgressBar() {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="prog-status stage-1"></div>
      </div>
    </div>
  );
}

export function JeopardyCardFlip() {
  return (
    <div className="jeopardy-card">
      <div className="jeopardy-card__front">
        <h2>
          This now deprecated HTML tag, popular in the early days of the
          internet, magically made text scroll across the screen
        </h2>
      </div>
      <div className="jeopardy-card__back">
        <h2>What is the marquee tag</h2>
      </div>
    </div>
  );
}

export function LoadingAnimation3() {
  return (
    <div className="loading-animation-3-container">
      <div className="loading-animation-3-loader"></div>
    </div>
  );
}

export function InstagramStoriesMenu() {
  return (
    <div className="ig-wrapper">
      <ul className="ig-stories-menu">
        <li className="ig-story new">
          <div className="ig-img-wrapper">
            <img
              className="ig-img"
              alt="profile-pic"
              src="/src/assets/images/scott-webb-unsplash.jpg"
            />
          </div>
          <p>Julian</p>
        </li>
        <li className="ig-story viewed live">
          <div className="ig-img-wrapper">
            <img
              className="ig-img"
              alt="profile-pic"
              src="/src/assets/images/bundo-kim-unsplash.jpg"
            />
          </div>
          <p>Scrimdella</p>
        </li>
        <li className="ig-story new">
          <div className="ig-img-wrapper">
            <img
              className="ig-img"
              alt="profile-pic"
              src="/src/assets/images/lidya-nada-unsplash.jpg"
            />
          </div>
          <p>Gumdrop</p>
        </li>
      </ul>
    </div>
  );
}

export function AnimatedProgressBar() {
  return (
    <div className="progress-bar-container">
      <div className="animated-progress-bar">
        <div className="animated-progress-bar progress-status"></div>
      </div>
    </div>
  );
}

function generateRandomContributionStats() {
  const contributions = [];
  const levels = [0, 0, 0, 3, 5, 10];

  // for each week of the year
  for (let i = 0; i < 52; i++) {
    const week = [];

    // make 7 squares and randomly assign a contribution level to each square in a week
    for (let i = 0; i < 7; i++) {
      week.push(levels[Math.floor(Math.random() * levels.length)]);
    }
    contributions.push(week);
  }
  return contributions;
}

function makeGraph() {
  const contributions = generateRandomContributionStats();

  return (
    <div className="graph">
      {contributions.map((week, weekIndex) => (
        <ul className={`week-${weekIndex + 1}`} key={weekIndex}>
          {week.map((level, dayIndex) => (
            <li key={dayIndex} className="graph-square" data-value={level} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export function GithubContributionsGraph() {
  return <div className="graph-container">{makeGraph()}</div>;
}
