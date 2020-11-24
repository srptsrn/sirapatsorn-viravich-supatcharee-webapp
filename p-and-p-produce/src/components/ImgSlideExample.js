import React from "react";
import "../styles/styleImgSlideEx.css";
import firebase from "../components/Firebase.js";
const connector = firebase.storage();
const storageRef = connector.ref();
const uploadImge = "banner/";
class ImgSlideExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [{ img: "" }],
      indexImg: 0,
    };
  }
  getImgUrl = async (path) => {
    return await storageRef.child(path).getDownloadURL();
  };
  imageRef = storageRef.child(uploadImge);
  onGetImgList = () => {
    this.imageRef
      .listAll()
      .then((res) => {
        const files = res.items;
        files.forEach((file) => {
          console.log(file);
          this.getImgUrl(file.fullPath)
            .then((url) => {
              console.log("onGetImgList: " + url);
              var array = [...this.state.dataBanner]; // make a separate copy of the array
              array.push({ img: url, name: "new upload", path: file.fullPath });
              if (JSON.stringify(array[0]) === JSON.stringify({ img: "" })) {
                array.shift();
              }
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
  componentDidMount() {
    this.onGetImgList();
  }
  setImg = (num) => {
    let size = 0,
      key;
    for (let key in this.state.dataBanner) {
      if (this.state.dataBanner.hasOwnProperty(key)) size++;
    }
    this.setState({ indexImg: (this.state.indexImg += num) });
    if (this.state.indexImg < 0) {
      this.setState({ indexImg: size - 1 });
    } else if (this.state.indexImg >= size) {
      this.setState({ indexImg: 0 });
    }
  };
  render() {
    return (
      <div>
        <section className="img-slide-section-example">
          <div className="image-head">
            <img src={this.state.dataBanner[this.state.indexImg].img} />
            <div className="arrow-button">
              <div className="prev-div" onClick={() => this.setImg(-1)}>
                <div className="prev-img"></div>
              </div>
              <div className="after-div" onClick={() => this.setImg(1)}>
                <div className="after-img"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ImgSlideExample;
