import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselImage, CarouselSectionSlim, CarouselSection } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection } from '../components/Sections';
import { IntroSection } from "../components/Hero/Hero";
import { ScrollingHeroiframe } from "../components/Hero/ScrollingHero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Art of Signature",
    projectClass = "signature",
    projectYear = "2019",
    externalLink = "https://art-of-signature.web.app",
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
            Desktop_ScreenTop="-24%"
            Desktop_MaskHeight="16vw"
            Portrait_ScreenTop="-48%"
            Portrait_MaskHeight="10vw"
            Mobile_ScreenTop="-23%"
            Mobile_MaskHeight="35vh"
           />



        <ProjectLink href={externalLink} label={externalLinkLabel}/>

        <TextSection>
          The artwork was created by a mix of talented artists from around the globe– each chosen for their playful, optimistic attitude. The artists were tasked with bringing a playful contrast to our iconic signature pattern by infusing it with their own personal style and perspective.
        </TextSection>

        <ImageSection src='artwork.png' caption='Artwork' folder={projectClass} />

        <CarouselSectionSlim caption='Artwork'>
          <CarouselImage src="bg-tyler.jpg" folder={projectClass}/>
          <CarouselImage src="bg-gianni.jpg" folder={projectClass}/>
          <CarouselImage src="bg-hunter.jpg" folder={projectClass}/>
          <CarouselImage src="bg-kendra.jpg" folder={projectClass}/>
          <CarouselImage src="bg-culver.jpg" folder={projectClass}/>
          <CarouselImage src="bg-ooo.jpg" folder={projectClass}/>
        </CarouselSectionSlim>

        <TextSection>
          The pop-up at Hudson Yards allowed customers to meet the artists, play with customization and shop the collection.
        </TextSection>

        <CarouselSectionSlim caption='Hudson Yards pop-up space'>
          <CarouselImage src="carousel1.jpg" folder={projectClass}/>
          <CarouselImage src="carousel2.jpg" folder={projectClass}/>
          <CarouselImage src="carousel3.jpg" folder={projectClass}/>
        </CarouselSectionSlim>


        <Footer>
         {/*<FooterSection title="Key Results">
           <Results p="Total Number of Impressions" b="000" />
         </FooterSection>*/}
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
