import Image from 'next/image'
import Link from 'next/link'


const Footer: React.FC = () => {

  return (
    <footer>
      <div className='container block mx-auto max-w-6xl py-0 px-4 relative z-1'>
        <div className='grid-rows-3 gap-6'>
          <div className='row-start-1 row-end-3 min-w-9'>
            <div className='flex justify-center items-center max-w-2xl'>
              <h3 className='text-3xl '>hey there!</h3>
              <p className='text-2xl'>
                I&#39;m Brad Frost, a design system consultant, web designer, speaker, writer, 
                and musician located in beautiful Pittsburgh, PA.
              </p>
            </div>
            
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;