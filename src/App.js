
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
import PricingSection from './components/Sections/PricingSection/PricingSection';
import BlogHome from './components/Blog/BlogHome/BlogHome';
import { SocialMediaNav } from './components/Sections/SocialMedias/SocialMediaNav';
import { QuizSection } from './components/Sections/Quiz/QuizSection';
//
//import BlogPreviewSection from './components/Sections/BlogPreviewSection/BlogPreviewSection';
//import ContactSection from './components/Sections/ContactSection/ContactSection';

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
                        <SocialMediaNav/>
                        {/* <BlogPreviewSection/> */}
                        <SuscribeSection/>
                    </Route>

                    <Route exact path='/quiz'>
                        <QuizSection/>
                    </Route>

                    <Route exact path='/contacto'>
                        <HeaderAbout options={'about'} />
                        <AboutSection />
                        {/* <ContactSection /> */}
                    </Route>

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
