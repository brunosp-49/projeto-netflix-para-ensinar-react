import React from "react";
import { Card } from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import { MainContainer, Part1, Part2, Part3, Grid } from "./HomeStyle";

const Home = () => {
  return (
    <MainContainer>
      <Part1 />
      <Part2>
        <p>Filmes Populares</p>
      </Part2>
      <Part3>
        <Grid>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Grid>
      </Part3>
      <Footer/>
    </MainContainer>
  );
};

export default Home;
