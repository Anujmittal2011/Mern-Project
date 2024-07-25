import React from 'react';

export const Product = ({data}) => {
    console.log('data',data)
  const myStyle = { width: '100%', backgroundColor: 'white' };
  const imageStyle = { width: '100%', height: '200px', objectFit: 'cover' };

  return (
    <div className="card mb-3" style={myStyle}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.assets.menu[0].url} 
        //   className="img-fluid rounded-start"
        className="img-fluid rounded-start" style={imageStyle}  />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fs-3 fw-semibold">{data.name}</h5>
            <p className="card-text fs-5">{data.menu_description}</p>
            <p className="card-text fs-5 mt-2 btn btn-secondary">{data.price}</p>


            <div className="row mt-3">
              <div className="col-6">
                <a href="#" className="btn btn-primary">Know More</a>
              </div>
              <div className="col-6 text-end">
                <button className="btn btn-primary" id="rzp-button1">Buy Now</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};



