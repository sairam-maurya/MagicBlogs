import React, { useState } from 'react'
import Swal from 'sweetalert2';
import app_config from '../../config';

const Managevideos = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const { apiUrl } = app_config;

  const saveVideo = async (file) => {
    const res = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify({
        filename: file.name,
        name: file.name,
        user: currentUser._id,
        createdAt: new Date(),

      }),
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
  const uploadVideo = async (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);
    const res = await fetch(apiUrl + '/util/uploadfile', {
      method: 'POST',
      body: fd
    });
    if (res.status === 200) {
      console.log('file uploaded');
      saveVideo(file);
    }
  }

  

  return (
    <div>
      <h2>Manage Videos</h2>
      <hr />

      <div className='card'>
        <div className="card-body">
          <input type='file' onChange={uploadVideo} />
        </div>
      </div>

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