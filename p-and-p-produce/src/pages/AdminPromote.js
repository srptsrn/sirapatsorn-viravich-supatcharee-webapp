import React from "react";
import "../styles/styleAdmin.css";
import AdminNavBar from "../components/AdminNavBar.js";
import ImgSlideExample from "../components/ImgSlideExample.js";
import firebase from "../components/Firebase.js";
const connector = firebase.storage();
const storageRef = connector.ref();
const uploadImge = "banner/";
const uploadImgeBannerPublish = "banner/";
const uploadImgeNews = "news/";
const uploadImgeNewsPublish = "news/";

class AdminPromote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
      imageNews: { name: "", url: "" },
    };
  }
  fileOnChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const path = file.name;
      // console.log(file);
      // console.log("fileOnChange: " + path);
      this.OnUpload(file);
    }
  };
  fileOnChangeNews = (e) => {
    const file = e.target.files[0];
    if (file) {
      const path = file.name;
      this.OnUploadNews(file);
    }
  };
  pressUpload = () => {
    document.getElementById("file").click();
  };
  pressUploadNews = () => {
    document.getElementById("fileNews").click();
  };
  OnUploadNews = (file) => {
    const deleteImgRef = storageRef.child(this.state.imageNews.name);
    deleteImgRef
      .delete()
      .then((result) => {
        console.log("delete " + this.state.imageNews.name + " success");
      })
      .catch((err) => {
        console.log("delete " + this.state.imageNews.name + " fail");
      });
    const path = uploadImgeNews + file.name;
    const uploadTask = storageRef.child(path).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        console.log(err);
      },
      () => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            this.setState({ imageNews: { name: file.name, url: url } });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    );
  };

  OnUpload = (file) => {
    // console.log("OnUpload");
    const path = uploadImge + file.name;
    const uploadTask = storageRef.child(path).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => {
        console.log(err);
      },
      () => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            localStorage.setItem("current", url);
            // console.log("file : " + url);
            this.onGetImgList();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    );
  };
  getImgUrl = async (path) => {
    return await storageRef.child(path).getDownloadURL();
  };
  imageRef = storageRef.child(uploadImge);
  onGetImgList = () => {
    const spinnerLoading = document.querySelector("#spinner");
    var array = [];
    this.imageRef
      .listAll()
      .then((res) => {
        const files = res.items;
        files.forEach((file) => {
          this.getImgUrl(file.fullPath)
            .then((url) => {
              array.push({ img: url, name: "new upload", path: file.fullPath });
              this.setState({ dataBanner: array });
            })
            .catch((error) => {
              console.log({ msg: "error", error });
            });
        });
      })
      .catch((err) => {
        console.log({ msg: "error", err });
      });
  };
  imageRefBannerPublish = storageRef.child(uploadImgeBannerPublish);
  onGetImgListPublish = () => {
    var array = [];
    this.imageRefBannerPublish
      .listAll()
      .then((res) => {
        const files = res.items;
        files.forEach((file) => {
          this.getImgUrl(file.fullPath)
            .then((url) => {
              array.push({ img: url, name: file.name, path: file.fullPath });
              this.setState({ dataBanner: array });
            })
            .catch((error) => {
              console.log({ msg: "error", error });
            });
        });
      })
      .catch((err) => {
        console.log({ msg: "error", err });
      });
  };
  moveFirebaseFile = (currentPath, destinationPath) => {
    storageRef
      .child(currentPath)
      .listAll()
      .then((res) => {
        const files = res.items;
        files.forEach((file) => {
          this.getImgUrl(file.fullPath)
            .then((url) => {
              let status = connector
                .ref()
                .child(destinationPath + file.name)
                .put(file);
              status.on(
                "state_changed",
                (snapshot) => {
                  let progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (err) => {
                  console.log(err);
                },
                () => {
                  status.snapshot.ref
                    .getDownloadURL()
                    .then((url) => {
                      console.log("ssss");
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }
              );
              // let status = connector.ref().child(destinationPath + file.name).put(file);
              // status.on(
              //   "state_changed",
              //   (snapshot) => {
              //     let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              //   },
              //   (err) => {
              //     console.log(err);
              //   },
              //   () => {
              //     status.snapshot.ref
              //       .getDownloadURL()
              //       .then((url) => {
              //         localStorage.setItem("current", url);
              //         // console.log("file : " + url);
              //         this.onGetImgList();
              //       })
              //       .catch((e) => {
              //         console.log(e);
              //       });
              //   }
              // );
            })
            .catch((error) => {
              console.log({ msg: "error", error });
            });
        });
      })
      .catch((err) => {
        console.log({ msg: "error", err });
      });
  };
  componentWillMount() {
    //////////////////////////////////////////////
    // this.moveFirebaseFile(uploadImgeBannerPublish, uploadImge);
    this.onGetImgListPublish();
    const imageRefNews = storageRef.child(uploadImgeNewsPublish);
    imageRefNews
      .listAll()
      .then((res) => {
        const files = res.items;
        files.forEach((file) => {
          this.getImgUrl(file.fullPath)
            .then((url) => {
              this.setState({ imageNews: { name: file.fullPath, url: url } });
              console.log(this.state.imageNews);

              let status = connector
                .ref()
                .child(uploadImgeNews + file.name)
                .put(file);
              status.on(
                "state_changed",
                (snapshot) => {
                  let progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (err) => {
                  console.log(err);
                },
                () => {
                  status.snapshot.ref
                    .getDownloadURL()
                    .then((url) => {
                      console.log("ssss");
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }
              );
            })
            .catch((error) => {
              console.log({ msg: "error", error });
            });
        });
      })
      .catch((err) => {
        console.log({ msg: "error", err });
      });
  }
  render() {
    const onDeleteImg = async (item) => {
      const deleteImgRef = storageRef.child(item.path);
      console.log(item.path);
      deleteImgRef
        .delete()
        .then((result) => {
          console.log("delete " + item.path + " success");
          // window.location.reload();
          // var array = [...this.state.dataBanner]; // make a separate copy of the array
          // var index = array.indexOf(item);
          // if (index !== -1) {
          //   array.splice(index, 1);
          //   this.setState({ dataBanner: array });
          // }
        })
        .catch((err) => {
          console.log("delete " + item.path + " fail");
        });
    };
    const listBanner = this.state.dataBanner.map(function (item, i) {
      return (
        <div>
          <img key={i} className="storage-img" src={item.img} />
          <p className="name-img-insert">{item.name}</p>
          <div className="icon-move">
            <div className="icon-move-up" onClick={() => {}}></div>
            <div className="icon-move-down" onClick={() => {}}></div>
          </div>
          <div
            className="delete"
            onClick={() => {
              onDeleteImg(item);
            }}
          ></div>
        </div>
      );
    });
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
            <div className="edit-banner">
              <div className="add-banner" onClick={this.pressUpload}></div>
              <input
                className="hide"
                type="file"
                name="file"
                id="file"
                accept="images/*"
                onChange={(e) => this.fileOnChange(e)}
              />
              <div className="store-list">{listBanner}</div>
              <div id="spinner" className="spinner-hide"></div>
            </div>
            <div className="show-ex-edit-banner">
              <h4>Examble</h4>
              <ImgSlideExample></ImgSlideExample>
              <div>
                <button id="publish_banner">Publish</button>
                <button id="reset_banner">Reset</button>
              </div>
            </div>
          </div>

          <div className="head-orders-tab">
            <div>
              <br />
              <h3>News</h3>
            </div>
          </div>
          <div className="display-product">
            <div className="edit-news-img">
              <div className="add-banner" onClick={this.pressUploadNews}></div>
              <input
                className="hide"
                type="file"
                name="file"
                id="fileNews"
                accept="images/*"
                onChange={(e) => this.fileOnChangeNews(e)}
              />
              <img src={this.state.imageNews.url}></img>
              <div>
                <button id="publish_banner">Publish</button>
                <button id="reset_banner">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPromote;
