import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const animal = props.data;
  return (
    <Link to={`/view/${animal._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ animal.nome }</h5>
          <span className="badge bg-primary">{ animal.especie }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
