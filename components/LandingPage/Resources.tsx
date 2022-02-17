import React from 'react';
import Resources from '../../lib/types/resourcesType';

export const Resources: React.FC<Resources> = ({ resources }) => {
  return (
    <>
      <div className='relative bg-gray-50 py-16 sm:py-24 lg:py-32'>
        <div className='relative'>
          <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='text-base font-semibold uppercase tracking-wider text-meadow'>
              Learn
            </h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Helpful Resources
            </p>
          </div>
          <div className='mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8'>
            {resources.map((post) => (
              <div
                key={post.id}
                className='flex flex-col overflow-hidden rounded-lg shadow-lg'
              >
                <div className='flex-shrink-0'>
                  <img
                    className='h-48 w-full object-cover'
                    src={post.imageUrl}
                    alt=''
                  />
                </div>
                <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-meadow'>
                      <a href={post.category.href} className='hover:underline'>
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className='mt-2 block'>
                      <p className='text-xl font-semibold text-gray-900'>
                        {post.title}
                      </p>
                      <p className='mt-3 text-base text-gray-500'>
                        {post.preview}
                      </p>
                    </a>
                  </div>
                  <div className='mt-6 flex items-center'>
                    <div className='flex-shrink-0'>
                      <a href={post.author.href}>
                        <img
                          className='h-10 w-10 rounded-full'
                          src={post.author.imageUrl}
                          alt={post.author.name}
                        />
                      </a>
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-900'>
                        <a href={post.author.href} className='hover:underline'>
                          {post.author.name}
                        </a>
                      </p>
                      <div className='flex space-x-1 text-sm text-gray-500'>
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden='true'>&middot;</span>
                        <span>{post.readingLength} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
