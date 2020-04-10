import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection } from "../components/Hero/Hero";
import HeroLaptop from "../components/Hero/HeroLaptop";


// project details
var projectName = "Life Coach",
    projectClass = "lifecoach",
    projectYear = "2017",
    externalLink = "#",
    externalLinkLabel="Launch the Site",

    nextProjectName="Scene Stealers",
    nextProjectClass="scenestealers",
    nextProjectLink="/scenestealers";


export default class LifeCoach extends React.Component {
  render() {
    return (
      <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} className="heroLaptop" >

        <IntroSection>
          Your future is calling. Are ready to pick up? And with that subversive messaging, we kicked off Coach’s first immersive pop-up experience. The interactive, open-to-the-public, pop-up melded established brand codes (NYC, nostalgia and Americana) with of-the-moment mysticism (tarot, sound baths and astrology). The result; an unexpected experiential that put a premium on user experience, production values and content opportunities over overt product marketing.
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

        <CarouselSection caption='SoHo, NY Event Space'>
          <CarouselImage src="img/lifecoach/carousel1.png" />
          <CarouselImage src="img/lifecoach/carousel2.png" />
          <CarouselImage src="img/lifecoach/carousel3.png" />
          <CarouselImage src="img/lifecoach/carousel4.png" />
        </CarouselSection>

      </ProjectWrapper>
  );
  }
}
