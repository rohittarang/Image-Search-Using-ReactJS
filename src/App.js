import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [photo, setPhoto] = useState("")
  const [result, setResult] = useState([])

  const changePhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=xpXxcbSSuT0ZMpOsEtp3G7j2EflWhKXSUqI-zeItt_Y`)
      .then((response)=>{
        console.log(response.data);
        setResult(response.data.results)
      })
  }

  return (
    <>
      <div className='container text-center my-5' >
        <input type="text" className='form-control' value={photo} onChange={(e)=>{
          setPhoto(e.target.value)
        }} />
        <button type='submit' onClick={changePhoto} className='btn btn-primary my-3'>Get Photo</button>
      </div>
  
      <div className='container'>
        <div className="row text-center lg start">
          {result.map((value) => {
            return (
              <div className="col lg-3 col-md-4 col-6" key={value.id}>
                <button >
                {/* <a href='#' className='d-block mb-4 h-100'> */}
                  <img className='img-fuild img-thumbnail' alt='images' src={value.urls.small} />
                {/* </a> */}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
    
  )
}

export default App
