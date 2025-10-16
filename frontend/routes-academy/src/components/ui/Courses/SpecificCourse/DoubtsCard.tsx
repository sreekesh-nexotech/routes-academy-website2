import Link from "next/link";

const DoubtsCard: React.FC = () => (
  <div className="bg-[#D4DEFB4D] text-center rounded-2xl  p-6  mt-8">
    <p className="text-sm text-[#091029]">NEED ANY HELP ?</p>
    <h4 className="text-xl font-semibold text-[#1A1A1A] mb-3">Had any Confusion ?</h4>
    <p className="text-sm text-gray-600 mb-4">
      We have a dedicated team ready for clearing your course related confusions
    </p>
    <Link
      href="#course-contact"
      className="cursor-pointer px-10 w-full py-3 rounded-full font-medium text-[1rem] text-[#FFFFFF] bg-[#172554] hover:bg-[#22387e] transition-all duration-300 "
    >
      Start a 5 Min Call
    </Link>
  </div>
);

export default DoubtsCard;