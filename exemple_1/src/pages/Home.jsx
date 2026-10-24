import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
      <img
        src="../Images/bilal.jpg"
        alt="Bilal Daoudi"
        className="profile-image"
      />
      <h1 className="name">Bilal Daoudi</h1>
      <p className="title">Développeur Web Full Stack</p>
      <div className="button-container">
        <button className="action-button"></button>
      </div>
    </div>
      <Footer />
    </div>
  );
}
