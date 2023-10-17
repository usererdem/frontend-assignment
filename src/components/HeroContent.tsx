export type HeroContentProps = {
  name: string;
  title: string;
  description: string;
};

const HeroContent: React.FC<HeroContentProps> = (props) => {
  return (
    <div className='mb-11 lg:mt-12 lg:ml-20 flex-grow'>
      <div className="text-center md:text-right">
        <h1 className='text-primary font-bold uppercase mb-4 tracking-widest break-words'>
          {props.name}
        </h1>
        <h1 className='text-3xl font-bold mb-4 md:mb-8 break-words'>{props.title}</h1>
        <p className='text-base leading-6 mb-4 md:leading-8 md:mb-8 md:text-lg break-words max-w-[600px] mx-auto md:ml-auto'>{props.description}</p>
      </div>

      <div className='flex justify-center md:justify-end'>
        <button className='flex justify-center items-center px-4 py-2 cursor-pointer text-dark border font-semibold mb-6'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
