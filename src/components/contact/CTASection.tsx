
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Quote?</h2>
        <p className="text-xl mb-8">
          Skip straight to our detailed quote request form for faster service.
        </p>
        <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 hover:text-orange-600">
          Request a Custom Quote
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
