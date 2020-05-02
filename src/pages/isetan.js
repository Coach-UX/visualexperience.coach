import React from 'react';

// components
import {CarouselSectionSlim, CarouselImage } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroVideoSlim, HeroImageSlim } from "../components/Hero/Hero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = 'Isetan "The Stage"',
    projectClass = "isetan",
    projectYear = "2019",

    nextProjectName="Life Coach",
    nextProjectClass="lifecoach",
    nextProjectLink="/" + nextProjectClass;


export default class Isetan extends React.Component {
  componentDidMount() {
    document.title = "Coach Digital | " + projectName;
  }
  render() {
  return (
    <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection>
        This year Coach took over The Stage for the second year in a row. Customization was the focus for the pop-up with one-off embellishments being specifically created for the event. The design and experience challenge was to find a narrative that built on top of the existing Coach Create offering within the retail fleet and resonated with this luxury customer.
      </IntroSection>

      <HeroVideoSlim projectClass={projectClass} />

      <TextSection>
        We knew from previous experiences that surprising the Isetan customer with a level of customization that they couldn’t experience from the Coach brand elsewhere would resonate with them– so we decided to push the boundaries by extending the traditional customization ceremony by leveraging Radio Frequency Identification (RFID).
      </TextSection>

      <ImageSection src='screens.jpg' caption='iPad screens' folder={projectClass} />

      <TextSection>
        We developed an iPad experience that live streamed to the wall and allowed the customers to sign their one-of-a-kind design and pose for a photo showing it off
      </TextSection>

      <VideoSectionSlim src='top.mp4' caption='Idle screen' folder={projectClass} />

      <VideoSectionSlim src='signature.mp4' caption='Sign your name to start' folder={projectClass} />

      <VideoSectionSlim src='edit.mp4' caption='Customize layout' folder={projectClass} />


      <TextSection>
        We wanted any technology to be invisible to the customer so all of the crafted interactions were hidden from sight, and leverage RFID allowed us to position antennas and readers at specific locations, so once triggered the customers environment would magically change around them, giving them that surprise factor that we were after.
      </TextSection>

      <VideoSectionSlim src='bounceback.mp4' caption='Bounceback card with RFID' folder={projectClass} />

      <TextSection>
        We created a number of videos that reacted to the RFID that transitioned to build the backdrop for a highly shareable moment.
      </TextSection>

      <VideoSectionSlim src='ScreenAnimations.mp4' caption='Backdrop videos' folder={projectClass} />


      <CarouselSectionSlim color={projectClass} caption='Social response'>
        <CarouselImage src="carousel-3.jpg" folder={projectClass}/>
        <CarouselImage src="carousel-2.jpg" folder={projectClass}/>
        <CarouselImage src="carousel-1.jpg" folder={projectClass}/>
      </CarouselSectionSlim>


      <Footer>
       <FooterSection title="Key Results">
         <Results p="Number of Signatures" b="000" />
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
