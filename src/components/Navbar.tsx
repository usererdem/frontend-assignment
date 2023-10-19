// Navbar.js
import { useMemo } from "react";
import useIcons from "./Icons/use-icons";
import { useAtomValue } from "jotai";
import { controlsAtom } from "../state/atom";
import { AnimatePresence } from "framer-motion";

type NavbarProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const Navbar: React.FC<NavbarProps> = ({ activeIndex, setActiveIndex }) => {
  const {
    DocumentScannerIcon,
    SignStampIcon,
    BatchScanningIcon,
    AdvancedFiltersIcon,
    ExportShareIcon,
    BorderSvg,
    ActiveBorderSvg,
  } = useIcons();
  const contents = useMemo(
    () => [
      {
        label: "Document Scanner",
        icon: (color: string) => <DocumentScannerIcon fill={color} />,
      },
      {
        label: "Sign & Stamp",
        icon: (color: string) => <SignStampIcon fill={color} />,
      },
      {
        label: "Batch Scanning",
        icon: (color: string) => <BatchScanningIcon fill={color} />,
      },
      {
        label: "Advanced Filters",
        icon: (color: string) => <AdvancedFiltersIcon fill={color} />,
      },
      {
        label: "Export & Share",
        icon: (color: string) => <ExportShareIcon fill={color} />,
      },
    ],
    [
      DocumentScannerIcon,
      SignStampIcon,
      BatchScanningIcon,
      AdvancedFiltersIcon,
      ExportShareIcon,
    ]
  );

  const controls = useAtomValue(controlsAtom);

  const handleButtonClick = async (index: number) => {
    // navbar index change
    await controls?.start("exit");
    setActiveIndex(index);
    await controls?.start("hidden");
    controls?.start("show");
  };

  return (
    <nav className='overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide snap-x snap-mandatory scroll-smooth flex justify-center'>
      <ul className='flex whitespace-nowrap font-semibold w-full md:justify-center'>
        {contents.map((content, i) => (
          <button onClick={() => handleButtonClick(i)} key={"nav-button-" + i}>
            <li
              className={`py-8 pr-8 pl-20 text-lg transition-colors duration-500 flex items-center justify-center gap-4 md:pr-14 md:pl-24 ${
                activeIndex === i && "bg-primary-iconbackground"
              } ${
                i === 0
                  ? "snap-start border-r"
                  : i === contents.length - 1
                  ? "snap-end"
                  : "snap-center border-r"
              }`}>
              <div className='relative'>
                <div className='absolute -left-6 top-0  -translate-x-1/2 -translate-y-1/2 z-50'>
                  {content.icon(activeIndex === i ? "#0582ff" : "#666666")}
                </div>
                <div className='absolute -left-6 top-0 -translate-x-1/2 -translate-y-1/2'>
                  <BorderSvg />
                </div>
                <AnimatePresence>
                  {activeIndex === i && (
                    <div className='transform -rotate-90 absolute -left-6 top-0 -translate-x-1/2 -translate-y-1/2'>
                      <ActiveBorderSvg key={"active-border-" + i} />
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {content.label}
            </li>
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
