
import React,{useEffect} from "react";
import { BrowserRouter,Routes,Route,useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import WatchPartyRoom from "./components/WatchPartyRoom";
// import LeftNav from "./components/LeftNav";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Landing from "./components/Landing";
import Login from "./components/Login";
import { useSelector,useDispatch } from 'react-redux';
import { loginUser} from './Reducers/authReducer';
import { auth } from "./firebase";
function App() {
  const user = useSelector((state) => state.auth);

  const navigate=useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
   
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        // dispatch(setLoading(false));
        navigate('/home')
      } else {
        navigate('/')
        // dispatch(setLoading(false));
        console.log("User is not logged in.");
        
      }
      
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 

  return (<>
  

    <div className="flex flex-col h-full  bg-black min-h-screen">
    <Routes>
    {user.user &&<Route path="/home" exact element={<> <AppContext><Header/><Feed/></AppContext></>}/>}
    {user.user &&<Route path="/searchResult/:searchQuery" element={<><AppContext><Header/><SearchResult/></AppContext></>}/>}
    {user.user &&<Route path="/video/:id" element={<><AppContext><Header/><VideoDetails/></AppContext></>}/>}
    {user.user &&<Route path="/watchparty/:id" element={<><AppContext><Header/><WatchPartyRoom/></AppContext></>}/>}
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    </div>
    {/* </AppContext> */}
  
  </>
  );
}

export default App;
