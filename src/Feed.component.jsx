import React,{useState,useEffect} from 'react';
import './Feed.styles.css';
import StoryReel from './StoryReel.component';
import MessagePoster from './MessagePoster.component';
import Post from './Post.component';
import {useDataLayerValue} from './DataLayer';
import db from './firebase';


function Feed() {

    const[{user},dispatch]=useDataLayerValue();

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
           setPosts(
               snapshot.docs.map(doc=>({
                        id:doc.id,
                        data:doc.data() 
         }))
         ) 
        ))
        
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessagePoster/>
            {
                posts.map(post=>
                <Post 
                key={post.data.id}
                message={post.data.message}
                image={post.data.image}
                profilePic={post.data.profilePic}
                username={post.data.username}
                timestamp={post.data.timestamp}
                />
                )
            }
        </div>
    )
}

export default Feed;
