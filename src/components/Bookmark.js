import React, { Fragment, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const Bookmark = () => {
  const [formData, setFormData] = useState({
    url: '',
    label: '',
  });
  var msg = '';

  const { url, label } = formData;
  async function showAlert() {
    msg = `<div class="col-8 mt-1 alert alert-success" role="alert">
  Congrats! ${label} Added To Bookmarks!
  </div>`;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://bookmarkr-api.herokuapp.com/bookmark?url=${url}&label=${label}`
      );
      // alert('Bookmark Added');
      function showAlert() {
        msg = `<div class="col-8 mt-1 alert alert-success" role="alert">
      Congrats! ${label} Added To Bookmarks!
      </div>`;
      }
      showAlert();

      setFormData({ url: '', label: '' });
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <center>
          <form className='form myForm col-8' onSubmit={(e) => onSubmit(e)}>
            {ReactHtmlParser(msg)}
            <div className='wrapper m-4'>
              <div className='row'>
                <input
                  className='form-control border-dark'
                  placeholder='Enter URL'
                  type='url'
                  name='url'
                  value={url}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className='row mt-2'>
                <input
                  className='form-control border-dark'
                  placeholder='Enter Label'
                  type='text'
                  name='label'
                  value={label}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>

              <center>
                <div className='row mt-2'>
                  <input
                    type='submit'
                    className='btn btn-success form-control'
                    value='Add'
                  />
                </div>
              </center>
            </div>
          </form>
        </center>
      </div>
    </Fragment>
  );
};

export default Bookmark;
