import React from 'react'
import logo from '../../assets/Property 1=Minimal.svg'
import Button from './Atomic/Button'
import { Link } from "react-router-dom"
import{logout}from"../../redux/actions/actions"
import {connect} from"react-redux"
import {useHistory} from 'react-router-dom'

const NavbarLogin = (props) => {
  const history = useHistory();
  return (
        <div className="ei grid grid-cols-12 gap-x-4 mb-6 mx-0 py-0 px-0  h-auto   ">
              <Link to="/" className="link-fit hover:opacity-50 col-start-1 col-end-4" >
<img alt="merkia-logo" className="w-full h-full sm:h-2/3 sm:m-auto" src={logo} />
    </Link>
    
            <div
                className="flex  col-start-4 col-end-13 mx-0  flex-wrap flex-row space-x-4 container items-center justify-around">
                <div className="flex flex-row space-x-16 justify-evenly ">
                    <Link to="/" className="link-fit"><Button variant="boldText" text="Home"/></Link>
                    <Link to="/about" className="link" ><Button variant="boldText" text="About"/></Link>
                </div>
                  <Link to="/profile" className="link-fit">
              <Button variant="secondary" text="My Profile"/>
    </Link>
        <Button variant="logout" onClick={() => { props.logout(); history.push('/') }} text="Logout"/>
            </div>
        </div>
  )
}
const mapDispatchToProps = {
  logout
}

export default connect(null,mapDispatchToProps)(NavbarLogin)
