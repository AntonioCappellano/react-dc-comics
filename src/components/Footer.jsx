export default function Footer() {
  const footerLinks = [
    {
      title: "DC COMICS",
      links: [
        {
          url: "#",
          text: "Characters",
        },
        {
          url: "#",
          text: "Comics",
        },
        {
          url: "#",
          text: "Movies",
        },
        {
          url: "#",
          text: "TV",
        },
        {
          url: "#",
          text: "Games",
        },
        {
          url: "#",
          text: "Videos",
        },
        {
          url: "#",
          text: "News",
        },
      ],
    },
    {
      title: "DC",
      links: [
        {
          url: "#",
          text: "Terms Of Use",
        },
        {
          url: "#",
          text: "Privacy",
        },
        {
          url: "#",
          text: "Ad Choises",
        },
        {
          url: "#",
          text: "Advertising",
        },
        {
          url: "#",
          text: "Jobs",
        },
        {
          url: "#",
          text: "Subscriptions",
        },
        {
          url: "#",
          text: "Talent Workshops",
        },
        {
          url: "#",
          text: "CPSC Certificates",
        },
        {
          url: "#",
          text: "RAtings",
        },
        {
          url: "#",
          text: "Shop Help",
        },
      ],
    },
    {
      title: "SITES",
      links: [
        {
          url: "#",
          text: "DC",
        },
        {
          url: "#",
          text: "MAD Magazine",
        },
        {
          url: "#",
          text: "DC Kids",
        },
        {
          url: "#",
          text: "DC Universe",
        },
        {
          url: "#",
          text: "DC Power Visa",
        },
      ],
    },
    {
      title: "SHOP",
      links: [
        {
          url: "#",
          text: "Shop DC",
        },
        {
          url: "#",
          text: "Shop DC Collectibles",
        },
      ],
    },
  ];
  return (
    <footer>
      <section id="buys-section">
        <div className="container d-flex gap-4">
          <figure className="m-5 d-flex align-items-center gap-2">
            <img
              className="buys-img"
              src="src\assets\img\buy-comics-digital-comics.png"
            ></img>
            <figcaption className="text-white">DIGITAL COMICS</figcaption>
          </figure>
          <figure className="mt-3 d-flex align-items-center gap-2">
            <img
              className="buys-img"
              src="src\assets\img\buy-comics-merchandise.png"
            ></img>
            <figcaption className="text-white">DC MERCHANDISE</figcaption>
          </figure>
          <figure className="mt-3 d-flex align-items-center gap-2">
            <img
              className="buys-img"
              src="src\assets\img\buy-comics-subscriptions.png"
            ></img>
            <figcaption className="text-white">SUBSCRIPTION</figcaption>
          </figure>
          <figure className="mt-3 d-flex align-items-center gap-2">
            <img
              className="buys-img"
              src="src\assets\img\buy-comics-shop-locator.png"
            ></img>
            <figcaption className="text-white">COMIC SHOP LOCATOR</figcaption>
          </figure>
          <figure className="mt-3 d-flex align-items-center gap-2">
            <img
              className="buys-img"
              src="src\assets\img\buy-dc-power-visa.svg"
            ></img>
            <figcaption className="text-white">DC POWER VISA</figcaption>
          </figure>
        </div>
      </section>
      <section>
        <div id="container-footer" className="container">
          <div className="row mt-3">
            {footerLinks.map((link, index) => (
              <div key={index} className="col-2">
                <h2 className="h4 text-white">{link.title}</h2>
                <ul className="list-unstyled">
                  {link.links.map((linkss, index) => (
                    <li key={index}>
                      <a href={linkss.url}>{linkss.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="third-section">
        <div className="container d-flex justify-content-between align-items-center text-white py-4">
          <button
            type="button"
            className="btn btn-outline-primary text-white rounded-0"
          >
            SIGN-UP NOW!
          </button>
          <div className="d-flex align-items-center gap-3">
            <span className="me-3 text-primary">FOLLOW US</span>
            <img src="src/assets/img/footer-facebook.png"></img>
            <img src="src/assets/img/footer-twitter.png"></img>
            <img src="src/assets/img/footer-youtube.png"></img>
            <img src="src/assets/img/footer-pinterest.png"></img>
            <img src="src/assets/img/footer-periscope.png"></img>
          </div>
        </div>
      </section>
    </footer>
  );
}
