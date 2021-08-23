import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Footer from "./Components/Footer/Footer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Friends from "./Components/Friends/Friends";
import News from "./Components/News/News";
import Photo from "./Components/Photo/Photo";
import Video from "./Components/Video/Video";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Home from "./Components/Home/Home";
import {BrowserRouter, Route} from "react-router-dom";


const App = ({ state, dispatch }) => {

  const { profilePageData, dialogsPageData } = state;

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Navigation/>
        <div className={'content'}>
          <Route exact path={'/'} render={() => <Home />}/>
          <Route path={'/profile'} render={() => <ProfileContainer
            profilePageData={profilePageData}
            dispatch={dispatch}
          />}/>
          <Route path={'/dialogs'} render={() => <DialogsContainer
            dialogsPageData={dialogsPageData}
            dispatch={dispatch}
          />}/>
          <Route path={'/friends'} component={Friends}/>
          <Route path={'/news'} component={News}/>
          <Route path={'/photo'} component={Photo}/>
          <Route path={'/video'} component={Video}/>
          <Route path={'/music'} component={Music}/>
          <Route path={'/settings'} component={Settings}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
