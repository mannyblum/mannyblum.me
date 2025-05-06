function App() {
  return (
    <div className="container">
      <aside>
        <section className="skills">
          <h2>Skills</h2>
          <h3>Front-End Development</h3>
          <ul>
            <li>HTML5, CSS3, Sass/LESS</li>
            <li> JavaScript (ES6+), TypeScript, React, Redux, Vue, Next.js</li>
            <li>
              Responsive Design, Component Architecture, SPA Development,
              Material UI, Tailwind CSS, Bootstrap
            </li>
          </ul>

          <h3>UI/UX &amp; Design</h3>
          <ul>
            <li>Figma, Adobe XD, Sketch, Photoshop</li>
            <li> Wireframing, Prototyping</li>
            <li>Accessibility</li>
          </ul>

          <h3>Tooling &amp; Workflow</h3>
          <ul>
            <li>Git, VS Code, Linux/Unix, Agile/Scrum,</li>
            <li>Apollo Client (GraphQL), REST APIs,</li>
            <li>Node.js (basic)</li>
          </ul>
        </section>
        <section className="education">
          <h2>Education</h2>
          <p>
            <strong>Bachelors of Fine Arts in Interactive Media Design</strong>
            Art Institute of Atlanta
          </p>
          <p>
            <strong>
              Bachelors of Business Administration with a Major in MIS
            </strong>
            Georgia College &amp; State University
          </p>
        </section>
        {/* <section className="other">
          <h2>Interests</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section> */}
      </aside>
      <main>
        <section>
          <header className="intro card shadow">
            <h1>Manny Blum</h1>
            <h2>Front-End/UI/UX Engineer</h2>
          </header>
          <section className="card">
            <p>
              I’m a Front-End and UX Developer with a strong design foundation
              and over a decade of experience building intuitive, responsive web
              applications. I began my career crafting marketing sites and
              progressively transitioned into full-stack application
              development. My recent work emphasizes building modern, performant
              SPAs using <span className="hilite">React</span>,
              <span className="hilite">Vue</span>, and{" "}
              <span className="hilite">Next.js</span>, often integrated with{" "}
              <span className="hilite">Node.js</span> and{" "}
              <span className="hilite">GraphQL</span> APIs.
            </p>
            <p>
              My strengths lie in front-end architecture and implementation
              using <span className="hilite">HTML</span>,{" "}
              <span className="hilite">CSS/SCSS/LESS</span>,{" "}
              <span className="hilite">JavaScript</span>, and component-based
              frameworks. I also have hands-on experience with backend
              technologies including Node, Python, SQL, and MongoDB, as well as
              DevOps workflows in Linux environments.
            </p>
            <p>
              Passionate about creating user-centered solutions, I collaborate
              closely with cross-functional teams and mentor others to share
              knowledge and elevate product quality.
            </p>
          </section>
        </section>
        <section className="contact card shadow">
          <ul>
            <li>
              <a href="mailto:manny.blum@gmail.com">manny.blum@gmail.com</a>
            </li>
            <li>(404) 713-0804</li>
            <li>Atlanta, GA</li>
            <li>
              <a href="www.linkedin.com/in/manny-blum-16a66a143">
                http://linkedin.com
              </a>
            </li>
          </ul>
        </section>
        <section className="experience">
          <header>
            <h2>Experience</h2>
          </header>
          <article className="card shadow job">
            <header>
              <h4>
                Senior Software Engineer - Beep
                <span>JUNE 2022 - APRIL 2025</span>
              </h4>
            </header>
            <section className="card shadow project">
              <h6>AutonomOS, Engineering, Research & Development</h6>
              <p>
                Helped lead front-end efforts in developing a scalable platform
                to manage autonomous vehicle hardware and live operations, used
                by control center operators and site managers.
              </p>

              <ul>
                <li>
                  Built and maintained a complex, modular dashboard using{" "}
                  <span className="hilite">Next.js</span>,{" "}
                  <span className="hilite">Apollo Client (GraphQL)</span>, and{" "}
                  <span className="hilite">Material UI</span>, enabling
                  real-time visibility into vehicles, sites, users, assets, and
                  routes.
                </li>
                <li>
                  Collaborated closely with backend and middleware teams to
                  integrate <span className="hilite">APIs</span> and optimize
                  data flow through <span className="hilite">Apollo</span>{" "}
                  client-side cache.
                </li>
                <li>
                  Worked directly with product managers and stakeholders to
                  translate business requirements into intuitive{" "}
                  <span className="hilite">UX</span> flows and features.
                </li>
                <li>
                  Participated in daily Agile ceremonies, conducted code and
                  design reviews, and proactively addressed performance
                  bottlenecks and scalability issues. Frequently prototyped and
                  validated UI enhancements to improve the usability and
                  efficiency of the platform.
                </li>
              </ul>
            </section>
          </article>
          <article className="card shadow job">
            <header>
              <h4>
                Senior Software Developer - Bluefletch
                <span>NOV 2017 - June 2022</span>
              </h4>
            </header>
            <section className="card shadow project">
              <h6>EMS (Enterprise Mobility Security) Portal</h6>
              <ul>
                <li>
                  One of Bluefletch’s main offerings, EMS, is a service used to
                  provide enterprise level security to employees devices. My
                  main task is to oversee and develop various existing and up
                  new features for the portal. We leveraged React/Redux on the
                  front for this purpose.
                </li>
                <li>
                  It uses a variety of technologies such as{" "}
                  <span className="hilite">React/Redux</span>,{" "}
                  <span className="hilite">Node.js</span>,
                  <span className="hilite">Postgres</span>,{" "}
                  <span className="hilite">MQTT</span>,{" "}
                  <span className="hilite">GCP</span>,{" "}
                  <span className="hilite">Twilio</span> and others to best
                  provide solutions for our customers.
                </li>
                <li>
                  I work along side Business Analysts and Designers to review
                  feature changes or new ideas that can be used to further help
                  our customers succeed.
                </li>
                <li>
                  I would also help with mentoring Interns and Junior Developers
                  that worked on both Portal and Android features.
                </li>
              </ul>
            </section>
            <section className="card shadow project">
              <h6>Contractor Tablet Application</h6>
              <ul>
                <li>
                  This client was looking to leverage Windows tablets and an
                  application to help their techs be more efficient at
                  fulfilling work orders they have throughout the day. We
                  decided on a solution using{" "}
                  <span className="hilite">Angular</span> and{" "}
                  <span className="hilite">Cordova</span> to create an
                  application that, while technically could be used from any
                  browser, would feel native and easy to use for the techs.
                </li>
                <li>
                  After the success of this application, they decided they
                  wanted to update other applications in their suite to follow
                  this update in technology. We worked alongside them to deliver
                  a new suite of applications built using{" "}
                  <span className="hilite">Vue</span>that can be used in their
                  existing Windows tablets or in new updated Android tablets.
                </li>
              </ul>
            </section>
            <section className="card shadow project">
              <h6>Retail Inventory Management Services</h6>
              <ul>
                <li>
                  One of our clients is a large retail company that has been
                  using our Android service offerings to help them create
                  various tools their employees could use to manage their
                  inventory at stores. The client was looking to update a series
                  of old devices that were being used in their stores very
                  inefficiently.
                </li>
                <li>
                  I joined this team for this project to help them put together
                  a set of <span className="hilite">APIs</span>, built in{" "}
                  <span className="hilite">JAVA</span>, that would work
                  alongside their previous <span className="hilite">APIs</span>.
                  I worked alongside an Android Developer and together we would
                  figure out what services this{" "}
                  <span className="hilite">API</span> needed to provide and how
                  it would interact seamlessly with the Android application.
                </li>
              </ul>
            </section>
          </article>
          <article className="card shadow job">
            <header>
              <h4>
                Software Developer - Ionic Security
                <span>SEPT 2013 - SEPT 2017</span>
              </h4>
            </header>

            <section className="card shadow project">
              <h6>Developer Experience Engineer</h6>
              <ul>
                <li>
                  Joined this team to attempt to build a platform for Developers
                  to have access and use various{" "}
                  <span className="hilite">APIs</span> and{" "}
                  <span className="hilite">SDKs</span> being built by the Ionic
                  team.
                </li>
                <li>
                  Designed wireframes and user flows as proof-of-concepts.
                </li>
                <li>
                  Researched and analyzed other Developer Experience/Relation
                  programs to learn what makes them tick.
                </li>
                <li>
                  Gathered internal data to analyze and determine what the focus
                  of the portal would be.
                </li>
                <li>
                  Developed a 6 month plan to take the existing documentation
                  site and turn it into a developer friendly portal.
                </li>
              </ul>
            </section>
            <section className="card shadow project">
              <h6>Enterprise Services Software Developer</h6>
              <ul>
                <li>
                  Joined the Enterprise Services team to brainstorm ideas for an
                  internal tool for our Field Engineers.
                </li>
                <li>
                  The tool was to be a configuration builder used by the FEs to
                  maintain config files for various clients.
                </li>
                <li>
                  This was an effort to help not have to write the config files
                  by hand. The application needed to run offline so{" "}
                  <span className="hilite">Angular</span> was used with
                  LocalStorage to leverage data manipulation.
                </li>
                <li>
                  Various iterations of this process were built and tested to
                  give the user the best experience possible.
                </li>
              </ul>
            </section>
            <section className="card shadow project">
              <h6>UI/UX Developer</h6>
              <ul>
                <li>
                  Was part of the team involved in building a modular dashboard
                  application powered by various{" "}
                  <span className="hilite">APIs</span> using{" "}
                  <span className="hilite">Angular.js</span>.
                </li>
                <li>
                  Helped develop and maintain the task runners necessary to
                  power the build process of the dashboard, using tools such as
                  Grunt and Gulp.
                </li>
                <li>
                  Helped standardize specific code practices within the UI team.
                </li>
                <li>
                  Designed concepts for various sections, interfaces and
                  visualizations in the Dashboard UI
                </li>
              </ul>
            </section>
          </article>
          <article className="card shadow job">
            <header>
              <h4>
                Developer - CMG – Digital &amp; Strategy
                <span>APR 2011 - SEPT 2013</span>
              </h4>
            </header>
            <section className="card shadow project">
              <h6>UI Developer</h6>
              <ul>
                <li>
                  Built a Backbone application that powered a newsfeed in the
                  `My Sites`.
                </li>
                <li>
                  Was one of the leads and decision makers for the `My Sites`
                  project. A project that went on for almost a year.
                </li>
                <li>
                  Developed an extensible and responsive framework to build all
                  features upon.
                </li>
                <li>
                  Incorporated <span className="hilite">LESS</span> into our
                  workflow for rapid development.
                </li>
                <li>
                  Increased the use of our <span className="hilite">API</span>{" "}
                  to power some areas of content within the sites.
                </li>
                <li>
                  Improved site performance by implementing various{" "}
                  <span className="hilite">CSS</span> and
                  <span className="hilite">Javascript</span> performance tweaks.
                </li>
                <li>
                  Researched and implemented solutions to the mobile version of
                  the platform to make it more user friendly.
                </li>
                <li>
                  Built templates and worked alongside python developers to
                  implement new features required by the markets.
                </li>
                <li>
                  Was an advocate for clean, semantic markup; Modular{" "}
                  <span className="hilite">HTML/CSS</span>
                  and Performance.
                </li>
                <li>
                  Experimented with new technologies to determine if they could
                  fit within our workflow.
                </li>
              </ul>
            </section>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
