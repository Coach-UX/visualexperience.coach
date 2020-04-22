import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo, CarouselSectionSlim } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection } from "../components/Hero/Hero";
import { ScrollingHeroFlex } from "../components/Hero/ScrollingHero";
import { Footer, FooterSection, Results, Award, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Art of Signature",
    projectClass = "signature",
    projectYear = "2019",
    externalLink = "#",
    externalLinkLabel="Launch the Site",

    nextProjectName="Life Coach",
    nextProjectClass="lifecoach",
    nextProjectLink="/lifecoach";


export default class Signature extends React.Component {
  render() {
    return (
      <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} className="heroLaptop" >

        <IntroSection>
          Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condi.
        </IntroSection>

        <ScrollingHeroFlex
          desktop="https://res.cloudinary.com/dfiwfoxwx/video/upload/v1587334043/Case%20Study/hero-short-30.mp4"
          mobile="https://res.cloudinary.com/dfiwfoxwx/video/upload/v1587332132/Case%20Study/hero-mobile.mp4"
          DesktopScreenTop="5.5%"
          DesktopScreenMaskHeight="10vw"
          MobileDeviceTop="23%"
          MobileScreenTop="20%"
          MobileScreenMaskHeight="40vw"
         />


        <ProjectLink href={externalLink} label={externalLinkLabel}/>

        <TextSection>
        Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandi.
        </TextSection>

        <ImageSection src='artwork.png' caption='Artwork' folder={projectClass} />

        <TextSection>
        Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandi.
        </TextSection>

        <CarouselSectionSlim caption='Artwork'>
          <CarouselImage src="bg-tyler.jpg" folder={projectClass}/>
          <CarouselImage src="bg-gianni.jpg" folder={projectClass}/>
          <CarouselImage src="bg-hunter.jpg" folder={projectClass}/>
          <CarouselImage src="bg-kendra.jpg" folder={projectClass}/>
          <CarouselImage src="bg-culver.jpg" folder={projectClass}/>
          <CarouselImage src="bg-ooo.jpg" folder={projectClass}/>

        </CarouselSectionSlim>

        <Footer>
         <FooterSection title="Key Results">
           <Results p="Total Number of Impressions" b="232.4K" />
           <Results p="Total Number of Conversions" b="14.4K" />
           <Results p="Tickets Reserved" b="100%" />
           <Results p="Audience Demographics" b="25-34" />
         </FooterSection>
         <FooterSection title="Credits">
           <Credits left="Art Direction" right="Coach Creative Team" />
           <Credits left="Copywriting" right="Coach Creative Team" />
           <Credits left="Development" right="Coach Creative Team" />
           <Credits left="Artwork" right="Tyler Spangler" />
           <Credits left="" right="Anna Sudit" />
           <Credits left="" right="Gianni Lee" />
           <Credits left="" right="Kendra Dandy" />
           <Credits left="" right="Marleigh Culver" />
           <Credits left="" right="Robert Hunter" />
           <Credits left="" right="We Are Out of Office" />
         </FooterSection>
       </Footer>

      </ProjectWrapper>
  );
  }
}
