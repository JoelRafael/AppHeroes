import React from 'react'
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../helpers/getHeroeById';

export const Heros = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(()=>getHeroeById(id),[id]);
  if (!hero) {
   return <Navigate to="/marvel"></Navigate>
  }
   const onNavigateBack = () => {
    navigate(-1)
  }
  fetch('https://service-dev.asms.app/api/Category/getAllCategory')
    .then((response) => response.json())
    .then((data) => console.log(data.data));
  const img = require(`../../assets/heroes/${id}.jpg`)
 
  return (
    <div className='row mt-5  animate__animated animate__fadeInLeft'>
      <div className="col-4">
        <img src={img} alt={hero.superhero} className='img-thumbnail'></img>
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>  
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>Firt appearance:</b> { hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary' onClick={onNavigateBack}>Regresar</button>
      </div>
   </div>
  )
}
