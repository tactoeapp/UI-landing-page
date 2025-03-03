import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import AboutUs from '../partials/AboutUs';
import TooltipAlert from '../utils/TooltipAlert';
import SocialIcons from '../utils/SocialIcons';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <AboutUs />
        <FeaturesBlocks />
        <Testimonials />
        {/* <Newsletter /> */}

      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />

      {/* Tooltip alert */}
      <TooltipAlert />

      {/* Social icons */}
      {/* <SocialIcons /> */}

    </div>
  );
}

export default Home;
