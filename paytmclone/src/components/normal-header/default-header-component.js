import logo from "../images/logo.svg"
const DefaultHeaderComponent = () => {
    return <div className="flex">
    <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <nav className="nav">
        <ul className="flex nav-links li">
            <li> Paytm for Consumer</li>
            <li> paytm for Business</li>
            <li> Investor Relations</li>
            <li> Comapny</li>
            <li>Career</li>
        </ul>
      </nav>
      <div>
        <button className="btnSignIn">Sign In</button>
      </div>
    </div>
}
export default DefaultHeaderComponent;