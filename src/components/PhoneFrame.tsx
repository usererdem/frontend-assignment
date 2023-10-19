import { motion } from "framer-motion";
import {
  advancedFilterAnimation1,
  advancedFilterAnimation2,
  batchScanAnimation1,
  batchScanAnimation2,
  batchScanAnimation3,
  phoneAnimation,
  ArrowIconAnimation,
  exportShareAnimation1,
  exportShareAnimation2,
  exportShareAnimation3,
  signStampAnimation1,
  signStampAnimation2,
  batchScanMobileAnimation1,
  batchScanMobileAnimation2,
  batchScanMobileAnimation3,
} from "../animations";
import useIcons from "./Icons/use-icons";
import { useAtomValue } from "jotai";
import { controlsAtom } from "../state/atom";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../constants/breakpoints";

export type PhoneFrameProps = {
  imageUrl: string;
  id: number;
};

const PhoneFrame: React.FC<PhoneFrameProps> = (props) => {
  const {
    BrightnessSliderIcon,
    BrightnessSliderIconMobile,
    ContrastSliderIcon,
    ContrastSliderIconMobile,
    PdfDocumentIcon,
    TxtDocumentIcon,
    JpgDocumentIcon,
    ArrowIcon,
  } = useIcons();

  const controls = useAtomValue(controlsAtom);
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  return (
    <div className='flex justify-center w-full md:max-w-[50%] h-[280px] lg:h-[480px] mx-auto overflow-hidden'>
      <motion.div
        initial='hidden'
        animate={controls}
        exit='exit'
        variants={phoneAnimation}
        className='relative flex justify-center flex-shrink-0 h-full'>
        <img className='h-full' src={props.imageUrl} alt='phone-image' />

        {/* SIGN AND STAMP */}
        {props.id === 2 && (
          <>
            <motion.div>
              <motion.div
                variants={signStampAnimation1}
                className=' -left-16 top-1/2 absolute lg:-left-24'>
                {breakpoint === "mobile" ? (
                  <img src='src/assets/images/SignStampiconMobile.png'></img>
                ) : breakpoint === "tablet" ? (
                  <img src='src/assets/images/SignStampiconMobile.png'></img>
                ) : (
                  <img src='src/assets/images/SignStampicon.png'></img>
                )}
              </motion.div>
              <motion.div
                variants={signStampAnimation2}
                className='absolute -right-16 top-1/3 lg:-right-[92px]'>
                {breakpoint === "mobile" ? (
                  <img src='src/assets/images/SignStampiconMobile2.png'></img>
                ) : breakpoint === "tablet" ? (
                  <img src='src/assets/images/SignStampiconMobile2.png'></img>
                ) : (
                  <img src='src/assets/images/SignStampicon2.png'></img>
                )}
              </motion.div>
            </motion.div>
          </>
        )}

        {/* BATCH SCAN */}
        {props.id === 3 && (
          <>
            <div id='batch-scan-container' className='overflow-hidden absolute z-50'>
              <motion.div
                variants={
                  breakpoint === "mobile"
                    ? batchScanMobileAnimation1
                    : breakpoint === "tablet"
                    ? batchScanMobileAnimation1
                    : batchScanAnimation1
                }>
                <img src='src/assets/images/FilePreview.png'></img>
              </motion.div>
              <motion.div
                variants={
                  breakpoint === "mobile"
                    ? batchScanMobileAnimation2
                    : breakpoint === "tablet"
                    ? batchScanMobileAnimation2
                    : batchScanAnimation2
                }>
                <img src='src/assets/images/FilePreview.png'></img>
              </motion.div>
              <motion.div
                variants={
                  breakpoint === "mobile"
                    ? batchScanMobileAnimation3
                    : breakpoint === "tablet"
                    ? batchScanMobileAnimation3
                    : batchScanAnimation3
                }>
                <img src='src/assets/images/FilePreview.png'></img>
              </motion.div>
            </div>
          </>
        )}

        {/* ADVANCED FILTER */}
        {props.id === 4 && (
          <>
            <div
              id='advanced-filter-container'
              className='overflow-hidden flex'>
              <motion.div
                className='absolute -left-5 top-1/2 -translate-y-[36%] z-50'
                variants={advancedFilterAnimation1}>
                {breakpoint === "mobile" ? (
                  <BrightnessSliderIconMobile />
                ) : breakpoint === "tablet" ? (
                  <BrightnessSliderIconMobile />
                ) : (
                  <BrightnessSliderIcon />
                )}
              </motion.div>
              <motion.div
                className='absolute -right-5 top-1/2 -translate-y-[36%]'
                variants={advancedFilterAnimation2}>
                {breakpoint === "mobile" ? (
                  <ContrastSliderIconMobile />
                ) : breakpoint === "tablet" ? (
                  <ContrastSliderIconMobile />
                ) : (
                  <ContrastSliderIcon />
                )}
              </motion.div>
            </div>
          </>
        )}

        {/* EXPORT AND SHARE */}
        {props.id === 5 && (
          <>
            <div
              id='export-and-share-container'
              className='overflow-hidden flex'>
              <motion.div
                className='absolute -left-6 bottom-2 w-[14px] lg:w-5'
                variants={ArrowIconAnimation}>
                <ArrowIcon />
              </motion.div>
              <motion.div
                className='absolute -left-8 bottom-0 w-[104px] lg:w-40'
                variants={exportShareAnimation1}>
                <PdfDocumentIcon />
              </motion.div>
              <motion.div
                className='absolute left-[60%] bottom-0 md:bottom-2 w-[82px] lg:left-[50%] lg:w-32'
                variants={exportShareAnimation2}>
                <JpgDocumentIcon />
              </motion.div>
              <motion.div
                className='absolute -right-8 bottom-0 w-[94px] lg:w-[9.5rem]'
                variants={exportShareAnimation3}>
                <TxtDocumentIcon />
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PhoneFrame;
