const Statistics = () => {
  const stats = [
    { number: '90%', title: 'Placement' },
    { number: '344+', title: 'Students' },
    { number: '125+', title: '1:1 Mentoring' },
    { number: '40+', title: 'Hired in GCC' },
  ];

  return (
    <section className="bg-[#F1F5F9] py-20 px-20 flex flex-col items-center gap-[26px] w-full">
      {/* Section Heading */}
      <div className="flex flex-col gap-3 w-full">
        <h3 className="font-onest font-bold text-[32px] leading-[38px] tracking-[0.03125em] text-center bg-gradient-to-b from-[#0A1E4A] to-[#104EFF] bg-clip-text text-transparent">
          Our results in numbers
        </h3>
        <h2 className="font-onest font-semibold text-lg leading-[28px] text-[#404040] text-center">
          Real Lives, Real Transformations: Stories of Impact
        </h2>
      </div>

      {/* Statistics Grid */}
      <div className="flex justify-center items-center flex-wrap gap-[60px] w-full">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <p className="font-poppins font-semibold text-[48px] leading-[58px] tracking-[-0.0083em] text-[#1E293B] text-center">
              {stat.number}
            </p>
            <p className="font-onest font-medium text-[21px] leading-[30px] tracking-[-0.0071em] text-[#1E293B] text-center">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;