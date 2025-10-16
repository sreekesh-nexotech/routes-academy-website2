/* frontend/routes-academy/src/components/ui/Courses/SpecificCourse/StickyTabs.tsx */
import Link from "next/link";
import React, { useState } from "react";

const StickyTabs: React.FC = () => {
  const tabs = [
    { label: "Overview", href: "#overview" },
    { label: "Modules", href: "#modules" },
    { label: "Features", href: "#features" },
    { label: "Faculty", href: "#faculty" },
    { label: "Certificate", href: "#certificate" },
    { label: "Review", href: "#review" },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const baseWrapperClasses = "pt-6 mb-8 lg:mb-10";
  const tabsContainerClasses = "flex flex-wrap gap-2 p-3 bg-white rounded-xl shadow-lg border border-gray-100 max-w-full";

  return (
    <div className={ baseWrapperClasses}>
      <div >
        <div className={tabsContainerClasses}>
          {tabs.map((tab, index) => {
            const isActive = index === activeTabIndex;
            return (
              <Link
                key={tab.label}
                href={tab.href}
                onClick={() => setActiveTabIndex(index)}
                className={`
                  px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-200 ease-in-out 
                  flex-shrink-0
                  ${isActive ? "bg-[#104EFF] text-white shadow-md" : "text-gray-700 hover:bg-gray-50 hover:text-[#104EFF]"}
                `}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StickyTabs;