import React from "react";
import "../styles/styleAdmin.css";
import AdminNavBar from "../components/AdminNavBar.js";

class AdminProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduct: [
        {
          img:
            "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
          name: "Chicken1",
          price: 500.0,
          inventory: 100,
          visibility: 0,
        },
        {
          img:
            "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
          name: "Chicken2",
          price: 50.0,
          inventory: 100,
          visibility: 0,
        },
        {
          img:
            "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
          name: "Chicken3",
          price: 50.0,
          inventory: 100,
          visibility: 0,
        },
        {
          img:
            "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
          name: "Chicken4",
          price: 50.0,
          inventory: 100,
          visibility: 1,
        },
        {
          img:
            "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
          name: "Chicken5",
          price: 50.0,
          inventory: 100,
          visibility: 1,
        },
      ],
    };
  }

  render() {
    const changeVis = (index, selectItem) => {
      let dataProduct = [...this.state.dataProduct];
      if (selectItem.visibility == 1) {
        dataProduct[index] = { ...dataProduct[index], visibility: 0 };
        this.setState({ dataProduct });
      } else {
        dataProduct[index] = { ...dataProduct[index], visibility: 1 };
        this.setState({ dataProduct });
      }
    };
    const visibility = {
      0: "https://www.flaticon.com/svg/static/icons/svg/565/565654.svg", // show
      1: "https://www.flaticon.com/svg/static/icons/svg/565/565655.svg", // hide
    };
    const listItemsProduct = this.state.dataProduct.map(function (item, i) {
      return (
        <tr key={i}>
          <td>
            <img className="table-img-product" src={item.img}></img>
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.inventory}</td>
          <td className="action-edit-product">
            <div
              className="visibility"
              style={{
                backgroundImage: `url("${visibility[item.visibility]}")`,
              }}
              onClick={() => {
                changeVis(i, item);
              }}
            ></div>
            <div className="duplicate"></div>
            <div className="delete"></div>
          </td>
        </tr>
      );
    });
    return (
      <div className="app-admin">
        <AdminNavBar products></AdminNavBar>
        <div className="product-tab">
          <div className="head-product-tab">
            <div>
              <h3>Products</h3>
              <h3 id="num-product">9</h3>
            </div>
            <button>+ New Product</button>
          </div>
          <div className="display-product">
            <div className="select-filter-product">
              <div>
                <label htmlFor="collection_select_product">Collection</label>
                <select
                  name="collection_select_product"
                  id="colection_select_product"
                >
                  <option value="all-product">All products</option>
                  <option value="best-sell">Best sellers</option>
                </select>
              </div>
              <div>
                <label htmlFor="filter_select_product">Filter by</label>
                <select name="filter_select_product" id="filter_select_product">
                  <option value="all-product">All</option>
                  <option value="in-stock">In stock</option>
                  <option value="out-stock">Out of stock</option>
                  <option value="show">Visibility show</option>
                  <option value="hide">Visibility hide</option>
                </select>
              </div>
              <div className="search-tab">
                <div className="icon-search"></div>
                <input
                  id="search_product"
                  type="text"
                  className="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <table className="table-display-product">
              <colgroup>
                <col style={{ width: "22%" }} />
                <col style={{ width: "22%" }} />
                <col style={{ width: "18%" }} />
                <col style={{ width: "22%" }} />
                <col style={{ width: "16%" }} />
              </colgroup>
              <thead>
                <tr className="table-topics">
                  <th></th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>
                    INV<span>ENTORY</span>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="body_table_product">{listItemsProduct}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminProducts;
