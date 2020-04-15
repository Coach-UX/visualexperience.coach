import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo, CarouselSectionSlim } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage } from "../components/Hero/Hero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "New York Drive",
    projectClass = "newyorkdrive",
    projectYear = "2017",
    externalLink = "#",
    externalLinkLabel="Launch the Game",

    nextProjectName="Rainbow Hockey",
    nextProjectClass="rainbowhockey",
    nextProjectLink="/rainbowhockey";

export default class NewYorkDrive extends React.Component {
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

      <ImageSectionSlim src='img/newyorkdrive/logo.png' caption='Game Logos' />

      <TextSection>
        Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum ves.
      </TextSection>

      <ImageSection src='img/newyorkdrive/screens.png' caption='Gameplay Screens' />

      <TextSection>
        Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum ves.
      </TextSection>

      <VideoSectionSlim
        src='img/newyorkdrive/NY-CrashModule.mp4'
        poster=''
        caption='"Crash" animation'
      />

      <VideoSectionSlim
        src='img/newyorkdrive/NY-YouWinModule.mp4'
        poster=''
        caption='"You Win" animation'
      />

      <TextSection>
        To bring the ganes to life, we created bespoke artwork to make the games look uniquely “Coach”– incorporating iconic New York City landmarks with some of our brand codes.
      </TextSection>

      <ImageSection src='img/newyorkdrive/buildings.png' caption='Building Artwork' />

      <ImageSection src='img/newyorkdrive/artwork.png' caption='Neon Signs' />

      <ImageSectionSlim src='img/newyorkdrive/car.png' caption='Car Artwork' />

      <TextSection>
        Alongside the mobile experience, physical arcade machines were installed at Coach stores in Omotesando, Ginza and Shinjuku as a way to bridge the customer experence from online to offline, ultimately driving traffic to stores.
      </TextSection>

      <CarouselSectionSlim caption='In-Store Experience'>
        <CarouselImage src="img/newyorkdrive/carousel-1.png" />
        <CarouselImage src="img/newyorkdrive/carousel-2.png" />
        <CarouselImage src="img/newyorkdrive/carousel-3.png" />
        <CarouselImage src="img/newyorkdrive/carousel-4.png" />
        <CarouselImage src="img/newyorkdrive/carousel-5.png" />
      </CarouselSectionSlim>

      <TextSection>
        Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
      </TextSection>

      <ImageSectionSlim src='img/newyorkdrive/snapchat.png' caption='Custom Snapchat Pins'  />


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
