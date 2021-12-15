
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderAbout from './components/Header/HeaderAbout';
import FeaturesSection from './components/Sections/FeaturesSection/FeaturesSection';
import TestimonialSection from './components/Sections/TestimonialSection/TestimonialSection';
import SuscribeSection from './components/Sections/SuscribeSection/SuscribeSection';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import BlogHome from './components/Blog/BlogHome/BlogHome';
import Profile from './components/Profiles/Profile';
import { SocialMediaNav } from './components/Sections/SocialMedias/SocialMediaNav';
import Dashboard from './components/Profiles/UserProfile/Dashboard';
import ProfileData from './components/Profiles/UserProfile/ProfileData';
import BussinessProfile from './components/Profiles/JobProfile/BussinessProfile';
import SearchResults from './components/Search/SearchResults';
//import BlogPreviewSection from './components/Sections/BlogPreviewSection/BlogPreviewSection';
//import ContactSection from './components/Sections/ContactSection/ContactSection';
import { QuizSection } from './components/Sections/Quiz/QuizSection';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <Header options={'home'}/>
                        <FeaturesSection/>
                        <TestimonialSection/>
                        <SearchResults/>
                        <SocialMediaNav/>
                        <SuscribeSection/>
                    </Route>


                    <Route exact path='/contacto'>
                        <HeaderAbout options={'about'} />
                        <AboutSection />
                    </Route>

                    <Route exact path='/login'>
                      
                    </Route>

                    <Route exact path='/quiz'>
                      <QuizSection/>
                    </Route>


                    <Route exact path='/blog'>
                        <BlogHome />
                    </Route>

                    <Route exact path='/dashboard/:id'>
                        <Profile>
                            <Dashboard />
                        </Profile>
                    </Route>

                    <Route exact path='/dashboard/:id/perfil'>
                        <Profile>
                            <ProfileData/>  
                        </Profile>
                    </Route>

                    <Route exact path='/dashboard/:id/postulaciones'>
                        <Profile>
                            {/* Listado de sus postulaciones */}
                        </Profile>
                    </Route>

                    <Route exact path='/dashboard/:id/guardado'>
                        <Profile>
                            {/* Listado de sus favoritos */}
                        </Profile>
                    </Route>

                    <Route exact path='/jobs/:id'>
                        <Profile>
                            <BussinessProfile/>
                        </Profile>
                    </Route>

                </Switch>
                <Footer/>
            </Layout>
        </BrowserRouter>
      
    );
}

export default App;
