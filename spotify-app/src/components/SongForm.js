import React, {useState} from 'react'

import { addSong, getUserData } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const AddSong = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userData)
    const [song, setSong] = useState({
        title: '',
        artist: ''
    })

    const onSubmit = e => {
        e.preventDefault();
        console.log(user.id, song)
        dispatch(addSong(user.id, song))
    }

    const handleChange = e => {
        setSong({
          ...song,
          [e.target.name]: e.target.value,
        });
    }


return (
<MDBContainer className='form-container'>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={onSubmit}>
        <p className="h4 text-center mb-4">Add To Favorites:</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
         Title
        </label>
        <input 
        type="text" 
        id="defaultFormLoginEmailEx" 
        className="form-control" 
        name='title'
        onChange={handleChange}
        />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Artist
        </label>
        <input 
        type="text" 
        id="defaultFormLoginPasswordEx" 
        className="form-control"
        name='artist'
        onChange={handleChange} 
        />
        <div className="text-center mt-4">
          <MDBBtn color="indigo" type="submit">Add Song To Favorites</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default AddSong;