import Prismic from "prismic-javascript";

import Name from "@components/Name";
import Head from "@components/Head";
import Menu from "@components/Menu";
import Button from "@components/Button";
import LeftContainer from "@components/LeftContainer";
import RightContainer from "@components/RightContainer";

import styles from "./styles.scss";

const Projects = props => (
  <div>
    <LeftContainer>
      <Head title="Ross Waycaster" />
      <Menu />
      <Name data={props.homeData} />
    </LeftContainer>
    <RightContainer />
  </div>
);

//Async get data from Prismic
Projects.getInitialProps = async () => {
  const apiEndpoint = "https://rosswaycaster.cdn.prismic.io/api/v2";
  const api = await Prismic.api(apiEndpoint);

  const homeData = await api.query(
    Prismic.Predicates.at("document.type", "home")
  );

  return {
    homeData: homeData.results[0].data
  };
};

export default Projects;
