import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselImage, CarouselSectionSlim } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, VideoSectionSlim, VideoSectionSlimExternal } from '../components/Sections';
import { IntroSection } from "../components/Hero/Hero";
import { ScrollingHeroFlex } from "../components/Hero/ScrollingHero";
import { Footer, FooterSection, Results, Award, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Life Coach",
    projectClass = "lifecoach",
    projectYear = "2018",
    externalLink = "https://life-coach-7584c.web.app",
    externalLinkLabel="Launch the Site",

    nextProjectName="Scene Stealers",
    nextProjectClass="scenestealers",
    nextProjectLink="/scenestealers";


export default class LifeCoach extends React.Component {
  componentDidMount() {
    document.title = "Coach Digital | " + projectName;
  }
  render() {
    return (
      <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} className="heroLaptop" >

        <IntroSection>
          Your future is calling. Are ready to pick up? And with that subversive messaging, we kicked off Coach’s first immersive pop-up experience. The interactive, open-to-the-public, pop-up melded established brand codes (NYC, nostalgia and Americana) with of-the-moment mysticism (tarot, sound baths and astrology). The result; an unexpected experiential that put a premium on user experience, production values and content opportunities over overt product marketing.
        </IntroSection>

        <ScrollingHeroFlex
          desktop="img/lifecoach/lifecoachny-desktop.mp4"
          mobile="img/lifecoach/lifecoachny-mobile.mp4"
          Desktop_ScreenTop="21.5%"
          Desktop_MaskHeight="145vw"
          Mobile_ScreenTop="32%"
          Mobile_MaskHeight="785vw"
        />

        <ProjectLink href={externalLink} label={externalLinkLabel}/>

        <TextSection>
          To support the both the New York and Tokyo activations, we designed and developed the website <u>startyourlife.coach</u> which served as a way to drive RSVP's and offered guests a hint of what to expect at the event.
        </TextSection>

        {/*<VideoSectionSlim
          src='programming.mp4'
          caption='Programming schedule'
          folder={projectClass}
        />*/}

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

        <ImageSection src='screens.jpg' caption='LINE integration for Tokyo event' folder={projectClass} />

        <TextSection>
        The week-long, immersive pop-up invited guests to explore four interactive spaces designed around the themes of creativity and self-expression. Created in collaboration with set designer Simon Costin, the playfully surreal experience included a DIY graffiti room, tarot readings, fairground games, live performances and nightly DJs sets. The entire experience was conceived and executed as a way to surprise and delight guests.
        </TextSection>

        <VideoSectionSlimExternal
          src='https://res.cloudinary.com/dfiwfoxwx/video/upload/v1587756841/Case%20Study/lifecoach/TheProjects.mp4'
          caption='SoHo, NY recap video'
        />



        <CarouselSectionSlim caption='SoHo, NY rooms'>
          <CarouselImage src="carousel0.jpg" folder={projectClass}/>
          <CarouselImage src="carousel1.jpg" folder={projectClass}/>
          <CarouselImage src="carousel5.jpg" folder={projectClass}/>
          <CarouselImage src="carousel2.jpg" folder={projectClass}/>
          <CarouselImage src="carousel3.jpg" folder={projectClass}/>
          <CarouselImage src="carousel4.jpg" folder={projectClass}/>
          <CarouselImage src="carousel6.jpg" folder={projectClass}/>
        </CarouselSectionSlim>

        <Footer>
         <FooterSection title="Key Results">
           <Results p="Total Number of Impressions" b="232.4K" />
           <Results p="Total Number of Conversions" b="14.4K" />
           <Results p="Tickets Reserved" b="100%" />
           <Results p="Audience Demographics" b="25-34" />
         </FooterSection>
         <FooterSection title="Awards">
           <Award link="https://drivenxdesign.com/NYC18/project.asp?ID=17871" src="img/lifecoach/award.png" alt="DrivenxDesign 2018 New York Design Awards: Gold" />
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
