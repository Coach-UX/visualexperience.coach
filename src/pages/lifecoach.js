import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo, CarouselSectionSlim } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection } from "../components/Hero/Hero";
import { ScrollingHeroLaptop, ScrollingHeroFlex } from "../components/Hero/ScrollingHero";
import { Footer, FooterSection, Results, Award, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Life Coach",
    projectClass = "lifecoach",
    projectYear = "2018",
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

        <ScrollingHeroFlex
          desktop="https://res.cloudinary.com/dfiwfoxwx/video/upload/v1587408462/Case%20Study/lifecoach/lc-tokyo-.mp4"
          mobile="https://res.cloudinary.com/dfiwfoxwx/video/upload/v1587403252/Case%20Study/lifecoach/hero-mobile-video.mp4"
          poster="img/lifecoach/hero-mobile-video.jpg"
          adjustmentClass="adjustTop"
          DesktopScreenTop="21.5%"
          DesktopScreenMaskHeight="150vw"
          MobileDeviceTop="15%"
          MobileScreenTop="32%"
          MobileScreenMaskHeight="940vw"
        />

        <ProjectLink href={externalLink} label={externalLinkLabel}/>

        <TextSection>
        Held in SoHo, New York in June 2018, the week-long, immersive pop-up invited guests to explore four interactive spaces designed around the themes of creativity and self-expression.
        </TextSection>

        <ImageSection src='screens.png' caption='Website Screens' folder={projectClass} />

        <VideoSectionSlim
          src='programming.mp4'
          caption='Programming schedule'
          folder={projectClass}
        />

        <VideoSectionSlim
          src='phone.mp4'
          caption='Phone interaction'
          folder={projectClass}
        />

        <VideoSectionSlim
          src='headline.mp4'
          caption='Headline glitch interaction'
          folder={projectClass}
        />

        <TextSection>
        Created in collaboration with set designer Simon Costin, the playfully surreal experience included a DIY graffiti room, tarot readings, fairground games, live performances and nightly DJs sets. The entire experience was conceived and executed as a way to surprise and delight guests.
        </TextSection>

        <CarouselSectionSlim caption='SoHo, NY Event Space'>
          <CarouselImage src="carousel1.jpg" folder={projectClass}/>
          <CarouselImage src="carousel2.jpg" folder={projectClass}/>
          <CarouselImage src="carousel3.jpg" folder={projectClass}/>
          <CarouselImage src="carousel4.jpg" folder={projectClass}/>
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
         <FooterSection title="Credits">
           <Credits left="Art Direction" right="Coach Creative Team" />
           <Credits left="Copywriting" right="Coach Creative Team" />
           <Credits left="Development" right="Coach Creative Team" />
           <Credits left="Set Design" right="Simon Costin" />
           <Credits left="Project Management" right="The Projects*" />
         </FooterSection>
       </Footer>

      </ProjectWrapper>
  );
  }
}
