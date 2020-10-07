import React from "react";
import "../styles/styleAdmin.css";
import "../scripts/scriptAdmin.js";

function AdminProducts() {
  return (
    <div className="App">
      <nav>
        <div>
            <a href="#header" class="logo">P&amp;P Produce Admin</a>
            <div class="type-admin-page">
                <button id="product-nav" class="select-admin-nav">Edit products</button>
                <button id="orders-nav">Orders</button>
            </div>
        </div>
        <button class="log-out">Log out</button>
        <div class="menu-admin-nav">
        </div>
    </nav>
    <div id="mySidenav" class="sidenav">
        <a href="AdminProducts.html">Edit products</a>
        <a href="AdminOrders.html">Orders</a>
        <a>Log out</a>
    </div>
    <div class="product-tab">
        <div class="head-product-tab">
            <div>
                <h3>Products</h3>
                <h3 id="num-product">9</h3>
            </div>
            <button>+ New Product</button>
        </div>
        <div class="display-product">
            <div class="select-filter-product">
                <div>
                    <label for="collection_select_product">Collection</label>
                    <select name="collection_select_product" id="colection_select_product">
                        <option value="all-product">All products</option>
                        <option value="best-sell">Best sellers</option>
                    </select>
                </div>
                <div>
                    <label for="filter_select_product">Filter by</label>
                    <select name="filter_select_product" id="filter_select_product">
                        <option value="all-product">All</option>
                        <option value="in-stock">In stock</option>
                        <option value="out-stock">Out of stock</option>
                        <option value="show">Visibility show</option>
                        <option value="hide">Visibility hide</option>
                    </select>
                </div>
                <div class="search-tab">
                    <div class="icon-search"></div>
                    <input id="search_product" type="text" class="search" placeholder="Search"/>
                </div>
            </div>
            <table class="table-display-product">
                <colgroup>
                <col style={{width:"22%"}}/>
                <col style={{width:"22%"}}/>
                <col style={{width:"18%"}}/>
                <col style={{width:"22%"}}/>
                <col style={{width:"16%"}}/>
                </colgroup>
                <thead>
                    <tr class="table-topics">
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
