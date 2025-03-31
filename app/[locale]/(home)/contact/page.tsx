"use client";
import PageContainer from "@/components/containers/page-container";
import ContactForm from "@/components/core/contact/contact-form";
import { CardContent } from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("@/components/core/contact/contact-map"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

const ContactMePage = () => {
  return (
    <PageContainer title={"contact:section.map"}>
      <CardContent>
        <div className="h-[20rem] w-full">
          <LeafletMap posix={[23.1136, -82.3666]} zoom={12} />
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
