import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Managevideos = () => {

  // const [currentUser]

  const saveVideo = async (file) => {
    const res = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify({
        filename: file.name,
        name: file.name,
        // user: ,
        createdAt: Date,
        
      }),                     //by default it is get but here we  are   chning to post ..
      //to know abut get and post see in ppt
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status)
    console.log(await res.text())

    console.log('form submitted');
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Nice',
        text: 'User Registered sucessfully'
      });

    } else {
      Swal.fire({
        icon: 'error',
        title: 'oops',
        text: 'something went wrong!'
      });
    }
  }

  return (
    <div>
      <h2>Manage Blog</h2>
      <hr/>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
        </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                className="card-img-top"
                alt="Palm Springs Road"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
        </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                className="card-img-top"
                alt="Los Angeles Skyscrapers"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in
                  to additional content.
        </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                className="card-img-top"
                alt="Skyscrapers"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
        </p>
              </div>
            </div>
          </div>
        </div>

      </div>
     

    </div>
  )
}

export default Managevideos