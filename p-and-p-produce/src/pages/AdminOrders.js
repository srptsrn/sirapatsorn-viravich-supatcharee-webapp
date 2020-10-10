import React from "react";
import "../styles/styleAdmin.css";
import AdminNavBar from '../components/AdminNavBar.js';

function AdminOrders() {
  return (
    <div className="app-admin">
      <AdminNavBar orders></AdminNavBar>
      <div className="orders-tab">
        <div className="head-orders-tab">
            <div>
                <h3>Orders</h3>
            </div>
        </div>
        <div className="display-orders">
            <div className="select-filter-orders">
                <div>
                    <label htmlFor="filter_select_order">Filter by</label>
                    <select name="filter_select_order" id="filter_select_order">
                        <option value="all-order">All</option>
                        <option value="cf-order">Confirmed</option>
                        <option value="cc-order">Cencel</option>
                        <option value="uc-order">Unconfirmed</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="status_select_order">Status</label>
                    <select name="status_select_order" id="status_select_order">
                        <option value="all-order">All</option>
                        <option value="sended-order">Sended</option>
                        <option value="unsend-order">Unsend</option>
                    </select>
                </div>
                <div className="search-tab">
                    <div className="icon-search"></div>
                    <input id="search_order" type="text" className="search" placeholder="Search"/>
                </div>
            </div>
            <table className="table-display-order">
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
                    <tr className="table-topics">
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
