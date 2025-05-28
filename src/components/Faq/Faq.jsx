import React from "react";

const FaqSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://png.pngtree.com/png-vector/20190804/ourmid/pngtree-subscription-model-subscription-model-digital-abstract-circle-png-image_1650388.jpg"
            alt="FAQ Illustration"
            className=""
          />
        </div>

        {/* Right: Accordion */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
              <summary className="cursor-pointer text-lg font-medium text-indigo-600">
                What is a subscription service?
              </summary>
              <p className="mt-2 text-gray-600">
                A subscription service provides recurring access to premium
                tools or content for a fee.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
              <summary className="cursor-pointer text-lg font-medium text-indigo-600">
                Can I cancel my subscription anytime?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, you can cancel at any time through your account settings
                without any hidden fees.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
              <summary className="cursor-pointer text-lg font-medium text-indigo-600">
                Is customer support available 24/7?
              </summary>
              <p className="mt-2 text-gray-600">
                Absolutely! Our support team is available around the clock to
                assist you.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
              <summary className="cursor-pointer text-lg font-medium text-indigo-600">
                Do you offer student or non-profit discounts?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we offer special discounts for students and non-profits.
                Contact our support team to verify your eligibility.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
              <summary className="cursor-pointer text-lg font-medium text-indigo-600">
                How secure is my data?
              </summary>
              <p className="mt-2 text-gray-600">
                Your data is protected with industry-standard encryption and
                regular security audits to ensure maximum protection.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
              <summary className="cursor-pointer text-lg font-medium text-indigo-600">
                Can I switch plans later?
              </summary>
              <p className="mt-2 text-gray-600">
                Absolutely. You can upgrade or downgrade your subscription plan
                anytime based on your needs.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
