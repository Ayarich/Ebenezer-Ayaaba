import React from 'react'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: 'Backend & Frontend',
    description: 'Company',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1706631089/ylqgsw4yrfd7rxovd0sx.png',
    imageAlt: 'company.',
    href: 'https://earngigz.com/',
  },
  {
    name: 'Backend & Frontend',
    description: 'Organization',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1706631089/ofy2qxqvisgfkagarga3.png',
    imageAlt: 'organization.',
    href: 'https://ayen-8pd1.onrender.com',
  },
  {
    name: 'Backend & Frontend',
    description: 'Education',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1706631099/larn6y9npqfwt272pwsv.png',
    imageAlt: 'education',
    href: 'https://src-4yfu.onrender.com',
  },
]

export default function Example() {
  return (
    <div className="bg-amber-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
