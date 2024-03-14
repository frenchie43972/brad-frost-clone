import Image from 'next/image'
import Link from 'next/link'


const Footer: React.FC = () => {

  return (
    <footer>
      <div className='font-sans'>
        <h3 className='text-3xl '>hey there!</h3>
        <p className='text-2xl'>
          I&#39;m Brad Frost, a design system consultant, web designer, speaker, writer, 
          and musician located in beautiful Pittsburgh, PA.
        </p>
      </div>
    </footer>
  );
};

export default Footer;