import ContactIcon from '../icons/Contact';

export default function Contact() {
  return (
    <section id="contact" className="contact card shadow">
      <ContactIcon />
      <ul>
        <li>
          <a href="mailto:manny.blum@gmail.com">manny.blum@gmail.com</a>
        </li>
        <li>(404) 713-0804</li>
        <li>Atlanta, GA</li>
        <li>
          <a href="www.linkedin.com/in/manny-blum-16a66a143">
            http://www.linkedin.com/in/manny-blum-16a66a143
          </a>
        </li>
      </ul>
    </section>
  );
}
