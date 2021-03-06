import {
  ORDERS_FETCHED,
  ORDER_CREATED,
  ORDER_PAID,
  ORDER_CANCELED,
  ORDER_DETAIL_FETCHED,
  CLEAR_ORDER,
  ORDER_ERROR,
  ORDER_SHIPPED,
  ORDER_DELIVERED,
} from "../actions/types";

const INITIAL_STATE = {
  currentOrder: null,
  orders: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDERS_FETCHED:
      return { ...state, ...payload };
    case ORDER_DETAIL_FETCHED:
    case ORDER_CREATED:
    case ORDER_PAID:
    case ORDER_CANCELED:
    case ORDER_SHIPPED:
    case ORDER_DELIVERED:
      return { ...state, currentOrder: payload };
    case CLEAR_ORDER:
    case ORDER_ERROR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
