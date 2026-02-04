export default function Footer() {
    return <footer>
        <section id="buys-section">
            <div className="container d-flex  align-items-center gap-4">
                <figure className="m-5 d-flex align-items-center gap-2">
                    <img className="buys-img" src="src\assets\img\buy-comics-digital-comics.png"></img>
                    <figcaption className="text-white">DIGITAL COMICS</figcaption>
                </figure>
                <figure className="mt-3 d-flex align-items-center gap-2">
                    <img className="buys-img" src="src\assets\img\buy-comics-merchandise.png"></img>
                    <figcaption className="text-white">DC MERCHANDISE</figcaption>
                </figure>
                <figure className="mt-3 d-flex align-items-center gap-2">
                    <img className="buys-img" src="src\assets\img\buy-comics-subscriptions.png"></img>
                    <figcaption className="text-white">SUBSCRIPTION</figcaption>
                </figure>
                <figure className="mt-3 d-flex align-items-center gap-2">
                    <img className="buys-img" src="src\assets\img\buy-comics-shop-locator.png"></img>
                    <figcaption className="text-white">COMIC SHOP LOCATOR</figcaption>
                </figure>
                <figure className="mt-3 d-flex align-items-center gap-2">
                    <img className="buys-img" src="src\assets\img\buy-dc-power-visa.svg"></img>
                    <figcaption className="text-white">DC POWER VISA</figcaption>
                </figure>
            </div>
        </section>
        <section>
            <div id="container-footer" className="container">
                <div className="row row-cols-auto gap-2 mt-4 text-center text-white">
                    <div className="col">
                        <h5>DC COMICS</h5>
                        <p>characters</p>
                        <p>characters</p>
                        <p>characters</p>
                        <p>characters</p>
                        <p>characters</p>
                        <p>characters</p>
                        <p>characters</p>
                        <h5>SHOPS</h5>
                        <p>Shop</p>
                        <p>Shop</p>
                    </div>
                    <div className="col">
                        <h5>DC</h5>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>
                        <p>Terms</p>

                    </div>
                    <div className="col">
                        <h5>SITES</h5>
                        <p>DC</p>
                        <p>DC</p>
                        <p>DC</p>
                        <p>DC</p>
                        <p>DC</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="third-section">
            <div className="container d-flex justify-content-between align-items-center text-white py-4">
                <button type="button" className="btn btn-outline-primary text-white rounded-0">SIGN-UP NOW!</button>
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
}