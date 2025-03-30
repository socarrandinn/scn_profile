"use client";
import PageContainer from "@/components/containers/page-container";
import Contact from "@/components/core/contact/contact";
import { CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <PageContainer title={"about-me:title"}>
      <CardContent>
        <Contact />
      </CardContent>
    </PageContainer>
  );
};

export default AboutMe;
