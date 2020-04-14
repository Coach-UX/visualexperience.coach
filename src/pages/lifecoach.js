import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselSectionSlim, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection } from "../components/Hero/Hero";
import HeroLaptop from "../components/Hero/HeroLaptop";
import { Footer, FooterSection, Results, Award } from "../components/Footer";


// project details
var projectName = "Life Coach",
    projectClass = "lifecoach",
    projectYear = "2017",
    externalLink = "#",
    externalLinkLabel="Launch the Site",
    client = "Coach North America & Coach Japan",

    nextProjectName="Scene Stealers",
    nextProjectClass="scenestealers",
    nextProjectLink="/scenestealers";


export default class LifeCoach extends React.Component {
  render() {
    return (
      <ProjectWrapper client={client} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} className="heroLaptop" >

        <IntroSection projectName={projectName} className="Laptop">
          Marketing website promoting Coach’s immersive pop-up experience, Life Coach. Startyourlife.coach served as a way to drive RSVP's and offered guests a hint of what to expect at the event.
        </IntroSection>

        <HeroLaptop src="img/lifecoach/lc-ny-1.mp4" projectClass={projectClass} />

        <ProjectLink href={externalLink} label={externalLinkLabel}/>

        <TextSection>
        Held in SoHo, New York in June 2018, the week-long, immersive pop-up invited guests to explore four interactive spaces designed around the themes of creativity and self-expression.
        </TextSection>

        <ImageSection src='img/lifecoach/screens.png' caption='Website Screens' />

        <TextSection>
        Created in collaboration with set designer Simon Costin, the playfully surreal experience included a DIY graffiti room, tarot readings, fairground games, live performances and nightly DJs sets. The entire experience was conceived and executed as a way to surprise and delight guests.
        </TextSection>

        <CarouselSectionSlim caption='SoHo, NY Event Space'>
          <CarouselImage src="img/lifecoach/carousel1.png" />
          <CarouselImage src="img/lifecoach/carousel2.png" />
          <CarouselImage src="img/lifecoach/carousel3.png" />
          <CarouselImage src="img/lifecoach/carousel4.png" />
        </CarouselSectionSlim>

        <Footer>
          <FooterSection title="Key Results">
            <Results p="Total Number of Impressions" b="232.4K" />
            <Results p="Total Number of Conversions" b="14.4K" />
            <Results p="Tickets Reserved" b="100%" />
            <Results p="Audience Demographics" b="25-34" />
          </FooterSection>
          <FooterSection title="Awards">
            <Award link="https://drivenxdesign.com/NYC18/project.asp?ID=17871" src="img/lifecoach/award.png" />

          </FooterSection>
        </Footer>

      </ProjectWrapper>
  );
  }
}
