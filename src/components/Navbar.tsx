// Navbar.js
import { useMemo } from "react";
import useIcons from "./Icons/use-icons";

type NavbarProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const Navbar: React.FC<NavbarProps> = ({ activeIndex, setActiveIndex }) => {
  const { DocumentScannerIcon } = useIcons();
  const { SignStampIcon } = useIcons();
  const { BatchScanningIcon } = useIcons();
  const { AdvancedFiltersIcon } = useIcons();
  const { ExportShareIcon } = useIcons();
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

  return (
    <nav className='overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide snap-x snap-mandatory scroll-smooth flex justify-center'>
      <ul className='flex whitespace-nowrap font-semibold '>
        {contents.map((content, i) => (
          <button onClick={() => setActiveIndex(i)}>
            <li
              className={`py-6 px-4 text-lg transition-colors duration-500 flex items-center justify-center gap-4 md:py-8 md:px-14 ${
                activeIndex === i && "bg-primary-iconbackground"
              } ${
                i === 0
                  ? "snap-start border-r"
                  : i === contents.length - 1
                  ? "snap-end"
                  : "snap-center border-r"
              }`}>
              <div
                className={`rounded-full border  p-3 ${
                  activeIndex === i
                    ? "border-primary-border"
                    : "border-primary-borderInactive"
                }`}>
                {content.icon(activeIndex === i ? "#0582ff" : "#333")}
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
