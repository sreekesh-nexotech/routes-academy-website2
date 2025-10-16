

const CertificationSection: React.FC<{ img: string }> = ({ img }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 text-center" id="certificate">
    <h2 className="text-3xl font-poppins font-bold text-[#172554] mb-6">
      Certification By National Skill Development Council
    </h2>
    <div className="max-w-3xl mx-auto mb-6">
      <img
        src={img}
        alt="NSDC Certificate"
        width={700}
        height={500}
        className="mx-auto rounded-lg shadow-xl border border-gray-200"
      />
    </div>
    <p className="text-gray-600 max-w-4xl mx-auto">
      Upon successful completion, you will receive a verifiable certification recognized by the National
      Skill Development Council, significantly boosting your resume and career prospects across the
      industry.
    </p>
  </div>
);

export default CertificationSection;