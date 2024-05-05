import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const About = () => {
  return (
    <div>
      <h1 className="text-center">About Us</h1>
      <p className="lead text-muted mb-5 container">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
        quibusdam eveniet, officia et nulla modi minus voluptates deleniti
        dignissimos consequatur id animi accusantium neque earum, pariatur
        sapiente magni labore ad illum. Dolorem recusandae fugiat, repellendus
        minus nostrum ducimus, tenetur, placeat ratione eligendi dolore ut
        excepturi corporis nihil alias. Rem ducimus itaque, deserunt doloribus
        reiciendis autem quam harum nihil. Dolor consectetur architecto culpa
        sequi qui sit tenetur doloribus sapiente aut. Eaque iste iure placeat, a
        debitis quis quos. Illo necessitatibus delectus ipsam at porro alias est
        minus incidunt facere omnis eveniet quas commodi quasi doloremque
        voluptas, dolor in molestiae dicta. Repellat?
      </p>
      <p className="container">
        This is a simple app built with React and Redux. It demonstrates how to
        structure your code using the component-container pattern
      </p>
      <div className="container my-3">
        <a href="#" className="mx-2" style={{ fontSize: "30px" }}>
          <FaFacebook />
        </a>
        <a href="#" className="mx-2" style={{ fontSize: "30px" }}>
          <FaGithub />
        </a>
        <a href="#" className="mx-2" style={{ fontSize: "30px" }}>
          <FaInstagram />
        </a>
        <a href="#" className="mx-2" style={{ fontSize: "30px" }}>
          <FaTwitter />
        </a>
        <a href="#" className="mx-2" style={{ fontSize: "30px" }}>
          <IoLogoWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default About;
