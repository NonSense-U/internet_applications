import './CSS/nav.css'

function Nav()
{
    return(
        <div className='container'>
        <nav className="navbar">
        <div className="Name"><a href="https://www.linkedin.com/in/malek-rostum-14980b2a9/" target='_blank'>Malek Rostum</a></div>
        <ul className="nav-links">
            <li className="nav-link"><a href="https://github.com/NonSesne" target='_blank'>Github</a></li>
            <li className="nav-link"><a href="https://cultofthepartyparrot.com/" target='_blank'>Services</a></li>
            <li className="nav-link"><a href="https://www.facebook.com/malek.rostum.9/" target='_blank'>About</a></li>
        </ul>
        </nav> 
        <div class="InputContainer">
  < input placeholder="This does not actually work >_< .." id="input" class="input" name="text" type="text"/>
         </div>
        </div>

    )
}

export default Nav;