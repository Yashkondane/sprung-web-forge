
import Layout from "@/components/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import DepartmentGrid from "@/components/contact/DepartmentGrid";
import MapSection from "@/components/contact/MapSection";
import CTASection from "@/components/contact/CTASection";

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      
      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>

      <DepartmentGrid />
      <MapSection />
      <CTASection />
    </Layout>
  );
};

export default Contact;
