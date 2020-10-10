import React from "react";
import "../styles/styleImgSlide.css";

class ImgSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: {
        0: "https://cdn.pixabay.com/photo/2017/07/15/15/00/easter-2506688_960_720.jpg",
        1: "https://cdn.pixabay.com/photo/2018/04/10/03/41/liver-3306262_960_720.jpg",
        2: "https://cdn.pixabay.com/photo/2014/11/09/01/20/pork-523102_960_720.jpg",
        3: "https://cdn.pixabay.com/photo/2019/12/20/14/44/meat-4708596_960_720.jpg",
        4: "https://cdn.pixabay.com/photo/2019/07/23/09/01/pork-4357068_960_720.jpg",
      },
      indexImg: 0
    };
  }
  setImg = (num) => {
    let size = 0, key;
    for (let key in this.state.imgList) {
        if (this.state.imgList.hasOwnProperty(key)) size++;
    }
    this.setState({ indexImg: this.state.indexImg += num });
    if (this.state.indexImg < 0) {
      this.setState({ indexImg: size - 1 });
    } else if (this.state.indexImg >= size) {
      this.setState({ indexImg:  0 });
    }
  }
  render() {
  return (
    <div>
      <section>
        <div className="image-head">
          <img src={this.state.imgList[this.state.indexImg]}/>
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

export default ImgSlide;
