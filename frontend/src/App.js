
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import WatchPartyRoom from "./components/WatchPartyRoom";
// import LeftNav from "./components/LeftNav";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Landing from "./components/Landing";
function App() {
  return (<>
  
    <BrowserRouter>

    <div className="flex flex-col h-full bg-black">
    <Routes>
      <Route path="/landing" exact element={<> <AppContext><Header/><Feed/></AppContext></>}/>
      <Route path="/searchResult/:searchQuery" element={<><AppContext><Header/><SearchResult/></AppContext></>}/>
      <Route path="/video/:id" element={<><AppContext><Header/><VideoDetails/></AppContext></>}/>
      <Route path="/watchparty/:id" element={<><AppContext><Header/><WatchPartyRoom/></AppContext></>}/>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    
    </div>
    </BrowserRouter>
    {/* </AppContext> */}
  
  </>
  );
}

export default App;
