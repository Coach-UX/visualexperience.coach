import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage } from "../components/Hero/Hero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Rainbow Hockey",
    projectClass = "rainbowhockey",
    projectYear = "2017",
    externalLink = "#",
    externalLinkLabel="Launch the Game",

    nextProjectName="Rexy's Holiday Race",
    nextProjectClass="rexyrace",
    nextProjectLink="/";

export default class RainbowHockey extends React.Component {
  render() {
  return (
    <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection>
        To support the 2017 Holiday campaign we partnered with the Coach Japan team to create an entertainment first experience. “The Arcade” featured two distinct games for users to play and enjoy either in-store or on their mobile devices.
      </IntroSection>

      <HeroImage projectClass={projectClass} />
      <ProjectLink href={externalLink} label={externalLinkLabel}  />

      <TextSection>
        New York Drive and Rainbow Hockey took the campaign and brought it to life in an fun, unxpected way. Brand motifs, neon and 80’s inspired graphics were used to reimagine some of the classic arcade games of the era.
      </TextSection>

      <ImageSectionSlim src='img/rainbowhockey/logo.png' caption='"Rainbow Hockey" Logo' />

      <TextSection>
        Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum ves.
      </TextSection>

      <ImageSection src='img/rainbowhockey/screens.png' caption='Gameplay Screens' />

      <TextSection>
        Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum ves.
      </TextSection>

      <VideoSectionSlim
        src='img/rainbowhockey/RH-RallyModule.mp4'
        poster=''
        caption='Gameplay'
      />

      <VideoSectionSlim
        src='img/rainbowhockey/RH-GoalModule.mp4'
        poster=''
        caption='"Goal" animation'
      />

      <VideoSectionSlim
        src='img/rainbowhockey/RH-YouWinModule.mp4'
        poster=''
        caption='"You Win" animation'
      />



      <TextSection>
        Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
      </TextSection>

      <ImageSectionSlim src='img/rainbowhockey/snapchat.png' caption='Custom Snapchat Pins'  />

      <TextSection>
        Alongside the mobile experience, physical arcade machines were installed at Coach stores in Omotesando, Ginza and Shinjuku as a way to bridge the customer experence from online to offline, ultimately driving traffic to stores.
      </TextSection>

      <CarouselSection caption='In-Store Experience'>
        <CarouselImage src="img/rainbowhockey/carousel-1.png" />
        <CarouselImage src="img/rainbowhockey/carousel-2.png" />
        <CarouselImage src="img/rainbowhockey/carousel-3.png" />
        <CarouselImage src="img/rainbowhockey/carousel-4.png" />
        <CarouselImage src="img/rainbowhockey/carousel-5.png" />
      </CarouselSection>

      <Footer>
        <FooterSection title="Key Results">
          <Results p="Number of Unique Game Plays" b="65.2K" />
          <Results p="Plays Per User" b="1.8x" />
          <Results p="Total Conversions to Coach.com" b="27K" />
          <Results p="Total Conversions to Store" b="29K" />
        </FooterSection>
        <FooterSection title="Credits">
          <Credits left="Art Direction" right="Coach Creative Team" />
          <Credits left="UI/UX Design" right="Coach Creative Team" />
          <Credits left="Copywriting" right="Coach Creative Team" />
          <Credits left="Illustration" right="Coach Creative Team" />
          <Credits left="Development" right="5cream1ouder" />
          <Credits left="Project Management" right="Dentsu Isobar & Coach Japan" />
        </FooterSection>
      </Footer>

    </ProjectWrapper>

    );
  }
}
