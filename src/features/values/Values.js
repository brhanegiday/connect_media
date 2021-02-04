import { Container } from "@material-ui/core";
import Banner from "components/values/Banner";
import LastSection from "components/values/LastSection";
import Section1 from "components/values/Section1";
import Section3 from "components/values/Section3";
import Section4 from "components/values/Section4";
import StepperSection from "components/values/StepperSection";
import React from "react";

function Values() {
  return (
    <>
      <Banner />
      <Section1 />
      <StepperSection />
      <Section3 />
      <Section4 />
      <LastSection />
    </>
  );
}

export default Values;
