import React, { useState } from 'react'
import closeButton from '../assets/ICON frame.png'
import Footer from './Basic/Footer'
import Container from './Basic/Atomic/Container'
import Input, { TextArea } from './Basic/Atomic/Input'
import Button from './Basic/Atomic/Button'
import { connect } from 'react-redux'
import { addArticle, setNotif } from '../redux/actions/actions'
import { useInput } from './utils/useInput'
import { useHistory } from 'react-router'

const Editor = (props) => {
  const history = useHistory()
  const title = useInput('text')
  const text = useInput('text')
  const description = useInput('text')
  const [file, setFile] = useState('')
  const [imgSrc, setImgSrc] = useState(null)

  const back = () => {
    history.goBack()
  }
  const previewFile = (file) => {
    const reader = new FileReader()

    reader.onprogress = () => {
      props.setNotif('Loading', 'info')
    }
    reader.onloadend = () => {
      setImgSrc(reader.result)
      //console.log('imgSrc', imgSrc)
    }
    if (file) reader.readAsDataURL(file)
  }

  const onChangeFile = (e) => {
    setFile(e.target.files[0])
    previewFile(file)
  }
  const submit = (event) => {
    event.preventDefault()
    const newArticle = {
      title: title.value,
      text: text.value,
      description: description.value,
      photo: imgSrc,
      author: props.user,
    }

    props.addArticle(newArticle)
    title.reset()
    text.reset()
    description.reset()
    props.setNotif(
      'You added a new Article you check it on your profile !! ',
      'success',
    )
    history.push('/')
  }
  return (
    <Container>
      <Button
        onClick={back}
        variant="outlined"
        classes=" transition duration-200  flex flex-col align-center h-auto w-auto   transform hover:scale-110 bg-red-300 h-auto"
      >
        <img alt="close-button" src={closeButton} className="h-12 w-12" />
      </Button>
      <form
        className="   mt-12 flex flex-col justify-evenly align-stretch w-full border-2 rounded-2xl border-secondary_200  px-12 py-8 md:px-24 md:py-16 items-center h-screen mx-10 mb-8 lg:px-32  "
        encType="multipart/form-data"
        onSubmit={submit}
      >
        <div className="  w-full space-y-6 flex flex-col justify-evenly h-full items-stretch align-start content-start ">
          <Input
            name="Title"
            inputClass=" medium-editable w-full h-full text-2xl p-8 text-black"
            labelClass="text-4xl mr-10 text-shadow "
            containerClass="h-52 w-2/3 self-center"
            {...title}
          />
          <TextArea
            name="description"
            labelClass="text-3xl  mb-4 mt-8"
            containerClass="  h-1/4 font-black text-shadow"
            inputClass="w-full h-full text-3xl text-black font-normal p-4 medium-editable"
            id="content"
            {...text}
          />

          <TextArea
            name="Content"
            labelClass="text-3xl mb-4 mt-8"
            containerClass="h-1/3 font-black text-shadow"
            inputClass="w-full h-full text-3xl text-black font-normal p-8 medium-editable"
            id="content"
            {...description}
          />
          <div>
            <label htmlFor="file">Choose Article image</label>
            <input
              type="file"
              filename="photo"
              name="photo"
              onChange={onChangeFile}
            />
            {imgSrc && (
              <img
                src={imgSrc}
                className="h-48 w-48 rounded-xl shadow-md"
                alt="chosen"
              />
            )}
          </div>
        </div>
        <div className="row-start-6 row-end-7 flex flex-row justify-evenly align-center col-start-1 col-end-13 w-full mt-2 md:mt-0 md:justify-start md:space-x-4 ">
          <Button variant="primary" classes="w-1/3" text=" Publish" />
          <Button variant="secondary" classes="w-1/3" text="Save Draft" />
        </div>
      </form>
    </Container>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.authUser.user._id,
  }
}
export default connect(mapStateToProps, { addArticle, setNotif })(Editor)
