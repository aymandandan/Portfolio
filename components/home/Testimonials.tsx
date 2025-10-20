import React from "react";

const testimonials = [
  {
    quote:
      "Working with Ayman was an absolute pleasure. His attention to detail and problem-solving skills are exceptional.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    quote:
      "The website Ayman built for us exceeded our expectations. He delivered on time and within budget.",
    author: "Michael Chen",
    role: "Founder, DesignHub",
  },
  {
    quote:
      "A true professional who understands both design and development. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Marketing Director, BrandMasters",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take my word for it - hear what my clients have to
            say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
