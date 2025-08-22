import { Link } from "react-router-dom";

export default function SideCart() {
  return (
    <div className="sidemenu-wrapper sidemenu-cart">
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls">
          <i className="far fa-times"></i>
        </button>
        <div className="widget woocommerce widget_shopping_cart">
          <h3 className="widget_title">Shopping cart</h3>
          <div className="widget_shopping_cart_content">
            <ul className="woocommerce-mini-cart cart_list product_list_widget">
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="/assets/img/product/product_thumb_1_1.png"
                    alt="Cart Image"
                  />
                  Books
                </Link>
                <span className="quantity">
                  1 ×{" "}
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    940.00
                  </span>
                </span>
              </li>

              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="/assets/img/product/product_thumb_1_2.png"
                    alt="Cart Image"
                  />
                  Medicine
                </Link>
                <span className="quantity">
                  1 ×{" "}
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    899.00
                  </span>
                </span>
              </li>

              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="/assets/img/product/product_thumb_1_3.png"
                    alt="Cart Image"
                  />
                  Dress
                </Link>
                <span className="quantity">
                  1 ×{" "}
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    756.00
                  </span>
                </span>
              </li>

              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="/assets/img/product/product_thumb_1_4.png"
                    alt="Cart Image"
                  />
                  Chair
                </Link>
                <span className="quantity">
                  1 ×{" "}
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    723.00
                  </span>
                </span>
              </li>

              <li className="woocommerce-mini-cart-item mini_cart_item">
                <Link to="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </Link>
                <Link to="#">
                  <img
                    src="/assets/img/product/product_thumb_1_5.png"
                    alt="Cart Image"
                  />
                  Cloths
                </Link>
                <span className="quantity">
                  1 ×{" "}
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    1080.00
                  </span>
                </span>
              </li>
            </ul>

            <p className="woocommerce-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                4398.00
              </span>
            </p>

            <p className="woocommerce-mini-cart__buttons buttons">
              <Link to="/cart" className="th-btn wc-forward">
                View cart
              </Link>
              <Link to="/checkout" className="th-btn checkout wc-forward">
                Checkout
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
