import Menu from "../Components/Menu";
export default function Home() {
  return (
    <div className="background">
      <Menu active="Home" />
      <div className="row">
        <div className="col-7 p-5">
          <div className="home">
            <h2>Bienvenue sur notre site de vente de PC portables</h2>
            <p>
              Nous proposons une sélection de PC portables de haute qualité à
              des prix compétitifs.
            </p>
            <p>
              Trouvez l'ordinateur portable qui correspond à vos besoins et à
              votre budget.
            </p>
            <a href="/Products">Découvrir notre collection</a>
          </div>
        </div>
        <div className="col-5 p-5">
          <img src="./images/logo.jpg" className="img-logo" />
        </div>
      </div>
    </div>
  );
}
