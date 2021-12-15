import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FeaturesSection from "./components/Sections/FeaturesSection/FeaturesSection";
import TestimonialSection from "./components/Sections/TestimonialSection/TestimonialSection";
import SuscribeSection from "./components/Sections/SuscribeSection/SuscribeSection";
import ContactSection from "./components/Sections/ContactSection/ContactSection";
import Profile from "./components/Profiles/Profile";
import { SocialMediaNav } from "./components/Sections/SocialMedias/SocialMediaNav";
import Dashboard from "./components/Profiles/UserProfile/Dashboard";
import ProfileData from "./components/Profiles/UserProfile/ProfileData";
import BussinessProfile from "./components/Profiles/JobProfile/BussinessProfile";
import SearchResults from "./components/Search/SearchResults";
import Postulaciones from "./components/Profiles/UserProfile/Postulaciones";
import { SearchProvider } from "./Context/SearchContext";
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
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

            <Route exact path="/contacto">
              <Header options={"contact"} />
              <ContactSection />
            </Route>

            <Route exact path="/login">
              <LoginForm />
            </Route>

            <Route exact path="/signup">
              <RegisterForm />
            </Route>

            <Route exact path="/dashboard/:id">
              <Profile>
                <Dashboard />
              </Profile>
            </Route>

            <Route exact path="/dashboard/:id/perfil">
              <Profile>
                <ProfileData />
              </Profile>
            </Route>

            <Route exact path="/dashboard/:id/postulaciones">
              <Profile>
                <Postulaciones />
              </Profile>
            </Route>

            <Route exact path="/dashboard/:id/guardado">
              <Profile>
              {/* Listado de sus favoritos */}
              </Profile>
            </Route>

            <Route exact path="/jobs/:id">
              <Profile>
                <BussinessProfile />
              </Profile>
            </Route>
          </Switch>
          <Footer />
        </Layout>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
