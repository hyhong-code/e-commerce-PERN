import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getOrderDetail } from "../../actions/orderActions";
import OrderDetailItem from "../OrderDetailItem";
import OrderSummaryPanel from "../OrderSummaryPanel";

const OrderDetail = ({
  match,
  currentOrder,
  isAuthenticated,
  getOrderDetail,
}) => {
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (isAuthenticated) {
        getOrderDetail(match.params.orderId);
      }
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <section id="order-detail" className="py-6 text-dark bg-light">
      <div className="text-center ">
        <h1 className="display-4 text-primary">Order Summary</h1>
        {currentOrder && (
          <p className="lead text-muted">ORDER #: {currentOrder.id}</p>
        )}
      </div>

      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb py-2">
            <li class="breadcrumb-item">
              <Link to="/" className="text-secondary">
                Home
              </Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="/orders" className="text-secondary">
                Orders
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Order Summary
            </li>
          </ol>
        </nav>
        <div className="py-3">
          <div className="row">
            <div className="col-lg-8 order-1 order-lg-0">
              {currentOrder &&
                currentOrder.cart.cartItems.map((cartItem) => (
                  <OrderDetailItem
                    key={cartItem.cart_item_id}
                    cartItem={cartItem}
                  />
                ))}
            </div>
            <div className="col-lg-4 order-0 mb-4 mb-lg-0">
              {currentOrder && <OrderSummaryPanel order={currentOrder} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({
  order: { currentOrder },
  auth: { isAuthenticated },
}) => ({ currentOrder, isAuthenticated });

export default connect(mapStateToProps, { getOrderDetail })(OrderDetail);
