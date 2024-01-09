import aboutImg from '../images/about-pic.jpg';
import Title from './Title';
function About() {
  return (
    <section className="section" id="about">
      <Title title="about " subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At Roamify, we are more than just a travel service – we are
            storytellers of unforgettable experiences.
          </p>
          <p>
            With a passion for exploration and a commitment to exceptional
            service, we craft journeys that go beyond destinations, creating
            memories that last a lifetime.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
export default About;
