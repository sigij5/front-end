import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { logout, getUserData } from '../actions/userActions'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import AddSong  from './SongForm'
import Song from './Song'

// const usePrevious = value => {
//     const ref = React.useRef();
//     useEffect(() => {
//         ref.current = value;
//     });
//     return ref.current;
// }

const Profile = props => {
    const user = useSelector(state => state.login)
    const data = useSelector(state => state.userData)
    const dispatch = useDispatch()
    let userInfo = localStorage.getItem('user');
    const songs = data.favorites
    // const previousFavorites = usePrevious(songs)

    useEffect(() => {
        dispatch(getUserData(user.id))
        console.log(data)
        console.log('this is the user data', data)
    }, [])

    return(
        <div className='profile-page'>
            <h1>Welcome {userInfo}</h1>
            <nav>
                <br />
                <h3>My Favorite Songs:</h3>
                <p>{ data.loading ? 'Loading Songs' : ''}</p>
                {songs && songs.length > 0 ? (
                <ol>
                {songs.map(song => (
                    console.log(JSON.parse(song.favorite_songs)),
                    <Song song={JSON.parse(song.favorite_songs)} />
                ))}
                </ol>
                ) : (
                    <p>Add some of your favorite songs!</p>
                )}


                <AddSong />

            </nav>




        </div>
    )


}


export default Profile;


