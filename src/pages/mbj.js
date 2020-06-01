import React from 'react';

// components
import {CarouselSectionSlim, CarouselImage } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroVideoSlim } from "../components/Hero/Hero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Coach x MBJ",
    projectClass = "mbj",
    projectYear = "2019",

    nextProjectName='Art of Signature',
    nextProjectClass="signature",
    nextProjectLink="/signature";


export default class RexyRace extends React.Component {
  componentDidMount() {
    document.title = "Coach Digital | " + projectName;
  }
  render() {
  return (
    <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection>
        To support Michael B Jordan’s first collection with Coach we decided to celebrate its Anime influences. Developing an immersive, gesture-led gaming experience, utilizing a mixture of technology frameworks as Coach customers became "Students". Just as their hero Naruto had to, Students were tasked with trying to graduate from "The Academy" at the base of Hokage Mountain.
      </IntroSection>

      <HeroVideoSlim projectClass={projectClass} />

      <TextSection>
        With a collection rooted so much in utility, it made sense for us to position product as a core component of this experience. Students triggered the experience to start by wearing a key piece of the collection and matching a unique pose. Crafted this contextual contact between Customer and Product resonated with the audience as an authentic way to experience new product ranges.
      </TextSection>

      <ImageSection src='beltbag.jpg' caption=' Guest wearing Coach x MBJ Belt Bag' folder={projectClass} />

      <TextSection>
        Students were tasked to follow Naruto and attempt to perform poses of increasing complexity as they experience his Ninja Training first hand. With a gaming engine built in, the quicker Students were to complete poses the more points they scored–shooting them up the scoreboard.
      </TextSection>

      <ImageSection src='poses.png' caption='Naruto poses' folder={projectClass} />

      <VideoSectionSlim src='poses.mp4' caption='Pose rotation' folder={projectClass} />

      <TextSection>
        To celebrate successfully completed Jutsu during the game, we developed a number of animation sequences influenced by the anime show.
      </TextSection>

      <ImageSection src='gameplay.jpg' caption='Omotesando, Tokyo store' folder={projectClass} />

      <TextSection>
        This immersive experience was installed in multiple countries in parallel, creating a logistical challenge for the team.
      </TextSection>

      <CarouselSectionSlim color={projectClass} caption='Tokyo and LA installations'>
        {/*<CarouselImage src="carousel2.jpg" folder={projectClass}/>*/}
        <CarouselImage src="carousel1.jpg" folder={projectClass}/>
        <CarouselImage src="carousel3.jpg" folder={projectClass}/>
        <CarouselImage src="carousel4.jpg" folder={projectClass}/>
        <CarouselImage src="carousel5.jpg" folder={projectClass}/>
      </CarouselSectionSlim>

      <TextSection>
        At the end of the game, the user received a video of them doing a Jutsu which we encouraged them to share on their social media channels.
      </TextSection>

      <VideoSectionSlim src='share.mp4' caption='Share page' folder={projectClass} />


      <Footer>
       {/*<FooterSection title="Key Results">
         <Results p="Number of Unique Players" b="000" />
         <Results p="Number of Shares" b="000" />
         <Results p="Number of Graduates" b="000" />
       </FooterSection>*/}
       <FooterSection title="Credits">
         <Credits left="Art Direction" right="Coach Creative Team" />
         <Credits left="Copywriting" right="Coach Creative Team" />
         <Credits left="Set Design" right="Coach Visual Merchandising" />
         <Credits left="Development" right="Roots Communication" />
         <Credits left="Project Management" right="Roots Communication & Coach Japan" />
       </FooterSection>
     </Footer>

    </ProjectWrapper>
    );
  }
}
