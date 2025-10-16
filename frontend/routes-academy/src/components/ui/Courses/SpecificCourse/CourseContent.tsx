"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Course } from "../CourseData";
import { useState } from "react";

const CourseContentSection: React.FC<{ curriculum: Course["curriculum_detailed"] }> = ({ curriculum }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#F8FAFF] rounded-2xl p-3 py-5  md:p-8 scroll-mt-30 " id="modules">
            <h2 className="text-3xl font-poppins font-semibold text-[#172554] mb-6">Course Content</h2>
            <div className="space-y-4">
                {curriculum.map((item, i) => (
                    <div
                        key={i}
                        className=" border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md"
                    >
                        <button
                            onClick={() => toggleDropdown(i)}
                            className="flex justify-between items-center w-full p-4 sm:p-6 cursor-pointer transition-colors duration-200 text-left"
                            style={{ backgroundColor: openIndex === i ? '#eef2ff' : 'white' }}
                        >
                            <div className="flex items-center space-x-3">
                                <span
                                    className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${
                                        openIndex === i ? 'text-indigo-700' : 'text-gray-800'
                                    }`}
                                >
                                    {item.topic}
                                </span>
                            </div>
                            {openIndex === i ? (
                                <ChevronDown className="w-5 h-5 text-indigo-600 transform transition-transform duration-300" />
                            ) : (
                                <ChevronRight className="w-5 h-5 text-gray-500 transform transition-transform duration-300" />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                openIndex === i ? 'max-h-[500px] opacity-100 pt-4' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-4 pt-0 sm:p-6 sm:pt-0 bg-white border-t border-gray-100">
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                                     {item.details}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseContentSection;