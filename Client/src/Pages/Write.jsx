import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Write = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  const [value, setValue] = useState(state?.descp || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8800/api/upload", formData, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = file ? await upload() : "";

    try {
      const postData = {
        title,
        descp: value,
        cat,
        img: imgUrl,
        date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      };

      if (state) {
        await axios.put(`http://localhost:8800/api/posts/${state.id}`, postData, { withCredentials: true });
      } else {
        await axios.post(`http://localhost:8800/api/posts/`, postData, { withCredentials: true });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='add'>
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder='Title'
          onChange={e => setTitle(e.target.value)}
        />
        <div className="editContainer">
          <ReactQuill
            className='editor'
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <p><b>Status: </b>Draft</p>
          </span>
          <span><b>Visibility: </b>Public</span>
          <input
            style={{ display: 'none' }}
            type="file"
            id='file'
            name=''
            onChange={e => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "art"}
              name='cat'
              value="art"
              id='art'
              onChange={e => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name='cat'
              value="science"
              id='science'
              onChange={e => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              name='cat'
              value="technology"
              id='technology'
              onChange={e => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cinema"}
              name='cat'
              value="cinema"
              id='cinema'
              onChange={e => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "design"}
              name='cat'
              value="design"
              id='design'
              onChange={e => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "food"}
              name='cat'
              value="food"
              id='food'
              onChange={e => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
