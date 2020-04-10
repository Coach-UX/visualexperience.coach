import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage } from "../components/Hero/Hero";



// project details
var projectName = "Rexy's Holiday Race",
    projectClass = "rexyrace",
    projectYear = "2019",
    externalLink = "#",
    externalLinkLabel="Launch the Game",

    nextProjectName="Life Coach",
    nextProjectClass="lifecoach",
    nextProjectLink="/lifecoach";

export default class RexyRace extends React.Component {
  render() {
  return (
    <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection>
        To support the 2019 Holiday campaign we partnered with the Coach Japan team to create an entertainment first experience. Following on from the narrative of the campaign we opted for an immersive game to be played via Social media channels, where players attempted to get Rexy to her holiday party.
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
        poster='img/rexyrace/avatars.jpg'
        caption='Avatars'
      />

      <TextSection>
        In total we created four scenes, all made from a mixture of elements from Tokyo and New York City.
      </TextSection>

      <CarouselSection caption='Stage Artwork'>
        <CarouselImage src="img/rexyrace/stage1.png" />
        <CarouselImage src="img/rexyrace/stage2.png" />
        <CarouselImage src="img/rexyrace/stage3.png" />
      </CarouselSection>

      <TextSection>
        Throughout the game we introduced Collectibles. These included bespoke drawings from the Horse & Carriage collection along with other everyday objects (found within the scenes).
      </TextSection>

      <ImageSection src='img/rexyrace/collectibles.png' caption='Game Collectibles' />

    </ProjectWrapper>
    );
  }
}
