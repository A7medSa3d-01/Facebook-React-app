import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AhmedSa3d</h3>
          <span className="loginDesc">Connect with freinds and the world around you on AhmedSa3d.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="User Name" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">alredy have account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
