const stats = [
  {
    id: 1,
    name: "We uphold international standards, ensuring top-notch quality",
    value: "Certified Excellence",
  },
  {
    id: 2,
    name: "Recognized as a premier consulting service provider globally",
    value: "Industry Leader",
  },
  {
    id: 3,
    name: "99% customer retention rate speaks volumes about our commitment.",
    value: "Customer-Centric Approach",
  },
  { id: 4, name: "Clients Served", value: "46,000+" },
  { id: 5, name: "Projects Delivered", value: "46,000+" },
  { id: 6, name: "Happy Customers", value: "46,000+" },
];

const Why = () => {
  return (
    <div className="bg-[#a4b2f9] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-gray-900 mb-10">
            Why Businesses Choose Yam Consulting Service
          </h2>
          <h3 className="text-lg sm:text-xl font-light text-gray-900 underline ">
            Contact Sales to request a demo
          </h3>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-sm flex-col gap-y-4 text-center"
            >
              <dd className="order-first text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                {stat.value}
              </dd>
              <dt className="text-sm sm:text-base font-light text-gray-700">
                {stat.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Why;
