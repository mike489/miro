// import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      title: "Free forever",
      description:
        "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "John Doe",
      role: "Team Lead",
    },
    {
      title: "Easy integrations",
      description:
        "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Jane Smith",
      role: "Product Manager",
    },
    {
      title: "Security first",
      description:
        "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Alice Johnson",
      role: "Security Analyst",
    },
  ];

  return (
    <article className="py-16 px-4 md:px-8 lg:px-[8%]">
      <div className="text-center mb-12 mx-auto max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary">
          Loved by the world&apos;s best teams
        </h1>
        <button className="border border-primary p-3 rounded-full text-primary font-medium px-8 mt-8">
          See all customer stories →
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6  flex flex-col justify-between"
          >
            <div>
              <h1 className="text-lg md:text-xl font-bold text-secondary mb-4">
                {testimonial.title}
              </h1>
              <p className="text-gray-700">{testimonial.description}</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-sm md:text-base font-semibold text-gray-900">
                  {testimonial.name}
                </h2>
                <p className="text-xs md:text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section
        className="text-white flex flex-col items-center justify-center gap-6 rounded-3xl p-6 md:p-12"
        style={{
          backgroundColor: "#050038",
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Join 45M+ users today
          </h1>
          <p className="text-sm md:text-base">
            Start for free — upgrade anytime.
          </p>
          <p className="text-sm md:text-base underline">
            Joining as an organization? Contact Sales
          </p>
        </div>
        <button className="bg-primary p-3 rounded-full text-white font-medium px-8">
          Sign Up free →
        </button>
      </section>
    </article>
  );
};

export default Testimonial;
