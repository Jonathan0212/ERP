import logo from "../images/645736204-huge.jpg"
function Landing() {

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-12 col-md-8">
                    <img src={logo} style={{ maxWidth: "90%" }} />
                </div>
                <div className="col-12 col-md-4">
                    <p>An application to manage craft beer inventory..
                        Users will be able to track the quantity, production cost, profit, sales, etc.</p>

                </div>

            </div>
        </div>
    )
}
export default Landing;