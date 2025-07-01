import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import ConsultationForm from "../../components/ConsultationForm/ConsultationForm";
import SolutionShowCase from "../../components/SolutionShowCase/SolutionShowCase";
import Services from "../../components/Services/Services";
import StudyComponent from "../../components/StudyComponent/StudyComponent";
import { Helmet } from "react-helmet";

const HomePage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-full">
      <Helmet>
        <meta charSet='utf-8' />
        <title>Pioneer Solutions</title>
      </Helmet>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <ConsultationForm />
        <SolutionShowCase />
        <Services />
        <StudyComponent />
      </div>
    </section>
  );
};

export default HomePage;
