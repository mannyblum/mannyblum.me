import '@/assets/styles/css-challenges.css';

export default function MenuChallenge() {
  return (
    <>
      <div className="title-wrapper">
        <h2 className="title">The Website!</h2>
      </div>
      <div className="menu">
        <div className="menu-item">
          <a href="#" className="menu-link">
            Home
          </a>
        </div>
        <div className="menu-item">
          <a href="#" className="menu-link">
            About Us
          </a>
        </div>
        <div className="menu-item">
          <a href="#" className="menu-link">
            Services
          </a>
        </div>
        <div className="menu-item">
          <a href="#" className="menu-link">
            Portfolio
          </a>
        </div>
        <div className="menu-item">
          <a href="#" className="menu-link">
            Contact Us
          </a>
        </div>
      </div>
      <img src="https://wp-assets.futurism.com/2019/10/elon-musk-donates-million-trees-1200x630.jpg" />
    </>
  );
}

/* Transitions Challenge
------------------------

The goal of this challenge is to add two transitions to the website; 
one to the title to change its color to #1f93ff on hover, 
and another to the menu items to make them grow to 2.5em *and* change color to #1f93ff on hover. 
Transitions will be added from the ground up, including pseudoselectors and the transitions themselves. 
All transitions need to have a duration of
1 second and use the ease-out timing function. Good luck!

*/
