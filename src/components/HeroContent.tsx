import { motion, useAnimationControls } from "framer-motion";
import { contentAnimation } from "../animations";
import { useEffect } from "react";

export type HeroContentProps = {
  name: string;
  title: string;
  description: string;
};

const HeroContent: React.FC<HeroContentProps> = (props) => {
  const controls = useAnimationControls();

  const runAnimation = async () => {
    await controls.start("exit");
    await controls.start("hidden");
    controls.start("show");
  };

  useEffect(() => {
    runAnimation();
  }, [props.name]);
  return (
    <motion.div initial='hidden' animate={controls} exit='exit' variants={contentAnimation} className='mb-11 lg:mt-12 lg:ml-20 flex flex-col flex-grow justify-between min-h-[300px]'>
      <div className="text-center md:text-right">
        <h1 className='text-primary font-bold uppercase mb-4 tracking-widest break-words'>
          {props.name}
        </h1>
        <h1 className='text-3xl font-bold mb-5 md:mb-8 break-words'>{props.title}</h1>
        <p className='text-base leading-7 mb-4 md:leading-8 md:mb-8 md:text-lg break-words max-w-[600px] mx-auto md:ml-auto min-h-[5.25rem]'>{props.description}</p>
      </div>

      <div className='flex justify-center md:justify-end'>
        <button className='flex justify-center items-center px-5 py-[15px] cursor-pointer text-dark border font-semibold'>
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default HeroContent;
