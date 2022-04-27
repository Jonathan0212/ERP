import logo from "../images/645736204-huge.jpg"
function Landing() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <img src={logo} style={{ maxWidth: "90%" }} />
                </div>
                <div className="col-4">
                    <p>An application to manage craft beer inventory..
                        Users will be able to track the quantity, production cost, profit, sales, etc.</p>

                </div>

            </div>
        </div>
    )
}
export default Landing;