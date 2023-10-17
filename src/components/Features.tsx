import phone from "../assets/images/documentScanner.png";
import HeroContent, { HeroContentProps } from "../components/HeroContent";
import { useState } from "react";
import Navbar from "./Navbar";

const contents: HeroContentProps[] = [
  {
    name: "Document Scanner",
    title: "Scan with Ease",
    description:
      "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.",
  },
  {
    name: "SIGN & STAMP",
    title: "One-Tap Focus",
    description:
      "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!",
  },
  {
    name: "BATCH SCANNING",
    title: "Multiple Page Scan",
    description:
      "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.",
  },
  {
    name: "ADVANCED FILTERS",
    title: "Unique Filters",
    description:
      "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.",
  },
  {
    name: "EXPORT & SHARE",
    title: "All-Round Conversion",
    description: "Export your scans as PDF,JPG,ZIP,TXT and Word.",
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className='flex flex-col justify-end max-w-[1440px] pt-16 px-6 md:pt-32 md:px-16 lg:px-32 md:flex-row-reverse md:justify-center md:items-start md:text-right '>
        <HeroContent
          name={contents[activeIndex].name}
          title={contents[activeIndex].title}
          description={contents[activeIndex].description}
        />
        <div className='flex justify-center w-full md:max-w-[50%] h-[280px] lg:h-[480px] mx-auto'>
          <div className='relative flex flex-shrink-0 h-full'>
            <img className='h-full' src={phone} alt='' />
          </div>
        </div>
      </div>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </>
  );
};

export default Features;
