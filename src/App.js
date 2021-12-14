
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderAbout from './components/Header/HeaderAbout';
import FeaturesSection from './components/Sections/FeaturesSection/FeaturesSection';
import TestimonialSection from './components/Sections/TestimonialSection/TestimonialSection';
import BlogPreviewSection from './components/Sections/BlogPreviewSection/BlogPreviewSection';
import SuscribeSection from './components/Sections/SuscribeSection/SuscribeSection';
import AboutSection from './components/Sections/AboutSection/AboutSection';
import TeamSection from './components/Sections/TeamSection/TeamSection';
// import ContactSection from './components/Sections/ContactSection/ContactSection';
import PricingSection from './components/Sections/PricingSection/PricingSection';
import BlogHome from './components/Blog/BlogHome/BlogHome';

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
                        <BlogPreviewSection/>
                        <SuscribeSection/>
                    </Route>

                    <Route exact path='/about'>
                        <HeaderAbout options={'about'} />
                        <AboutSection />
                    </Route>

                    {/* <Route exact path='/contact'>
                        <ContactSection />
                    </Route> */}

                    <Route exact path='/pricing'>
                        <PricingSection />
                    </Route>

                    <Route exact path='/blog'>
                        <BlogHome />
                    </Route>

                </Switch>
                <Footer/>
            </Layout>
        </BrowserRouter>
      
    );
}

export default App;
