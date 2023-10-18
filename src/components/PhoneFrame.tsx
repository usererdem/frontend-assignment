import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  advancedFilterAnimation1,
  advancedFilterAnimation2,
  batchScanAnimation1,
  batchScanAnimation2,
  batchScanAnimation3,
  batchScanContainerAnimation,
  phoneAnimation,
} from "../animations";
import useIcons from "./Icons/use-icons";

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
  } = useIcons();
  const controls = useAnimationControls();

  const runAnimation = async () => {
    await controls.start("exit");
    await controls.start("hidden");
    controls.start("show");
  };

  useEffect(() => {
    runAnimation();
  }, [props.id]);

  return (
    <div className='flex justify-center w-full md:max-w-[50%] h-[280px] lg:h-[480px] mx-auto overflow-hidden'>
      <motion.div
        initial='hidden'
        animate={controls}
        exit='exit'
        variants={phoneAnimation}
        className='relative flex justify-center flex-shrink-0 h-full'>
        <img className='h-full' src={props.imageUrl} alt='phone-image' />

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
        {props.id === 4 && (
          <>
            <motion.div
              id='advanced-filter-container'
              className='overflow-hidden flex'
              variants={batchScanContainerAnimation}
              initial='hidden'
              animate='show'>
              <motion.div
                className='absolute -left-5 top-1/2 -translate-y-1/3'
                variants={advancedFilterAnimation1}>
                {window.innerWidth <= 768 ? (
                  <BrightnessSliderIconMobile />
                ) : (
                  <BrightnessSliderIcon />
                )}
              </motion.div>
              <motion.div
                className='absolute -right-5 top-1/2 -translate-y-1/3'
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

        {/* (
          switch(props.id){
            case 1:
              return (<></>)
            case 2:
            case 3:
            case 4:
            case 5:
            default:
          }
         ) */}
      </motion.div>
    </div>
  );
};

export default PhoneFrame;
