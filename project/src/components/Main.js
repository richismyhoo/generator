import React from 'react'
import './Main.css'
import SocialMedia from './shared/SocialMedia.js'
import './shared/SocialMedia.css'
import './shared/Account.css'


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
          clicked: false,
          name: '',
          email: '',
          password: '',
          confirmedPassword: '',
          logged: false,
          openAccount: false,
        }
        this.showForm = this.showForm.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleAccount = this.handleAccount.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }
    
    showForm() {
      this.setState({
        clicked: true,

      })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick() {
        if (this.state.password !== this.state.confirmedPassword) {
            alert('Password doesnt match! Please fix, and try again.')
        } else {
            // PULLING THIS.STATE TO JSON FILE ON SERVER
            this.setState({
                clicked: false,
                logged: true,
            })
        }
    }

    handleAccount() {
        if (!this.state.logged) {
            alert('Log in/register to get access to your account. Try again.')
        } else {
            this.setState({
                openAccount: true,
            })
        }
    }

    hideForm() {
        this.setState({
            clicked: false,
        })
    }

    render() {
      const inputStyle = {
        opacity: "1",
        height: "100%",
      }
        return (
            <>
            <div className="App">
                <div className="main">
                    <div className="line">
                        ERMEI
                    </div>
                    <div className="buttons">
                        <h2>HOME</h2>
                        <h2>ABOUT US</h2>
                        <h2>PACKAGES</h2>
                        <h2>HOTELS</h2>
                        <h2>CONTACT</h2>
                            <div id="signin" onClick={this.showForm}>
                                SIGN UP
                            </div>
                    </div>
                </div>

            <div className="center-windows">
                <div className="top-window">
                    <div className="top-window-text"><h1>🠒 WE HAVE THE VACATION YOU'VE <br /> LONGING FOR</h1></div>
                </div>
                <div className="middle-window">
                <img src="https://w.wallha.com/ws/6/1AyJjFUV.jpg"  alt="vacation_foto"/>
                </div>
                <div className="bottom-window">
                    <p>
                        Join our tours right now and receive <br />20% discount for your first tour<br /> in our agency. Offer expires in<br /> 3 days after first visit this page
                    </p>
                    <div id="join">JOIN US</div>
                    <div id="read">READ MORE</div>
                </div>
            </div>

            <div className="nav">
                <div className="nav-text">
                <h3 id="account" onClick={this.handleAccount}>ACCOUNT</h3>
                <h3>FOLLOW US!</h3>
                </div>
            <SocialMedia />
            </div>
        <form className="registration" style={this.state.clicked ? inputStyle : null}>
            <div className="registration-card">
            <h1 onClick={this.hideForm}>x</h1>
                <h3>Registration</h3>
        <input type="text" name="name" onChange={this.handleChange}  placeholder="Name"/>
        <input type="email" name="email" onChange={this.handleChange}  placeholder="Email"/>
        <input type="password" name="password" onChange={this.handleChange}  placeholder="Password" />
        <input type="password" name="confirmedPassword" onChange={this.handleChange} placeholder="Confirm password"/>
        <div id="submit-button" onClick={this.handleClick}>SUBMIT</div>
        </div>
      </form>
      </div>
      

      <div className="acc" style={this.state.openAccount ? inputStyle : null}>
        <div className="left-bar">
            <div className="avatar"><div id="av"></div><h1>{this.state.name}</h1></div>
            <div className="tours" id='card'><h2>My tours</h2></div>
            <div className="tours-history" id='card'><h2>My tours history</h2></div>
            <div className="data" id='card'><h2>My data</h2></div>
            <div className="contacts" id='card'><h2>My contacts</h2></div>
            <div className="exit" id='card'><h2>Exit</h2></div>
        </div>
      </div>
            </>
        )
    }
}

export default Main



