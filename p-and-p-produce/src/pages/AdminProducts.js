import React from "react";
import "../styles/styleAdmin.css";
import "../scripts/scriptAdmin.js";
import history from '../history';
import AdminNavBar from '../components/AdminNavBar.js';

function AdminProducts() {
  return (
    <div className="app">
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
                    <select name="collection_select_product" id="colection_select_product">
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
                    <input id="search_product" type="text" className="search" placeholder="Search"/>
                </div>
            </div>
            <table className="table-display-product">
                <colgroup>
                <col style={{width:"22%"}}/>
                <col style={{width:"22%"}}/>
                <col style={{width:"18%"}}/>
                <col style={{width:"22%"}}/>
                <col style={{width:"16%"}}/>
                </colgroup>
                <thead>
                    <tr className="table-topics">
                        <th></th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>INV<span>ENTORY</span></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="body_table_product">
                </tbody>
            </table>
        </div>
    </div>
    </div>
  );
}

export default AdminProducts;
