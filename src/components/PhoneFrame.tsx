import { motion } from "framer-motion";
import {
  advancedFilterAnimation1,
  advancedFilterAnimation2,
  batchScanAnimation1,
  batchScanAnimation2,
  batchScanAnimation3,
  batchScanContainerAnimation,
  phoneAnimation,
  ArrowIconAnimation,
  exportShareAnimation1,
  exportShareAnimation2,
  exportShareAnimation3,
  signStampAnimation1,
  signStampAnimation2,
} from "../animations";
import useIcons from "./Icons/use-icons";
import { useAtomValue } from "jotai";
import { controlsAtom } from "../state/atom";

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
                className=' -left-16 top-1/2 absolute md:-left-24'>
                {window.innerWidth <= 768 ? (
                  <img src='src/assets/images/SignStampiconMobile.png'></img>
                ) : (
                  <img src='src/assets/images/SignStampicon.png'></img>
                )}
              </motion.div>
              <motion.div
                variants={signStampAnimation2}
                className='absolute -right-16 top-1/3 md:-right-[92px]'>
                {window.innerWidth <= 768 ? (
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
            <motion.div
              id='batch-scan-container'
              className='overflow-hidden absolute'
              variants={batchScanContainerAnimation}
              initial='hidden'
              animate='show'>
              <motion.div variants={batchScanAnimation1}>
                <img src='src/assets/images/FilePreview.png'></img>
              </motion.div>
              <motion.div variants={batchScanAnimation2}>
                <img src='src/assets/images/FilePreview.png'></img>
              </motion.div>
              <motion.div variants={batchScanAnimation3}>
                <img src='src/assets/images/FilePreview.png'></img>
              </motion.div>
            </motion.div>
          </>
        )}

        {/* ADVANCED FILTER */}
        {props.id === 4 && (
          <>
            <motion.div
              id='advanced-filter-container'
              className='overflow-hidden flex'
              variants={batchScanContainerAnimation}
              initial='hidden'
              animate='show'>
              <motion.div
                className='absolute -left-5 top-1/2 -translate-y-[36%]'
                variants={advancedFilterAnimation1}>
                {window.innerWidth <= 768 ? (
                  <BrightnessSliderIconMobile />
                ) : (
                  <BrightnessSliderIcon />
                )}
              </motion.div>
              <motion.div
                className='absolute -right-5 top-1/2 -translate-y-[36%]'
                variants={advancedFilterAnimation2}>
                {window.innerWidth <= 768 ? (
                  <ContrastSliderIconMobile />
                ) : (
                  <ContrastSliderIcon />
                )}
              </motion.div>
            </motion.div>
          </>
        )}

        {/* EXPORT AND SHARE */}
        {props.id === 5 && (
          <>
            <motion.div
              id='export-and-share-container'
              className='overflow-hidden flex'
              variants={batchScanContainerAnimation}
              initial='hidden'
              animate='show'>
              <motion.div
                className='absolute -left-6 bottom-2 w-[14px] md:w-5'
                variants={ArrowIconAnimation}>
                <ArrowIcon />
              </motion.div>
              <motion.div
                className='absolute -left-8 bottom-0 w-[104px] md:w-40'
                variants={exportShareAnimation1}>
                <PdfDocumentIcon />
              </motion.div>
              <motion.div
                className='absolute left-[60%] md:left-[50%] bottom-0 md:bottom-2  w-[82px] md:w-32'
                variants={exportShareAnimation2}>
                <JpgDocumentIcon />
              </motion.div>
              <motion.div
                className='absolute -right-8 bottom-0 w-[94px] md:w-[9.5rem]'
                variants={exportShareAnimation3}>
                <TxtDocumentIcon />
              </motion.div>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PhoneFrame;
