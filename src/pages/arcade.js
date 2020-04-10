import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage } from "../components/Hero/Hero";


// project details
var projectName = "The Arcade",
    projectClass = "arcade",
    projectYear = "2017",
    externalLink = "#",
    externalLinkLabel="Launch the Game",

    nextProjectName="Rexy's Holiday Race",
    nextProjectClass="rexyrace",
    nextProjectLink="/";

export default class Arcade extends React.Component {
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

      <ImageSectionSlim src='img/arcade/logos.png' caption='Game Logos' />

      <TextSection>
        Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum ves.
      </TextSection>

      <ImageSection src='img/arcade/screens.png' caption='Gameplay Screens' />

      <TextSection>
        Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum ves.
      </TextSection>

      <ImageSectionSlim src='img/arcade/rh-gameplay.png' caption='“Rainbow Hockey” gameplay'  />

      <ImageSectionSlim src='img/arcade/ny-gameplay.png' caption='“New York Drive" gameplay' />

      <TextSection>
        To bring the ganes to life, we created bespoke artwork to make the games look uniquely “Coach”– incorporating iconic New York City landmarks with some of our brand codes.
      </TextSection>

      <ImageSection src='img/arcade/buildings.png' caption='Building Artwork' />

      <ImageSection src='img/arcade/artwork.png' caption='Neon Signs' />

      <TextSection>
        Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
      </TextSection>

      <ImageSectionSlim src='img/arcade/snapchat.png' caption='Custom Snapchat Pins'  />

      <TextSection>
        Alongside the mobile experience, physical arcade machines were installed at Coach stores in Omotesando, Ginza and Shinjuku as a way to bridge the customer experence from online to offline, ultimately driving traffic to stores.
      </TextSection>

      <CarouselSection caption='In-Store Experience'>
        <CarouselImage src="img/arcade/carousel-1.png" />
        <CarouselImage src="img/arcade/carousel-2.png" />
        <CarouselImage src="img/arcade/carousel-3.png" />
        <CarouselImage src="img/arcade/carousel-4.png" />
        <CarouselImage src="img/arcade/carousel-5.png" />
      </CarouselSection>

    </ProjectWrapper>

    );
  }
}
