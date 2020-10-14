import React from "react";
import "../styles/styleAdmin.css";
import AdminNavBar from "../components/AdminNavBar.js";
import ImgSlideExample from "../components/ImgSlideExample.js";

class AdminPromote extends React.Component {
  fileOnChange = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const path = file.name;
      console.log(path);
    }
  };
  render() {
    return (
      <div className="app-admin">
        <AdminNavBar promote></AdminNavBar>
        <div className="orders-tab">
          <div className="head-orders-tab">
            <div>
              <h3>Edit Banner</h3>
            </div>
          </div>
          <div className="display-edit-banner">
            <div className='edit-banner'>
              <div className='add-banner'></div>
              <input
                className='hide'
                type="file"
                name="file"
                id="file"
                accept="images/*"
                onChange={(e) => this.fileOnChange(e)}
              />
              <div className="store-list">
                <div>
                  <img
                    className="storage-img"
                    src="https://cdn.pixabay.com/photo/2017/07/15/15/00/easter-2506688_960_720.jpg"
                  />
                  <p>file name.jpg</p>
                  <div className='icon-move'><div className='icon-move-up'></div><div className='icon-move-down'></div></div>
                  <div className="delete"></div>
                </div>
                <div>
                  <img
                    className="storage-img"
                    src="https://cdn.pixabay.com/photo/2018/04/10/03/41/liver-3306262_960_720.jpg"
                  />
                  <p>file name.jpg</p>
                  <div className='icon-move'><div className='icon-move-up'></div><div className='icon-move-down'></div></div>
                  <div className="delete"></div>
                </div>
                <div>
                  <img
                    className="storage-img"
                    src="https://cdn.pixabay.com/photo/2014/11/09/01/20/pork-523102_960_720.jpg"
                  />
                  <p>file name.jpg</p>
                  <div className='icon-move'><div className='icon-move-up'></div><div className='icon-move-down'></div></div>
                  <div className="delete"></div>
                </div>
                <div>
                  <img
                    className="storage-img"
                    src="https://cdn.pixabay.com/photo/2019/12/20/14/44/meat-4708596_960_720.jpg"
                  />
                  <p>file name.jpg</p>
                  <div className='icon-move'><div className='icon-move-up'></div><div className='icon-move-down'></div></div>
                  <div className="delete"></div>
                </div>
                <div>
                  <img
                    className="storage-img"
                    src="https://cdn.pixabay.com/photo/2019/07/23/09/01/pork-4357068_960_720.jpg"
                  />
                  <p>file name.jpg</p>
                  <div className='icon-move'><div className='icon-move-up'></div><div className='icon-move-down'></div></div>
                  <div className="delete"></div>
                </div>
              </div>
              <div id="spinner" className="hide"></div>
            </div>
            <div className='show-ex-edit-banner'>
              <h4>Examble</h4>
                <ImgSlideExample></ImgSlideExample>
              <div>
              <button id='publish_banner'>Publish</button>
              <button id='reset_banner'>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPromote;
