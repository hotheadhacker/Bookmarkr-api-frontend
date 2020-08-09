import React, { Fragment, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const View = () => {
  const [HTML, setHTML] = useState('');

  var temp = '';
  async function showBookmarks() {
    let response = await axios.get('https://bookmarkr-api.herokuapp.com/view-bookmark');
    var data = await response.data;
    console.log(data.length);
    let i = 0;
    for (i = data.length - 1; i >= 0; i--) {
      temp += `<tr>
           <th>${data.length - i}</th>
           <td>${data[i].label.toString()}</td>
           <td><a href='${data[i].url.toString()}' target='_BLANK'> ${data[
        i
      ].url.toString()}</a></td>
           <td>${data[i].date.toString()}</td>
             </tr>`;
    }
    setHTML(temp);
    return;
    // show(() => this.setState({ HTML: temp }));
  }
  //   ;
  //   const onChange = e => {
  //     setHTML(HTML + temp);
  //   };
  //
  showBookmarks();
  //   try {
  //     const res = await axios.get('/view-bookmark');
  //     var data = await res.data;
  //   } catch (err) {
  //     console.error(JSON.parse(err.response.data));
  //   }
  //   var data = '';

  //   var bookmarks = JSON.parse(str);
  //   console.log(data.length);
  //   let i = 0;
  //   for (i = 0; i <= data.length - 1; i++) {
  //     HTML += `<tr>
  //          <td>${i + 1}</td>
  //          <td>${data[i].label.toString()}</td>
  //          <td>${data[i].url.toString()}</td>
  //          <td>${data[i].date.toString()}</td>
  //            </tr>`;
  //   }

  return (
    <Fragment>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Label</th>
            <th scope='col'>URL</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>{ReactHtmlParser(HTML)}</tbody>
      </table>
    </Fragment>
  );
};

export default View;
