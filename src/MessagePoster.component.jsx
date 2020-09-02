import React,{useState} from 'react';
import './MessagePoster.styles.css';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useDataLayerValue} from './DataLayer';
import db from './firebase';
import firebase from 'firebase';




function MessagePoster() {

    const[{user},dispatch]=useDataLayerValue();

    const[input,setInput] = useState('');
    const[imageURL,setImageURL] = useState('');

    const postingHandler=(event)=>{
        event.preventDefault();

        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            image:imageURL,
            profilePic:user.photoURL,
            username:user.displayName
        })

        setImageURL('');
        setInput('');
    }

    return (

        <div className="messageposter">

            <div className="messageposter__top">
                <Avatar src={user.photoURL}/>
                <form>

                    <input value={input} 
                            className="messageposter__input" 
                            placeholder={`What's on your mind? , ${user.displayName}`}
                            onChange={e=>setInput(e.target.value)}
                            />

                    <input type="text" 
                            placeholder={`Image URL (Optional)`}
                            onChange={e=>setImageURL(e.target.value)}
                            value={imageURL}
                            />

                    <button onClick={postingHandler} type="submit"> Hidden Submit</button>
                </form>
            </div>

            <div className="messageposter__bottom">

                <div className="messageposter__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageposter__option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo / Video</h3>
                </div>

                <div className="messageposter__option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling / Activity</h3>

                </div>
            </div>

        </div>
    )
}

export default MessagePoster;
