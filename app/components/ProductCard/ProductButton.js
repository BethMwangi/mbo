import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Tooltip, Icon, notification } from 'antd';

const Basket = () => (
  <svg width="20" height="20" viewBox="0 0 489 489">
    <path
      d="m440.1 422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6c-0.8-52.6-43.8-95.1-96.6-95.1s-95.8 42.5-96.6 95.1h-57.6c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 0.4-0.1 0.8-0.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-0.4 0-0.8-0.1-1.2zm-195.6-395.7c37.9 0 68.8 30.4 69.6 68.1h-139.2c0.8-37.7 31.7-68.1 69.6-68.1zm122.3 435h-244.6c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-0.4 20.7-21.1 37.5-46.4 37.5z"
      fill="#ffffff"
    />
  </svg>
);

// Notifications config
notification.config({
  placement: 'topRight',
  duration: 2
});

const handleLikeNotifier = () => {
  notification.open({
    message: "You've liked this product",
    description:
      'This is product is saved on your account and you check it out later.',
    icon: <Icon type="like" style={{ color: '#fddf80' }} />
  });
};

const handleCartNotifier = () => {
  notification.open({
    message: 'Product has been added to the cart.',
    description: 'This is product has been added to the cart.',
    icon: <Icon type="message" style={{ color: '#7abe95' }} />
  });
};

export class ProductButton extends PureComponent {
  render() {
    const { dispatchRoute } = this.props;
    return (
      <div className="cats-products-icons">
        <Tooltip title={<div>Add to cart</div>} placement="left">
          <button onClick={handleCartNotifier}>
            <Basket />
          </button>
        </Tooltip>
        <Tooltip title={<div>Like product</div>} placement="top">
          <button onClick={handleLikeNotifier}>
            <Icon type="heart-o" style={{ fontSize: 19 }} />
          </button>
        </Tooltip>
        <Tooltip title={<div>View product</div>} placement="right">
          <button onClick={() => dispatchRoute('/category/product/')}>
            <Icon type="eye-o" style={{ fontSize: 24 }} />
          </button>
        </Tooltip>
      </div>
    );
  }
}

const mapDispatchToprops = dispatch => ({
  dispatchRoute: route => dispatch(push(route))
});

export default connect(null, mapDispatchToprops)(ProductButton);