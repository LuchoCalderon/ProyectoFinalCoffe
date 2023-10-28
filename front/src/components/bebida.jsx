
// eslint-disable-next-line react/prop-types
const Drinks = ({drinks = []}) => {
  return (
    <div className='container'>
      <div className="row">
        {drinks.map((item, index) => (
        <div key={index} className="col-7 col-sm-3 mb-4">
          <div className="card w-2 p-3  align-items-center">
            <img   src={item.imagen} alt="" />
              <div className='card-body'>
                <h5 className="card-title">{item.nombre}</h5>
                <hr />
                <p className="d-inline-flex gap-1">
                  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Descripcion  </a>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <p>{item.descripcion} </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Drinks 