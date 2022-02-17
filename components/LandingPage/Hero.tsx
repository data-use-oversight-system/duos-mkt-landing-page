import { useState } from 'react';
import Hero from '../../lib/types/heroType';
import { submitSlack } from '../../pages/api/submission';

export const Hero: React.FC<Hero> = ({ hero }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitSlack(email);
    setIsSubmitted(true);
  };

  return (
    <>
      <div className='bg-daintree-600 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left'>
              <div className='lg:py-24'>
                <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span className='block'>{hero.title}</span>
                  <span className='block bg-gradient-to-r from-meadow-300 to-topaz-200 bg-clip-text pb-3 text-transparent sm:pb-5'>
                    {hero.titleContast}
                  </span>
                </h1>
                <p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
                  {hero.description}
                </p>
                <div className='mt-10 sm:mt-12'>
                  {!isSubmitted ? (
                    <form
                      action='#'
                      className='sm:mx-auto sm:max-w-xl lg:mx-0'
                      onSubmit={registerUser}
                    >
                      <div className='sm:flex'>
                        <div className='min-w-0 flex-1'>
                          <label htmlFor='email' className='sr-only'>
                            Email address
                          </label>
                          <input
                            id='email'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder={hero.input.placeholder}
                            className='block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900'
                          />
                        </div>
                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                          <button
                            type='submit'
                            className='block w-full rounded-md bg-gradient-to-r from-meadow-400 to-topaz-400 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900'
                          >
                            {hero.button.text}
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className='flex items-center space-x-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-7 w-7 text-green-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='text-lg text-gray-300'>
                        {hero.input.subTitle}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                <img
                  className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='./images/illustration.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
