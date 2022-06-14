import React, { useEffect } from "react";
import { Card } from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import { MainContainer, Part1, Part2, Part3 } from "./HomeStyle";

const Home = () => {
  return (
    <MainContainer>
      <Part1 />
      <Part2>
        <p>Filmes Populares</p>
      </Part2>
      <Part3>
          <Card/>
      </Part3>
      <Footer/>
    </MainContainer>
  );
};

export default Home;
