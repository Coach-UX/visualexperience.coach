import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselSectionSlim, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage, HeroVideo } from "../components/Hero/Hero";
import { Footer, FooterSection, Results } from "../components/Footer";


// project details
var projectName = "Coach x\nMichael B Jordan",
    projectClass = "mbj",
    projectYear = "2019",
    externalLink = "#",
    externalLinkLabel="",
    client = "Coach North America & Coach Japan",

    nextProjectName="Life Coach",
    nextProjectClass="lifecoach",
    nextProjectLink="/lifecoach";


export default class MBJ extends React.Component {
  render() {
    return (
        <ProjectWrapper client={client} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

        <IntroSection projectName={projectName}>
          To help launch and create buzz around Michael B Jordan's Naruto-inspired capsule collection, we partned with Viz Media to build an interactive game – called "Ninja Academy" – that allowed guests to engage with the collection in a fun and intimate way.
        </IntroSection>

        <HeroVideo projectClass={projectClass} />

        <TextSection>
        Held in SoHo, New York in June 2018, the week-long, immersive pop-up invited guests to explore four interactive spaces designed around the themes of creativity and self-expression.
        </TextSection>

        <CarouselSectionSlim color={projectClass} caption='Action Shots'>
          <CarouselImage src="img/mbj/carousel-1.png" />
          <CarouselImage src="img/mbj/carousel-2.png" />
          <CarouselImage src="img/mbj/carousel-3.jpg" />
          <CarouselImage src="img/mbj/carousel-4.jpeg" />
        </CarouselSectionSlim>

        <TextSection>
        Created in collaboration with set designer Simon Costin, the playfully surreal experience included a DIY graffiti room, tarot readings, fairground games, live performances and nightly DJs sets. The entire experience was conceived and executed as a way to surprise and delight guests.
        </TextSection>

        <CarouselSectionSlim caption='Omotesando, Tokyo Launch Event'>
          <CarouselImage src="img/mbj/carousel-5.jpg" />
          <CarouselImage src="img/mbj/carousel-6.jpeg" />
          <CarouselImage src="img/mbj/carousel-7.jpg" />
          <CarouselImage src="img/mbj/carousel-8.jpg" />
          <CarouselImage src="img/mbj/carousel-9.png" style="object-position: top"/>
        </CarouselSectionSlim>

        <Footer>
          <FooterSection title="Key Results">
            <Results p="Number of Unique Users " b="--" />
            <Results p="Number of Unique Game Plays" b="--" />
          </FooterSection>
        </Footer>

      </ProjectWrapper>
  );
  }
}
