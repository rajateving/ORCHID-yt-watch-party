// import React, { useState, useEffect, useContext } from "react";
import { useParams,Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import React,{useEffect,useRef,useState } from "react";
import {db} from '../firebase';
import io from 'socket.io-client';
import {addDoc,collection,onSnapshot,serverTimestamp,where,query,orderBy} from "firebase/firestore"

let socket  =  io.connect('https://orchid-uditi-das-backend.onrender.com');
// let socket  =  io.connect('http://localhost:4000');
const WatchPartyRoom = () => {
    const { id } = useParams();
    console.log("WATCHPARTY VIDEO ID:",id)

    
    const [messages, setMessages] = React.useState([]);
    const [newMssg,setNewMssg]=React.useState("");
  
    const messagesRef=collection(db,"chats")
 
  useEffect(() => {
    const queryMessages = query(
 
      messagesRef,
     
      where("room", "==", id),
    
      orderBy("createdAt")
    
    );
    
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsuscribe();
  }, // eslint-disable-next-line
  []);
  


 const handleSubmitChat=async(e)=>{
  e.preventDefault();
  if(newMssg==="") return;
  await addDoc(messagesRef,{
    text:newMssg,
    createdAt:serverTimestamp(),
    user:'mona',
    room:id

  });
  setNewMssg("")
 }

 
//  const [con,setCon]=useState({
//   playing:true,
//   light: false,
//   volume: 0.8,
//   muted: false,
//   played: 0,
//   playedSeconds:0,
//   loaded: 0,
//   loadedSeconds:0,
//   duration: 0,
//   playbackRate: 1.0,
//   loop: false,
//   elapsed:0,
//   seeking:false,
// })

// const handlePause=(e)=>{
//   console.log("paused video")
//   setCon({playing:false})
//   socket.emit('pause')
// }
// const handlePlay=(e)=>{
  
//   console.log("played f video")
//   setCon({playing:true})
//   socket.emit('play')
// }
// const handleProgress=(state)=>{
//   console.log('onProgress', state)
//   if (!con) {
//     setCon(state)
//     setCon({playing:true})
//   }
//   // socket.emit('update',state);
// }
// const handleDuration=(e)=>{
//   console.log('onDuration', e)
//   setCon({ duration:e })
// }

// socket.on('update',(data)=>{
// console.log('Recieved data',data)
// // player.seekTo(data,true);
//   setCon(data)
//   // setCon({playing:true})
// })

// socket.on('play',()=>{
// // player.playVideo();

// console.log("socket: played f video")
//   setCon({playing:true})
// })

// socket.on('pause',()=>{
// // player.pauseVideo();
// console.log("socket: paused video")
//   setCon({playing:false})
// })


// START OF SOCKET INTEGRATION

const player1= useRef();
const [played, setPlayed] = useState(0);
const [playing, setPlaying] = useState(false);
const [seeking, setSeeking] = useState(false);



socket.on('update',(data)=>{
console.log('Recieved data',data)
// player.seekTo(data,true);
 

  setSeeking(false);
  player1?.current?.seekTo(parseFloat(data));
  setPlayed(parseFloat(data));
})

socket.on('play',()=>{
// player.playVideo();

console.log("socket: played f video")
  // setCon({playing:true})
  setPlaying(true)
})

socket.on('pause',()=>{
// player.pauseVideo();
console.log("socket: paused video")
  // setCon({playing:false})
  setPlaying(false)
})
console.log("MAIN THING: ",played)

//END OF SOCKET INTEGRATION

    return (
        <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
            <div className="w-full max-w-[1280px]  flex flex-wrap flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                    <ReactPlayer 
    ref={player1}
    url={`https://www.youtube.com/watch?v=${id}`}
    controls
    width="100%"
    height="100%"
    style={{ backgroundColor: "#000000" }}
    
    playing={playing}
    // played={played}
    onProgress={(newState) => {
      if (!seeking) {
        setPlayed(newState.played);
        socket.emit('update',newState.played);
      }
      // player1.current.seekTo(parseFloat(newState.played));
     
      console.log("PROGRESS")
    }}
    onPlay={() => {
      setPlaying(true);
      socket.emit('play')
    }}
    onPause={() => {
      setPlaying(false);
      socket.emit('pause')
    }}
  
    />
    <input
        style={{ width: "100%",display:"hidden" }}
        type="range"
        min={0}
        max={0.999999}
        step="any"
        value={played}
        onMouseDown={() => {
          setSeeking(true);
        }}
        onChange={({ target: { value } }) => {
          setPlayed(parseFloat(value));
          socket.emit('update',value);
        }}
        onMouseUp={({ target: { value } }) => {
          setSeeking(false);
          player1.current.seekTo(parseFloat(value));
          // player2Ref.current.seekTo(parseFloat(value));
        }}
      />
      <button
      className='px-4 py-2 hover:bg-cyan-700 text-xs cursor-pointer bg-cyan-600 text-white'
        onClick={() => {
          setPlaying(false);
          player1.current.seekTo(0);
          // player.current.seekTo(0);
        }}
      >
        Reset
      </button>
                    {/* <ReactPlayer 
                      url={`https://www.youtube.com/watch?v=${id}`}
                      controls
                      width="100%"
                      height="100%"
                      style={{ backgroundColor: "#000000" }}
                      playing={con.playing}
                      // elapsed={40.32}
                      onPlay={handlePlay}
                      onPause={handlePause}
                      onSeek={e => console.log('onSeek', e)}
                      onProgress={handleProgress}
                      onDuration={handleDuration}
                      onBuffer={() => console.log('onBuffer')}
                      /> */}
                      {/* <button  onClick={handlePause}>Pause</button>
                      <button 
                      onClick={handlePlay}>PLay </button> */}
                    </div>
                  </div>
                  <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                <div className='flex flex-col justify-between h-[85vh] '>
                <div className='flex justify-between'>
                <div className="text-white">Invite Link:
                    <input className='py-2 px-4 bg-black' value={`localhost:3000/watchparty/${id}`}/>
                </div>
                <Link to="/"><div className='px-4 py-2 hover:bg-red-700 text-xs cursor-pointer bg-red-600 text-white'>Leave</div></Link>
                </div>
                {messages.map((message)=><div className='flex flex-col gap-2 justify-center' key={message.id}>
                    <div className="text-white">{message.text}</div>
                 </div>)}
                
                <div className='flex'>
                    <input className='border px-4 bg-black text-white py-2 w-[calc(100%-65px)]' placeholder='type your mssg..' type="text"
                    value={newMssg} onChange={(e)=>setNewMssg(e.target.value)}
                    />
                    <div>
                    <button onClick={handleSubmitChat} className='px-4 py-2 bg-blue-500 shadow-sm shadow-blue-500 text-white'>Send</button>
                    </div>
                    
                </div>
            </div> 
                </div>
                </div>
               
               
            </div>
    );
}

export default WatchPartyRoom;
