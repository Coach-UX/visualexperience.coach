import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselImage, CarouselSectionSlim } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection } from '../components/Sections';
import { IntroSection } from "../components/Hero/Hero";
import { ScrollingHeroiframe } from "../components/Hero/ScrollingHero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Art of Signature",
    projectClass = "signature",
    projectYear = "2019",
    externalLink = "#",
    externalLinkLabel="Launch the Site",

    nextProjectName='Isetan "The Stage"',
    nextProjectClass="isetan",
    nextProjectLink="/isetan";


export default class Signature extends React.Component {
  componentDidMount() {
    document.title = "Coach Digital | " + projectName;
  }
  render() {
    return (
      <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} className="heroLaptop" >

        <IntroSection>
          To help promote the "Art of Signature" Pop-up at Hudson Yards, we were tasked with creating something that could bring life to the website and accentuate the amazing artwork that the event was centered around. Using a rigid body physics engine, we created a moment of play within the site that allowed users to engage with the artwork in a simple yet satisfying and unexpected way.
        </IntroSection>


          <ScrollingHeroiframe
            src="https://art-of-signature.web.app"
            Desktop_ScreenTop="-21%"
            Desktop_MaskHeight="16vw"
            Mobile_MaskHeight="35vh"
            Mobile_ScreenTop="-20%"
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
         </FooterSection>
         <FooterSection title="Credits">
           <Credits left="Art Direction" right="Coach Creative Team" />
           <Credits left="Copywriting" right="Coach Creative Team" />
           <Credits left="Development" right="Coach Creative Team" />
           <Credits left="Illustration" right="Tyler Spangler" />
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
