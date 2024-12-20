const stats = [
  {
    id: 1,
    name: "ISO-27001 enterprise-grade security compliant",
    value: "ISO",
  },
  { id: 2, name: "Visual Collaboration Platform on G2", value: "#1" },
  { id: 3, name: "of the Fortune 100 are customers", value: "99%" },
  { id: 4, name: "New users annually", value: "46,000" },
  { id: 5, name: "New users annually", value: "46,000" },
  { id: 6, name: "New users annually", value: "46,000" },
];

const Why = () => {
  return (
    <div className="bg-[#FFD02F] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="w-1/2 text-[48px] font-bold text-gray-900 text-center justify-center mb-1">
            Why companies large and small trust Miros
          </h2>
          <h3 className="text-xl font-light text-gray-900 text-center mb-12 underline">
            Contact Sales to request a demo
          </h3>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-secondary">{stat.name}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Why;
