import "./index.scss"
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="newsletter">
                
                <div className="newsletter_content">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                    {/* <h3 className="section_title">Subscribe now</h3> */}
                                    <h4>Newsletter</h4>
                    <p>Signup for our newsletter</p>
                            </div>
                        </div>
                        <div className="row newsletter_container">
                            <div className="col-lg-10">
                                    <input placeholder="Email here"/>
                                    <button className="newsletter_button">subscribe</button>
                                </div>
                        
                        </div>
                    </div>
                </div>
            </div>

             {/* <div className="footer-container">
                <div className="contacts">
                    <div>Contact Information</div>

                    <span>New Desire Boutique</span>
                    <span>Ruse</span>
                    <span>+359 888888888</span>
                    <a href="mailto:mimi.raykova@gmail.com">mimi.raykova@gmail.com</a>
                </div>
                <div className="collections">

          <div>New Desire Boutique</div>
            <nav className="nav-footer">
                        <NavLink activeClassName="nav-link-selected" to="/">
                Home
              </NavLink>
           
     
              <NavLink activeClassName="nav-link-selected" to="/shop">
                Shop
              </NavLink>
          
              <NavLink activeClassName="nav-link-selected" to="/contact">
                Contact
              </NavLink>
  
        </nav>
                </div>

            </div>
          */}
          
    
                <ul>
                    <li><i className="fa fa-facebook"></i></li>
                    <li><i className="fa fa-twitter"></i></li>
                    <li><i className="fa fa-youtube"></i></li>
                    <li><i className="fa fa-instagram"></i></li>

                </ul>
                
 
      
        </footer>
        
    )
}
export default Footer