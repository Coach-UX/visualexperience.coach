import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage } from "../components/Hero/Hero";
import { Footer, FooterSection, Results } from "../components/Footer";



// project details
var projectName = "Rexy's\nHoliday Race",
    projectClass = "rexyrace",
    projectYear = "2019",
    externalLink = "#",
    externalLinkLabel="Launch the Game",
    client = "Coach Japan",

    nextProjectName="Coach x\nMichael B Jordan",
    nextProjectClass="mbj",
    nextProjectLink="/mbj";

export default class RexyRace extends React.Component {
  render() {
  return (
    <ProjectWrapper client={client} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection projectName={projectName}>
        To support Coach's 2019 Holiday campaign, we created an entertainment-first experience following on from the narrative of the campaign. We opted for a bespoke web-based game to be played via social media channels.
      </IntroSection>

      <HeroImage projectClass={projectClass} />
      <ProjectLink href={externalLink} label={externalLinkLabel}/>

      <TextSection>
        With a Gen-Z audience being the primary target audience we opted to explore an nostalgic arcade aesthetic, often seen in the early 90s. Throughout the game design we designed with that era in mind, resulting in the gameplay and menu being contextual to arcade experiences from that age.
      </TextSection>

      <ImageSection src='img/rexyrace/screens.png' caption='Gameplay Screens' />

      <TextSection>
        3 bespoke avatars were created for players to choose from at the beginning of the game. Working closely with the Illustrator to render out Rexy in Pixel Art for the first time.
      </TextSection>

      <VideoSectionSlim
        src='img/rexyrace/avatars.mp4'
        caption='Avatars' muted
      />

      <TextSection>
        In total we created four scenes, all made from a mixture of elements from Tokyo and New York City.
      </TextSection>

      <CarouselSection color={projectClass} caption='Stage Artwork'>
        <CarouselImage src="img/rexyrace/stage1.png" />
        <CarouselImage src="img/rexyrace/stage2.png" />
        <CarouselImage src="img/rexyrace/stage3.png" />
      </CarouselSection>

      <TextSection>
        Throughout the game we introduced Collectibles. These included bespoke drawings from the Horse & Carriage collection along with other everyday objects (found within the scenes).
      </TextSection>

      <ImageSection src='img/rexyrace/collectibles.png' caption='Game Collectibles' />

      <Footer>
        <FooterSection title="Key Results">
          <Results p="Number of Unique Players" b="211.5K" />
          <Results p="Number of Unique Game Plays" b="264.3K" />
          <Results p="Audience Demographics" b="18-35" />
        </FooterSection>
      </Footer>

    </ProjectWrapper>
    );
  }
}
