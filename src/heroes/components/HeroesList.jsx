import { useMemo } from "react"
import {getHeroesByPublisher} from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard"
export const HeroesList = ({ publisher }) => {
    const comict = useMemo(()=>getHeroesByPublisher(publisher),[publisher])
  return (
      <>
          <div className="row rows-cols-1 row-cols-md-3 g-3">
              {comict.map(hero => (
                  <HeroCard key={hero.id}
                 {...hero} ></HeroCard>
              ))}
      </div>
      </>
  )
}
