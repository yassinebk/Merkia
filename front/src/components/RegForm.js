import React, { useState } from 'react'
import Navbar from './Basic/Navbar'
import googleLogo from '../assets/google-plus.png'
import Input from './Basic/Atomic/Input'
import Footer from './Basic/Footer'
import Container from './Basic/Atomic/Container'
import Button from './Basic/Atomic/Button'
import { connect } from 'react-redux'
import { signUp,googleAuth, setNotif } from '../redux/actions/actions'
import GoogleLogin from 'react-google-login'
import { useInput } from './utils/useInput'
import {useHistory} from"react-router-dom"



const RegForm = (props) => {
  const history = useHistory()
  const [file,setFile]=useState('')
  const [imgSrc, setImgSrc] = useState(null)
  const username = useInput('text')
  const email = useInput('email')
  const password = useInput('password')
  const fullname = useInput('text')
  const containerClass =
    'mb-12 w-full h-1/4 p-4 flex flex-row justify-start space-x-6 items-center input-max-height'
  const labelClass = 'text-xl sm:text-2xl w-1/6 font-bold md:text-3xl sm:pl-6 '
  const inputClass = 'h-16  w-5/6 text-2xl pl-4'

 const previewFile = (file) => {
        const reader = new FileReader();

   reader.onloadstart = () => {
          props.setNotif("Loading Image please wait till you see the image","info")
    }
        reader.onloadend = () => {
          setImgSrc(reader.result);

          props.setNotif("Image Loaded ","success")
          //console.log('imgSrc',imgSrc)
        };
        if(file) reader.readAsDataURL(file);


    };;

 const  onChangeFile = (e) => {
setFile(e.target.files[0])  
   previewFile(file)
}

  
  const register = (event) => {
    event.preventDefault()
    const newUser = {
      email: email.value,
      password: password.value,
      username: username.value,
      fullname: fullname.value,
      photo: imgSrc,
      
    }

    props.signUp(newUser)
    username.reset()
    email.reset()
    password.reset()
    fullname.reset()

    history.push('/')
  }

           const responseGoogle = (res) => {
    //console.log('google login data', res)
    const postData = {
 name: res.profileObj.name,
      provider: 'google',
      email: res.profileObj.email,
      provider_id: res.googleId,
      token: res.access_token,
      provider_pic: res.profileObj.imageUrl
       //TODO: Update pic on authentication + profile
    }
    props.googleAuth(postData)
    history.push('/')
  }

  return (
    <Container className="h-screen">
      <Navbar />
      <div className="md:h-auto border-2 border-fadedgray mx-4 md:mx-8 p-2 md:px-6  rounded-lg mt-48 lg:mt-64  profile-horizontalCard lg:m-auto h-auto ">
        <h1 className="text-center font-black  h-16 text-5xl lg:text-7xl   shadow-md my-12 ">
          Register Your Account
        </h1>
        <form
          className="h-5/6 flex flex-col items-center justify-around "
          onSubmit={register}
    encType="multipart/form-data"
        >
          <Input
            {...fullname}
            name="Fullname"
            labelClass={labelClass}
            containerClass={containerClass}
            inputClass={inputClass}
          />
          <Input
            {...username}
            name="Username"
            labelClass={labelClass}
            containerClass={containerClass}
            inputClass={inputClass}
          />
          <Input
            {...email}
            name="Email"
            labelClass={labelClass}
            containerClass={containerClass}
            inputClass={inputClass}
          />
          <Input
            name="password"
            {...password}
            labelClass={labelClass}
            containerClass={containerClass}
            inputClass={inputClass}
          />
          <div className="text-lg flex flex-col justify-evenly align-center h-auto" >
    <div className="flex flex-row justify-evenly w-full text-xl algin-center">
            <label htmlFor="file">Choose Article image</label>

            <input className="text-lg bg-bg h-24"  name="photo" type="file" filename="photo" onChange={onChangeFile}/>
</div>
    {imgSrc&&<img src={imgSrc} className="h-48 w-48 rounded-xl shadow-md" alt="chosen"/>}
    </div>
          <div className="flex flex-row justify-evenly md:justify-start my-8 px-6  w-full space-x-2 h-1/6">
             <Button
              variant="primary"
              classes="  h-auto w-3/6 md:w-1/4  "
              type="submit"
           text="Register"
           / >
              
   <GoogleLogin
                clientId="239838042837-vjhc57hg4tjqdpr5hn45cobimbcfkdhc.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                style={{height:"fit-content"}}
                render={renderProps => (
                    
                  <Button onClick={renderProps.onClick} variant="secondary" classes="w-3/6 h-full md:w-1/4 flex flex-row items-center justify-evenly"
            >
                  <p className="text-2xl md:text-3xl lg:text-4xl"> With </p>
              <div className="flex-shrink-0 ml-2  ">
                <img
                  alt="google-auth-icon"
                  src={googleLogo}
                  className="h-8 w-8 md:h-16 md:w-16"
                ></img>
              </div>

            </Button>
      
    )}
              />
          </div>
        </form>
      </div>
      <Footer />
    </Container>
  )
}
const dispatchToProps = {
  signUp,
  googleAuth,
  setNotif

}
export default connect(null, dispatchToProps)(RegForm)
