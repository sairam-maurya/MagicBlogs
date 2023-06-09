import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import app_config from '../../config';
import { toast } from 'react-hot-toast';


const AddBlog = () => {

  const { id } = useParams();
  const url = app_config.apiUrl;
  const [videoData, setVideoData] = useState("");
  const [loading, setLoading] = useState(false);
  const [fieldValues, setfieldValues] = useState("")

  const [selBlog, setSelBlog] = useState("");
  const [blogData, setBlogData] = useState('');
  const navigate = useNavigate();

  const getDatafromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/video/getbyid/" + id);
    // console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setBlogData(data.transcription)
      setVideoData(data);
      setfieldValues({
        title: data.title,
        description: data.description,
        text: data.transcription.text,
        category: "",
        createdAt: new Date(),
      })
      setLoading(false);
    }
  };

  const uploadBlog = (e) => {
    const file = e.target.files[0];
    setSelBlog(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image uploaded successfully");
        console.log("uploaded");
      }
    });
  };

  useEffect(() => {
    getDatafromBackend()
  }, [])

  const [UserList, setUserList] = useState([]);
  const [value, setValue] = useState('');

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/addblog/getall')
    const data = await res.json();
    console.log(data);
    setUserList(data);
  };

  const blogForm = useFormik({
    initialValues: {
      title: '',
      category: '',
      description: '',
      coverimage: '',
      user: currentUser._id,
      data: '',
      createdAt: new Date()
    },


    onSubmit: async (values) => {
      values.coverimage = selBlog;
      values.data = blogData;
      console.log(values);

      //making request to backend
      //1.what us address?
      //2.reqest method
      //3.data
      //4.data format

      const res = await fetch('http://localhost:5000/blog/add', {
        method: 'POST',
        body: JSON.stringify(values),                     //by default it is get but here we  are   chning to post ..
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
        navigate('/main/browseblog');

      } else {
        Swal.fire({
          icon: 'error',
          title: 'oops',
          text: 'something went wrong!'

        });
      }
    }

  })


  return (
    <div>
      <div className='container' style={{ backgroundImage: "url('https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png')" }} >
        <div>
          <h1 className='my-4'>AddBlog</h1>
          <hr />
        </div>
        <div className='card d-flex justify-content-center align-items-center'>
          <div className='card-body px-2 py-5 '>
            <form onSubmit={blogForm.handleSubmit}>
              <label htmlFor="title">Blog Title</label>
              <input className='form-control' id="title" onChange={blogForm.handleChange} value={blogForm.values.title} />
              <label htmlFor="category">Catgory</label>
              <input className='form-control' id="category" onChange={blogForm.handleChange} value={blogForm.values.category} />
              <label htmlFor="category">Description</label>
              <input className='form-control' id="description" onChange={blogForm.handleChange} value={blogForm.values.description} />
              <label htmlFor="cover">upload Cover-img</label>
              <input hidden id="cover" onChange={uploadBlog} />








              <MDEditor
                value={blogData}
                onChange={setBlogData}
              />
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Submit
              </button>
            </form>
          </div>

        </div>
        <form>

        </form>
      </div>
    </div>
  )
}

export default AddBlog