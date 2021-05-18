import {useEffect,useState,useContext} from 'react'
import navbarData from "../../mock-data/navbar.json"
import Button from '../common/Button'
import {UiContext} from '../../contexts/UiContext'

import logoImage from '../../assets/images/logo.svg'
import hamburgerIconClose from '../../assets/images/hamburger-menu-close-icon.svg'
import hamburgerIcon from '../../assets/images/hamburger-menu-icon.svg'


function Navbar(props) {
  const [scrollDistance,setScrollDistance] = useState(window.scrollY)
  const [didScroll,setDidScroll] = useState(false)
  const[navbarLinks,setNavbarLinks] = useState(navbarData.links)
  useEffect(() => {
    setNavbarLinks(navbarData.links)
  }, [navbarData.links]);
  useEffect(() => {
       function updateSize() {
      setScrollDistance(window.scrollY);
    }
    window.addEventListener('scroll', updateSize);
    updateSize();
    return () => window.removeEventListener('scroll', updateSize);
  }, []);

  useEffect(() => {
    if(scrollDistance !== 0){
      setDidScroll(true)
    }else{
      setDidScroll(false)

    }
  }, [scrollDistance]);

  const [hamIsActive,setHamIsActive] = useState(false);

  function hamburgerIconToggler(){
    if(hamIsActive){
      setHamIsActive(false)
    }else{
      setHamIsActive(true)
    }
  }
  const {isMobile} = useContext(UiContext)
  return (
   <>
   <div className={"container-fluid navbar-root" + " " + (didScroll&&"scrolled")}>

      <div className="container navbar-wrapper">
        <div className="row  navbar-row align-items-center">
          {isMobile ?
          <>
          <div className="col-6">
            <div className="hamburger-icon-wrapper" onClick={()=>{hamburgerIconToggler()}}>
              {hamIsActive ?
              <>
                <img className="hamburger-icon-img" src={hamburgerIconClose} alt="" />
                <div className="hamburger-menu" onClick={(e)=>{e.preventDefault();e.stopPropagation()}}>
                        <ul className="hamburger-list">
                        {navbarLinks && navbarLinks.map(link=>
                        (
                          <li>
                            <a href={link.linkUrl} className="navbar-link-text">
                              {link.linkText}
                            </a>
                          </li>
                        )
                        )}
                          <a className="mobile-login primary-btn"href="">ورود / ثبت نام</a>
                          
                        </ul>
                      </div>
                      </>
              :
              <>
                <img className="hamburger-icon-img" src={hamburgerIcon} alt="" />
     
                </>
              }
              
            </div>
          </div>

             <div className="col-6">
               <div className="responsive-logo-wrapper">
                <a href="">
                  <img className="responsive-logo" src={logoImage} alt=""/>
                </a>
               </div>
             
            </div>
          </>
        :
        <>
      <div className="col-lg-2">
            <div className="logo-wrapper">
              <a href="">
              <img src={logoImage} alt=""/>

              </a>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="navbar-links">
              {navbarLinks && navbarLinks.map(link=>
                (
                <div className="navbar-link">
                  <span>
                    <a href={link.linkUrl} className="navbar-link-text">
                      {link.linkText}
                    </a>
                    </span>
                </div>
                )
                )}
            </div>
          </div>

          <div className="col-lg-2">
            <div className="item-wrapper align-items-center justify-content-end">
                          <Button isPrimary={true} text="ورود / ثبت نام" url="#"/>
            </div>
          </div>
          </>
        }
    
        </div>
      </div>
   </div>

   </>
  );
}

export default Navbar;
