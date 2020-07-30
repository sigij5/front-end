import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeSong, saveEdit } from '../actions/userActions'




const Song = props => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userData)
    const {song} = props
    const [editing, setEditing] = useState(false)
    const [songToEdit, setSongToEdit] = useState({})

    const deleteSong = (user, song) => {
        dispatch(removeSong(user.id, song))
    }

    const editSong = song => {
        setEditing(true);
        setSongToEdit(song);
    }


    return (
        <li>
            {song.title} ,  {song.artist}
            &nbsp;
            <button className='button' onClick={e => {
                e.stopPropagation();
                deleteSong(user, song)
            }
        }>
            X
            </button>
        </li>

    )
}

export default Song;

