import React, { useState } from 'react'
import Swal from 'sweetalert2';
import app_config from '../../config';

const Managevideos = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const { apiUrl } = app_config;

  const convertVideotoBlog = async (id, index) => {
    setSelBlog(index);
    console.log(id);
    // setTimeout(() => {
    //   console.log(id);
    //   setSelBlog(null);
    // }, 3000);
    // return;
    // setBlogLoading(true);
    const response = await fetch(url + "/util/transcribe/" + id);
    console.log(response.status);
    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "Video converted to blog",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      const data = await response.json();
      console.log(data);
      // getDataFromBackend();
      
      navigate("/blog/addblog/" + id);
      // setBlogLoading(false);
    } else if (response.status === 400) {
      toast.error("Video is not transcribed yet");
      // setBlogLoading(false);
    } else if (response.status === 500) {
      toast.error("Internal server error");
      // setBlogLoading(false);
    }
    setSelBlog(null);
  };

  const deleteVideo = async (id) => {
    console.log(id);
    const response = await fetch(url + "/video/deletebyid/" + id, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      toast.success("Video Deleted Successfully");
      getDataFromBackend();
    }
  };

  const displayVideo = () => {
    if (!loading) {
      return userArray.map(({ _id, title, description, file, thumbnail }, index) => (
        <div className="col-md-3 mt-4" key={_id}>
            <div
              className="thumb-small"
              style={{ backgroundImage: `url('${thumbnail ?url + "/" + thumbnail: 'video-placeholder.webp'}')` }}
            >
              <div className="p-3 thumb-options">
                {/* <h5 className="card-title">{title}</h5>
              <p className="text-muted">{description}</p> */}
                <Link to={"/user/viewvideo/" + _id}>
                  <button className="btn btn-primary btn-floating">
                    <i class="fas fa-eye "></i>
                  </button>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger btn-floating"
                  onClick={(e) => deleteVideo(_id)}
                >
                  <i class="fas fa-trash"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
                {!blogLoading ? (
                  <button
                    className={"btn btn-secondary "+(selBlog===index?'btn-rounded':'btn-floating')}
                    onClick={(e) => convertVideotoBlog(_id, index)}
                  ><i className={"fa-solid fa-gear "+(selBlog===index?'fa-spin':'')}></i>
                    {selBlog===index?' Converting ...':'' }
                  </button>
                ) : (
                  <button className="btn btn-success" disabled>
                    Converting...
                  </button>
                )}
              </div>

              <p className="h3 text-muted ms-3">{title}</p>
              <p className="h6 text-muted ms-3">{file}</p>
            </div>
          
        </div>
      ));
    } else {
      return (
        <div className="text-center">
          {/* <Loading></Loading> */}
          <h1>Loading ...</h1>
        </div>
      );
    }
  };

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