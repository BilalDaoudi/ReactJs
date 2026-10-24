import Menu from "../Components/Menu";
export default function About() {
  return (
    <div  className="background">
      <Menu active="About" />
      <div className="row">
        <div className="col-7 p-3 mt-4">
          <div className="container">
            <div className="card-about">
              <h5 className="titre-about"> À propos de nous</h5>
              <p className="pabout">
                Bienvenue sur notre site de vente de PC portables ! Chez nous,
                vous trouverez une large sélection d'ordinateurs portables haut
                de gamme, adaptés à tous vos besoins professionnels et
                personnels.
              </p>
            </div>

            <div className="card-about">
              <h5 className="titre-about">Notre mission</h5>
              <p className="pabout">
                Notre mission est de fournir à nos clients les meilleurs PC
                portables du marché, alliant performance, fiabilité et design
                élégant. Nous nous efforçons de vous offrir une expérience
                d'achat exceptionnelle, en vous proposant un large choix de
                marques et de modèles, ainsi qu'un service clientèle de qualité.
              </p>
            </div>

            <div className="card-about">
              <h5 className="titre-about">Nos valeurs</h5>
              <ul className="valeur-about">
                <li>
                  <b>Qualité :</b> Nous sélectionnons méticuleusement chaque PC
                  portable que nous proposons afin de garantir leur qualité et
                  leur durabilité.
                </li>
                <li>
                  <b>Service clientèle :</b> Votre satisfaction est notre
                  priorité. Notre équipe est là pour répondre à toutes vos
                  questions et vous assister tout au long de votre parcours
                  d'achat.
                </li>
                <li>
                  <b>Transparence :</b> Nous croyons en la transparence et en
                  l'honnêteté envers nos clients. Toutes les informations
                  concernant nos produits et nos politiques sont clairement
                  communiquées.
                </li>
              </ul>
            </div>
          </div>

          {/* <h5>Retrouvez-nous sur les réseaux sociaux</h5>
          <p className="pabout">
            Suivez-nous sur les réseaux sociaux pour rester informé des
            dernières nouveautés, offres spéciales et promotions :
          </p> */}
        </div>
        <div className="col-5 p-5">
          <img src="./images/logo.jpg" className="img-logo mb-4" />
        </div>
      </div>
    </div>
  );
}
