import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselSectionSlim, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage, HeroVideo } from "../components/Hero/Hero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Coach x Michael B Jordan",
    projectClass = "mbj",
    projectYear = "2019",
    externalLink = "#",
    externalLinkLabel="",

    nextProjectName="Life Coach",
    nextProjectClass="lifecoach",
    nextProjectLink="/lifecoach";

export default class RexyRace extends React.Component {
  render() {
  return (
    <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection>
        To support Michael B Jordan’s first collection with Coach we decided to celebrate its Anime influences. Developing an immersive, gesture-led gaming experience, utilizing a mixture of technology frameworks as Coach customers became Students. Just as their hero Naruto had to, Students were tasked with trying to graduate from ‘The Academy’ at the base of Hokage Mountain.
      </IntroSection>

      <HeroVideo projectClass={projectClass} />
      <ProjectLink href={externalLink} label={externalLinkLabel}/>

      <TextSection>
        With a collection rooted so much in utility, allowed us to position product as a core component of this experience. Students triggered the experience to start by wearing a key piece of the collection and matching a unique pose. Crafted this contextual contact between Customer and Product resonated with the audience as an authentic way to experience new product ranges.
      </TextSection>

      <ImageSection src='placeholder.png' caption=' Influencer wearing Belt Bag' folder={projectClass} />

      <TextSection>
        "Students" were tasked to follow Naruto and attempt to perform poses of increasing complexity as they experience his Ninja Training first hand. With a gaming engine built in, the quicker Students were to complete poses the more points they scored–shooting them up the scoreboard
      </TextSection>

      <ImageSection src='poses.png' caption='Naruto poses' folder={projectClass} />

      <TextSection>
        To celebrate successfully completed Jutsu during the game we developed a number of animation sequences influenced by TV show
      </TextSection>

      <ImageSection src='placeholder.png' caption='Jutsu animations' folder={projectClass} />

      <TextSection>
        This immersive experience was experience in multiple countries in parallel, creating a difficult logistical issue.
      </TextSection>

      <CarouselSectionSlim color={projectClass} caption='Tokyo and LA Pop-ups'>
        <CarouselImage src="carousel-1.png" folder={projectClass}/>
        <CarouselImage src="carousel-2.png" folder={projectClass}/>
        <CarouselImage src="carousel-3.jpg" folder={projectClass}/>
      </CarouselSectionSlim>

      <Footer>
       <FooterSection title="Key Results">
         <Results p="Number of Unique Players" b="000K" />
         <Results p="Number of Shares" b="00K" />
         <Results p="Number of Graduates" b="000" />
       </FooterSection>
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
