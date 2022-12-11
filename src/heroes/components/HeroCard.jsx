import { Link } from "react-router-dom";
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImageUrl = require(`./../../assets/heroes/${id}.jpg`);
    const charactesByHero = <p>{ characters}</p>
  return (
      <>
          <div className="col animate__animated animate__fadeIn">
              <div className="card">
                  <div className="row no-gutters">
                      <div className="col-4">
                          <img src={heroImageUrl} className="card-img" alt={superhero}/>
                      </div>
                      <div className="col-8">
                          <div className="card-body">
                              <h5 clasName="card-title">{superhero}</h5>
                              <p className="card-text">{alter_ego}</p>
                              {(alter_ego !==characters)&&charactesByHero}
                              <p className="card-text">
                                  <small className="text-muted">{ first_appearance}</small>
                              </p>
                              <Link to={`/heroe/${id}`}>
                              Mas...
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
