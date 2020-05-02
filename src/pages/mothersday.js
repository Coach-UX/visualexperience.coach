import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSectionSlim, VideoSection } from '../components/Sections';
import { IntroSection } from "../components/Hero/Hero";
import { ScrollingHeroPhone } from "../components/Hero/ScrollingHero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Mother's Day AR",
    projectClass = "mothersday",
    projectYear = "2020",
    externalLink = "#",
    externalLinkLabel="Try the effect",

    nextProjectName="Rexy's Holiday Race",
    nextProjectClass="rexyrace",
    nextProjectLink="/rexyrace";



export default class Signature extends React.Component {
  componentDidMount() {
    document.title = "Coach Digital | " + projectName;
  }
  render() {
    return (
      <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} className="heroLaptop" >

        <IntroSection>
          In a world at stand still due to CoVid-19 we decided to see what innovative ways we could reach our digital audience and support a key seasonal event in the yearly calendar. Seeing an opportunity to bring some joy to our social audience and in turn allowing them to spread our message of joy we placed them center stage in our Instagram lens.
        </IntroSection>

        <ScrollingHeroPhone folder={projectClass}
          id="AR"
          src="img/mothersday/demo.mp4"
          Mobile_ScreenTop="20%"
          Mobile_MaskHeight="80vw"
         />

        <ProjectLink href={externalLink} label={externalLinkLabel}/>

        <TextSection>
        Focusing on the florals from the campaign, and harnessing the social discourse we decided to relegate any product placement from our content–enabling Coach to authentically spread this joyful experience.
        </TextSection>

        <VideoSection src="FlowerCrown.mp4" folder={projectClass} caption="Bespoke 3D render"/>

        <TextSection>
        Building off the existing campaign graphics, we built a bespoke 3D flower crown optimized for AR.
        </TextSection>

        <ImageSectionSlim src='jlo-2.jpg' caption='Campaign image' folder={projectClass} />

        <ImageSectionSlim src='flowers.svg' caption='Campaign motifs' folder={projectClass} />


        <Footer>
         <FooterSection title="Key Results">
           <Results p="Total Number of Impressions" b="232.4K" />
           <Results p="Total Number of Conversions" b="14.4K" />
         </FooterSection>
         <FooterSection title="Credits">
           <Credits left="Art Direction" right="Coach Creative Team" />
           <Credits left="Copywriting" right="Coach Creative Team" />
           <Credits left="Development" right="Coach Creative Team" />
           <Credits left="Illustration" right="Coach Creative Team" />
        </FooterSection>
       </Footer>

      </ProjectWrapper>
  );
  }
}
