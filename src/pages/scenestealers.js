import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage } from "../components/Hero/Hero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Scene Stealers",
    projectClass = "scenestealers",
    projectYear = "2018",
    externalLink = "#",
    externalLinkLabel="Launch the Game",

    nextProjectName="New York Drive",
    nextProjectClass="newyorkdrive",
    nextProjectLink="/newyorkdrive";


export default class SceneStealers extends React.Component {
  componentDidMount() {
    document.title = "Coach Digital | " + projectName;
  }
  render() {
  return (
    <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection>
        Building off of the success from the year before, we partnered with the Coach Japan team to create another social-first game to support the 2018 Holiday campaign. Following on from the narrative of the campaign, Scene Stealers featured the whole cast of Party Animals as well as our brand ambassadors Selena Gomez and Kiko Mizuhara.
      </IntroSection>

      <HeroImage projectClass={projectClass} />

      <TextSection>
        The game consisted of 3 levels, each building up in difficulty. In a "Where's Waldo?" fashion, the goal was to find the animals hidden within Coach-inspired collages before time ran out.
      </TextSection>

      <VideoSection
        src='gameplay.mp4'
        caption='Gameplay'
        folder={projectClass}
      />

      <TextSection>
          Leveraging the CGI animations created for the campaign videos, we were able to show each of the Party Animal's personalities at various points throughout the game.
      </TextSection>


      <ImageSectionSlim
        src='meetthecast.png'
        caption='"Meet the Cast"'
        folder={projectClass}
      />

      <VideoSectionSlim
        src='animals.mp4'
        caption='"Party Animals" animations'
        folder={projectClass}
      />

      <VideoSectionSlim
        src='celeb.mp4'
        caption='Selena Gomez and Kiko Mizuhara'
        folder={projectClass}
      />

      <TextSection>
        We created three elaborate scenes to hide the animals in, highlighting key themes and elements from the Holiday campaign.
      </TextSection>

      <CarouselSection color={projectClass} caption='Level artwork'>
        <CarouselVideo src="carousel-1.mp4" folder={projectClass}/>
        <CarouselVideo src="carousel-2.mp4" folder={projectClass}/>
        <CarouselVideo src="carousel-3.mp4" folder={projectClass}/>
      </CarouselSection>



      <TextSection>
        At the end of each level, we featured curated product assortments based on the characters found in the game. By successfully completing all three levels, the user unlocked a special in-store promotion and could enter to win prizes via LINE app.
      </TextSection>

      <VideoSectionSlim
        src='results.mp4'
        caption='Results page'
        folder={projectClass}
      />

      <Footer>
       <FooterSection title="Key Results">
         <Results p="Number of Unique Game Plays" b="23.2K" />
         <Results p="Game Conversion Rate" b="31.82%" />
         <Results p="Number of Users on SNOW App" b="1.2M" />
       </FooterSection>
       <FooterSection title="Credits">
         <Credits left="Art Direction" right="Coach Creative Team" />
         <Credits left="Copywriting" right="Coach Creative Team" />
         <Credits left="Development" right="Dentsu Isobar" />
         <Credits left="Project Management" right="Dentsu Isobar & Coach Japan" />
       </FooterSection>
     </Footer>

      </ProjectWrapper>
    );
  }
}
