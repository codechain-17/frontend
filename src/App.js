import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FeaturesSection from "./components/Sections/FeaturesSection/FeaturesSection";
import TestimonialSection from "./components/Sections/TestimonialSection/TestimonialSection";
import SuscribeSection from "./components/Sections/SuscribeSection/SuscribeSection";
import { QuizSection } from "./components/Quiz/QuizSection";
import Profile from "./components/Profiles/Profile";
import { SocialMediaNav } from "./components/Sections/SocialMedias/SocialMediaNav";
import Dashboard from "./components/Profiles/UserProfile/Dashboard";
import ProfileData from "./components/Profiles/UserProfile/ProfileData";
import BussinessProfile from "./components/Profiles/JobProfile/BussinessProfile";
import SearchResults from "./components/Search/SearchResults";
import { SearchProvider } from "./Context/SearchContext";
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Jobs from "./components/Jobs/Jobs";

function App() {
  const {authUser} = useContext(UserContext)

  return (
    <SearchProvider>
      <BrowserRouter>

        <Layout>

          <Navbar />

          <Switch>
          
            <Route exact path="/">
              <Header options={"home"} />
              <FeaturesSection />
              <TestimonialSection />
              <SearchResults />
              <SocialMediaNav />
              <SuscribeSection />
            </Route>

            <Route exact path="/login">
              <LoginForm />
            </Route>

            <Route exact path="/signup">
              <RegisterForm />
            </Route>

            {
              authUser &&
                <>
                    <Route exact path="/dashboard">
                      <Profile>
                        <Dashboard />
                      </Profile>
                    </Route>

                    <Route exact path="/dashboard/perfil">
                      <Profile>
                        <ProfileData />
                      </Profile>
                    </Route>

                    <Route exact path="/dashboard/postulaciones">
                      <Profile>
                        <Jobs />
                      </Profile>
                    </Route>

                    <Route exact path="/dashboard/guardado">
                      <Profile>
                      {/* Listado de sus favoritos */}
                      </Profile>
                    </Route>
                </>
            }

            <Route exact path="/jobs/:id">
              <Profile>
                <BussinessProfile />
              </Profile>
            </Route>

            <Route path="/quiz/:category">
              <QuizSection />
            </Route>
            
            <Route path="*">
              <ErrorPage/>
            </Route>

          </Switch>

          <Footer />

        </Layout>

      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
