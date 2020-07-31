import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {saveEdit} from '../actions/userActions'




export const ProfileInfo = () => {
    const user = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const [editing, setEditing] = useState(false)
    const [valueToEdit, setValueToEdit] = useState()
    const pass = localStorage.getItem('password')

    const editName = userObject => {
        setEditing(true);
        setValueToEdit(userObject);
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch(saveEdit(user.id, valueToEdit))
        console.log(valueToEdit)
    }


    return(
        <div className='profile-container'>
            <div className='profile-pic-container'>
                <img className='profile-pic' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='profile pic' />
            </div>
            <div className='info'>
                <h4>{user.first_name} {user.last_name}</h4>
                <p>Username: {user.username}</p>
            </div>
            <button onClick={() => editName(user)}>Edit</button>

        {editing && (
        <form onSubmit={onSubmit}>
          <label>
            New Username:
            <input
              placeholder={valueToEdit.username}
              onChange={e =>
                setValueToEdit({ ...valueToEdit, username: e.target.value })
              }
              value={valueToEdit.username}
            />
          </label>
          {/* <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label> */}
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
        </div>
    )
}