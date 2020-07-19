import React, { useState } from "react";
import { connect } from "react-redux";

import OrderListItem from "../components/OrderListItem";
import { getAllOrders } from "../actions/orderActions";

const DashOrders = ({ orders, getAllOrders }) => {
  const [formData, setFormData] = useState({
    id: "",
    user_id: "",
    status: "",
    sort: "",
    limit: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { id, user_id, status, sort, limit } = formData;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    getAllOrders(formData);
  };

  return (
    <div
      class="tab-pane fade tab-orders"
      id="v-pills-orders"
      role="tabpanel"
      aria-labelledby="v-pills-orders-tab"
    >
      <div className="card card-body mb-3">
        <form>
          <div class="form-row">
            <div class="col-6 mb-2">
              <input
                type="text"
                class="form-control"
                name="id"
                placeholder="Order ID"
                onChange={handleChange}
                value={id}
              />
            </div>
            <div class="col-6 mb-2">
              <input
                type="text"
                class="form-control"
                name="user_id"
                placeholder="User ID"
                onChange={handleChange}
                value={user_id}
              />
            </div>
            <div className="col-4 mb-2">
              <select
                class="custom-select custom-select-sm"
                onChange={handleChange}
                value={status}
                name="status"
              >
                <option value="" selected>
                  Order Status
                </option>
                <option value="CONFIRMED">CONFIRMED</option>
                <option value="PAID">PAID</option>
                <option value="SHIPPED">SHIPPED</option>
                <option value="DELIVERED">DELIVERED</option>
                <option value="CANCELED">CANCELED</option>
              </select>
            </div>
            <div className="col-4 mb-2">
              <select
                class="custom-select custom-select-sm"
                onChange={handleChange}
                value={sort}
                name="sort"
              >
                <option value="" selected>
                  Sort By
                </option>
                <option value="final_price-ASC">Price Lowest First</option>
                <option value="final_price-DESC">Price Highest First</option>
                <option value="created_at-DESC">Date Most Recent First</option>
                <option value="created_at-ASC">Date Earliest First</option>
              </select>
            </div>
            <div className="col-4 mb-2">
              <select
                class="custom-select custom-select-sm"
                onChange={handleChange}
                value={limit}
                name="limit"
              >
                <option value="" selected>
                  # Results
                </option>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className="col-4">
              <button
                onClick={handleSubmit}
                className="btn btn-outline-primary btn-block btn-sm"
              >
                Search
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-outline-primary btn-block btn-sm">
                Clear
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-outline-primary btn-block btn-sm">
                All Orders
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row orderlist-head">
            <div className="col-6 d-none d-lg-block p-0 ">
              <strong>Order No.</strong>
            </div>
            <div className="col-5 col-lg-2 p-0 ">
              <strong>Order Date</strong>
            </div>
            <div className="col-4 col-lg-2  p-0">
              <strong>Total</strong>
            </div>
            <div className="col-3 col-lg-2  p-0">
              <strong>Status</strong>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            {orders && orders.map((order) => <OrderListItem order={order} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ order: { orders } }) => ({ orders });

export default connect(mapStateToProps, { getAllOrders })(DashOrders);
