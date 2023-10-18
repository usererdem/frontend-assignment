import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  batchScanAnimation,
  batchScanAnimation2,
  batchScanAnimation3,
  batchScanContainerAnimation,
  phoneAnimation,
} from "../animations";

export type PhoneFrameProps = {
  imageUrl: string;
  id: number;
};

const PhoneFrame: React.FC<PhoneFrameProps> = (props) => {
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
        className='relative flex flex-shrink-0 h-full'>
        <img className='h-full' src={props.imageUrl} alt='phone-image' />

        {props.id === 3 && (
          <>
            <motion.div
              id='batch-scan-container'
              className='overflow-hidden absolute left-0 top-0'
              variants={batchScanContainerAnimation}
              initial='hidden'
              animate='show'>
              <motion.div className='' variants={batchScanAnimation}>
                <img src='src/assets/images/FilePreview.png'></img>
              </motion.div>
              <motion.div variants={batchScanAnimation2}>
                <img src='src/assets/images/FilePreview.png'></img>
              </motion.div>
              <motion.div className='' variants={batchScanAnimation3}>
                <img src='src/assets/images/FilePreview.png'></img>
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
