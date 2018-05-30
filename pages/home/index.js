import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

import moment from "moment";

import Head from "@components/Head";
import Menu from "@components/Menu";
import Bio from "@components/Bio";
import LeftContainer from "@components/LeftContainer";
import RightContainer from "@components/RightContainer";

import styles from "./styles.scss";

const Home = props => (
  <div className={styles.home}>
    <LeftContainer>
      <Head title="Ross Waycaster" />
      <Menu />
      <Bio data={props.homeData} />
    </LeftContainer>
    <RightContainer />
  </div>
);

//Async get data from Prismic
Home.getInitialProps = async () => {
  const apiEndpoint = "https://rosswaycaster.cdn.prismic.io/api/v2";
  const api = await Prismic.api(apiEndpoint);

  const homeData = await api.query(
    Prismic.Predicates.at("document.type", "home")
  );

  //Calculate age
  const age = moment().diff("1991-09-08", "years");

  //Replace [age] in bio with my actual age
  homeData.results[0].data.bio[0].text = homeData.results[0].data.bio[0].text.replace(
    "[age]",
    age
  );

  return { homeData: homeData.results[0].data };
};

export default Home;
