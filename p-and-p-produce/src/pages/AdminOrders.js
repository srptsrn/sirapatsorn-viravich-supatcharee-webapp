import React from "react";
import "../styles/styleAdmin.css";
import "../scripts/scriptAdmin.js";

function AdminOrders() {
  return (
    <div className="App">
      <nav>
        <div>
          <a href="#header" class="logo">
            P&amp;P Produce Admin
          </a>
          <div class="type-admin-page">
            <button id="product-nav">Edit products</button>
            <button id="orders-nav" class="select-admin-nav">
              Orders
            </button>
          </div>
        </div>
        <button class="log-out">Log out</button>
        <div class="menu-admin-nav"></div>
      </nav>
      <div id="mySidenav" class="sidenav">
        <a href="AdminProducts.html">Edit products</a>
        <a href="AdminOrders.html">Orders</a>
        <a>Log out</a>
      </div>
      <div class="orders-tab">
        <div class="head-orders-tab">
            <div>
                <h3>Orders</h3>
            </div>
        </div>
        <div class="display-orders">
            <div class="select-filter-orders">
                <div>
                    <label for="filter_select_order">Filter by</label>
                    <select name="filter_select_order" id="filter_select_order">
                        <option value="all-order">All</option>
                        <option value="cf-order">Confirmed</option>
                        <option value="cc-order">Cencel</option>
                        <option value="uc-order">Unconfirmed</option>
                    </select>
                </div>
                <div>
                    <label for="status_select_order">Status</label>
                    <select name="status_select_order" id="status_select_order">
                        <option value="all-order">All</option>
                        <option value="sended-order">Sended</option>
                        <option value="unsend-order">Unsend</option>
                    </select>
                </div>
                <div class="search-tab">
                    <div class="icon-search"></div>
                    <input id="search_order" type="text" class="search" placeholder="Search"/>
                </div>
            </div>
            <table class="table-display-order">
                <colgroup>
                    <col style={{width:"16%"}}/>
                    <col style={{width:"16%"}}/>
                    <col style={{width:"16%"}}/>
                    <col style={{width:"16%"}}/>
                    <col style={{width:"16%"}}/>
                    <col style={{width:"16%"}}/>
                    <col style={{width:"4%"}}/>
                </colgroup>
                <thead>
                    <tr class="table-topics">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Confirm</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="body_table_orders">
                </tbody>
            </table>            
        </div>
    </div>
    </div>
  );
}

export default AdminOrders;
