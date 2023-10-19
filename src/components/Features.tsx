import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroContent from "../components/HeroContent";
import PhoneFrame from "./PhoneFrame";
import { FeatureContent } from "../models/feature";
import { useAtom } from "jotai";
import { controlsAtom } from "../state/atom";
import { useAnimationControls } from "framer-motion";

const contents: FeatureContent[] = [
  {
    id: 1,
    name: "Document Scanner",
    title: "Scan with Ease",
    description:
      "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.",
    imageUrl: "src/assets/images/documentScanner.png",
  },

  {
    id: 2,
    name: "SIGN & STAMP",
    title: "One-Tap Focus",
    description:
      "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!",
    imageUrl: "src/assets/images/signStamp.png",
  },
  {
    id: 3,
    name: "BATCH SCANNING",
    title: "Multiple Page Scan",
    description:
      "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.",
    imageUrl: "src/assets/images/batchScan.png",
  },
  {
    id: 4,
    name: "ADVANCED FILTERS",
    title: "Unique Filters",
    description:
      "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.",
    imageUrl: "src/assets/images/advancedFilters.png",
  },
  {
    id: 5,
    name: "EXPORT & SHARE",
    title: "All-Round Conversion",
    description: "Export your scans as PDF,JPG,ZIP,TXT and Word.",
    imageUrl: "src/assets/images/exportShare.png",
  },
];

const Features = () => {
  const globalControls = useAnimationControls();
  const [activeIndex, setActiveIndex] = useState(0);
  const [controls, setControls] = useAtom(controlsAtom);

  useEffect(() => {
    setControls(globalControls);
  });
  useEffect(() => {
    controls?.start("show");
  }, [controls]);

  return (
    <>
      <div className='flex flex-col justify-end max-w-[1440px] pt-16 px-6 md:pt-32 md:px-16 lg:px-32 md:flex-row-reverse md:mx-auto md:justify-center md:items-start md:text-right '>
        <HeroContent
          name={contents[activeIndex].name}
          title={contents[activeIndex].title}
          description={contents[activeIndex].description}
        />
        <PhoneFrame
          imageUrl={contents[activeIndex].imageUrl}
          id={contents[activeIndex].id}
        />
      </div>
      <Navbar setActiveIndex={setActiveIndex} />
    </>
  );
};

export default Features;
