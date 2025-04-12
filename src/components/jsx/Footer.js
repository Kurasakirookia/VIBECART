import React from "react";
import "../css/footer.css"; // Ensure your styles are imported

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        {/* Row 1 */}
        <div className="row1 row">
          {/* Column 1 */}
          <div className="column1 column">
            <h5>Shop</h5>
            <div className="footer_links">
              {["Ladies", "Men", "Baby", "Kids", "Home", "Magazine"].map(
                (item, index) => (
                  <a href="/" key={index}>
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2 */}
          <div className="column2 column">
            <h5>Corporate Info</h5>
            <div className="footer_links">
              {[
                "Career at Vibe-Cart\n",
                "About Vibe-Cart\n",
                "Sustainability Vibe-Cart Group\n",
                "Press\n",
                "Investor Relations\n",
                "Corporate Magazine\n",
              ].map((item, index) => (
                <a href="/" key={index}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="column3 column">
            <h5>Help</h5>
            <div className="footer_links">
              {[
                "Customer Service",
                "My Vibe-Cart",
                "Find a Store",
                "Legal & Privacy",
                "Contact",
                "Report a Scam",
                "Cookie Settings",
              ].map((item, index) => (
                <a href="/" key={index}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div
            className="footer_links column4 column"
            style={{ paddingTop: "5%" }}
          >
            <p className="text">
              Sign up now and be the first to know about exclusive offers,
              latest fashion news & style tips!
            </p>
            <a href="/">
              <p style={{ fontSize: "20px" }}>Read more</p>
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row2 row">
          <div className="social_icons_container">
            {["insta", "facebook", "youtube"].map((platform, index) => (
              <img
                src={`./icons/${platform}_icon.png`}
                alt={`${platform} icon`}
                className="social_icons"
                key={index}
              />
            ))}
          </div>
          <p className="text">
            The content of this site is copyright-protected and is the property
            of Vibe-Cart Henne.
          </p>
          <img
            className="footer_logo"
            src="./images/vibe cart logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
