import { MapPin, Headset, Send, ClockCheck } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo-row">
            <img src="logo.svg" alt="Nest" />
          </div>

          <p className="footer-description">
            Awesome grocery store website template
          </p>

          <ul className="contact-list">
            <li>
              <MapPin size={18} className="icon" />
              <span>
                <strong>Address:</strong> 5171 W Campbell Ave Kent, Utah 53127
                United States
              </span>
            </li>

            <li>
              <Headset size={18} className="icon" />
              <span>
                <strong>Call Us:</strong> (+91) - 540-025-124553
              </span>
            </li>

            <li>
              <Send size={18} className="icon" />
              <span>
                <strong>Email:</strong> sale@Nest.com
              </span>
            </li>

            <li>
              <ClockCheck size={18} className="icon" />
              <span>
                <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
              </span>
            </li>
          </ul>
        </div>

        <FooterCol
          title="Company"
          links={[
            "About Us",
            "Delivery Information",
            "Privacy Policy",
            "Terms & Conditions",
            "Contact Us",
            "Support Center",
            "Careers",
          ]}
        />

        <FooterCol
          title="Account"
          links={[
            "Sign In",
            "View Cart",
            "My Wishlist",
            "Track My Order",
            "Help Ticket",
            "Shipping Details",
            "Compare products",
          ]}
        />

        <FooterCol
          title="Corporate"
          links={[
            "Become a Vendor",
            "Affiliate Program",
            "Farm Business",
            "Farm Careers",
            "Our Suppliers",
            "Accessibility",
            "Promotions",
          ]}
        />

        <FooterCol
          title="Popular"
          links={[
            "Milk & Flavoured Milk",
            "Butter and Margarine",
            "Eggs Substitutes",
            "Marmalades",
            "Sour Cream and Dips",
            "Tea & Kombucha",
            "Cheese",
          ]}
        />

        {/* App Section */}
        <div>
          <h5 className="install-title">Install App</h5>
          <p className="install-subtitle">From App Store or Google Play</p>

          <div className="app-buttons">
            <img src="app-store.jpg" alt="App Store" />
            <img src="google-play.jpg" alt="Google Play" />
          </div>

          <p className="payment-title">Secured Payment Gateways</p>
          <img
            className="payment-img"
            src="payment-method.png"
            alt="Payment Methods"
          />
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2024, <span className="brand-highlight">Nest</span> - HTML Ecommerce
          Template <br />
          All rights reserved
        </p>

        <div className="support-section">
          <div className="support-box">
            <img src="phone-call.svg" alt="phone" />
            <div>
              <h4>1900 - 6666</h4>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>

          <div className="support-box">
            <img src="phone-call.svg" alt="phone" />
            <div>
              <h4>1900 - 8888</h4>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </div>

        <div className="social-section">
          <ul>
            <li className="follow-text">Follow Us</li>
            <li>
              <img src="icon-facebook-white.svg" alt="fb" />
            </li>
            <li>
              <img src="icon-twitter-white.svg" alt="tw" />
            </li>
            <li>
              <img src="icon-instragram-white.svg" alt="ig" />
            </li>
            <li>
              <img src="icon-pinterest-white.svg" alt="pin" />
            </li>
            <li>
              <img src="icon-youtube-white.svg" alt="yt" />
            </li>
          </ul>

          <p>Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="footer-col-title">{title}</h3>
      <ul className="footer-links">
        {links.map((link, i) => (
          <li key={i}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
