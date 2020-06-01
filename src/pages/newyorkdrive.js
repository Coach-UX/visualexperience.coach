import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselImage, CarouselSectionSlim } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage } from "../components/Hero/Hero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "New York Drive",
    projectClass = "newyorkdrive",
    projectYear = "2017",
    externalLink = "https://the-arcade-42db2.web.app/drive.html",
    externalLinkLabel="Launch the Game",

    nextProjectName="Rainbow Hockey",
    nextProjectClass="rainbowhockey",
    nextProjectLink="/rainbowhockey";

export default class NewYorkDrive extends React.Component {
  componentDidMount() {
    document.title = "Coach Digital | " + projectName;
  }
  render() {
  return (
    <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection>
        To support the 2017 Holiday campaign, we partnered with the Coach Japan team to create custom arcade games– a first for Coach. “The Arcade” featured two distinct games for users to play and enjoy either in-store or on their mobile devices.
      </IntroSection>

      <HeroImage projectClass={projectClass} />
      <ProjectLink className="mobileOnly" href={externalLink} label={externalLinkLabel}  />

      <TextSection>
        "The Arcade" took the Holiday campaign and brought it to life in a fun, unexpected way. Brand motifs, neon and 80’s inspired graphics were used to reimagine some of the classic arcade games of the era. The objective was to drive brand awareness and engangement, highlighting Coach as a gift-giving desitination for the holidays.
      </TextSection>

      <ImageSectionSlim src='logo.png' caption='"New York Drive" logo' folder={projectClass} />

      <TextSection>
        "New York Drive" takes place in a captivating, tron-esque interpretation of New York City. The goal is to collect as many gift boxes as possible while avoiding oncoming traffic in order to reach the finish line.
      </TextSection>

      <ImageSection src='screens.png' caption='Gameplay screens' folder={projectClass} />

      <VideoSectionSlim
        src='NY-CrashModule.mp4'
        caption='"Crash" animation'
        folder={projectClass}
      />

      <VideoSectionSlim
        src='NY-YouWinModule.mp4'
        caption='"You Win" animation'
        folder={projectClass}
      />

      <TextSection>
        To bring the game to life, we created bespoke artwork to make the games look uniquely “Coach”– incorporating iconic New York City landmarks with some of our brand codes.
      </TextSection>

      <ImageSection src='buildings.png' caption='Building illustrations' folder={projectClass}/>

      <ImageSection src='artwork.png' caption='Neon sign illustrations' folder={projectClass}/>

      <ImageSectionSlim src='car.png' caption='Car illustration' folder={projectClass}/>

      <TextSection>
        Alongside the mobile experience, physical arcade machines were installed at Coach stores in Omotesando, Ginza and Shinjuku as a way to bridge the customer experience from online to offline, ultimately driving traffic to stores.
      </TextSection>

      <CarouselSectionSlim caption='In-Store experience'>
        <CarouselImage src="carousel-1.jpg" folder={projectClass} />
        <CarouselImage src="carousel-2.jpg" folder={projectClass} />
        <CarouselImage src="carousel-3.jpg" folder={projectClass} />
        <CarouselImage src="carousel-4.jpg" folder={projectClass} />
      </CarouselSectionSlim>

      <TextSection>
        In North America, we partnered with Snapchat to create custom Snapcode pins which customers could scan to unlock the game in their Snapchat app.
      </TextSection>

      <CarouselSectionSlim caption='Custom Snapchat pins'>
        <CarouselImage src="snapchat.png" folder={projectClass} />
        <CarouselImage src="snapchat2.jpg" folder={projectClass} />
        <CarouselImage src="snapchat3.jpg" folder={projectClass} />
        <CarouselImage src="snapchat4.jpg" folder={projectClass} />
      </CarouselSectionSlim>


      <Footer>
        <FooterSection title="Key Results">
          <Results p="Number of Unique Game Plays" b="65.2K" />
          <Results p="Plays Per User" b="1.8x" />
          <Results p="Total Conversions to Coach.com" b="27K" />
          <Results p="Total Conversions to Store" b="29K" />
        </FooterSection>
        <FooterSection title="Credits">
          <Credits left="Art Direction" right="Coach Creative Team" />
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
