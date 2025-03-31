"use client";
import PageContainer from "@/components/containers/page-container";
import ContactForm from "@/components/core/contact/contact-form";
import ContactMap from "@/components/core/contact/contact-map";
import { CardContent } from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";

const ContactMePage = () => {
  return (
    <PageContainer title={"contact:section.map"}>
      <CardContent>
        <div className="h-[20rem] w-full">
          <ContactMap posix={[23.1136, -82.3666]} zoom={12} />
        </div>
      </CardContent>

      <section className="mt-4 md:mt-8">
        <PageHeader
          variant="compuse"
          title={"contact:section.form"}
          className="fade-line-bottom"
        />
        <CardContent id="form">
          <ContactForm />
        </CardContent>
      </section>
    </PageContainer>
  );
};

export default ContactMePage;
