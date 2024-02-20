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
const products = [
  {
    id: 1,
    name: '',
    href: '#',
    price: '',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1707748548/ntlkqmjmehqajz2rjtid.jpg',
    imageAlt: 'Reactjs.',
  },
  {
    id: 2,
    name: 'r',
    href: '#',
    price: '',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1707748548/dizerrrduwncbm0zsogu.jpg',
    imageAlt: 'Tailwind',
  },
  {
    id: 3,
    name: '',
    href: '#',
    price: '',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1707748547/pork15opediwq4kfadu8.jpg',
    imageAlt: 'Nextjs',
  },
  {
    id: 4,
    name: '',
    href: '#',
    price: '',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1707748548/p0g1mwekqcxkbcjunut3.jpg',
    imageAlt: 'Vite',
  },
  {
    id: 5,
    name: '',
    href: '#',
    price: '',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1707748545/c0fdzmedus6fxnemooay.jpg',
    imageAlt: 'Bootstrap',
  },
  {
    id: 6,
    name: '',
    href: '#',
    price: '',
    imageSrc: 'https://res.cloudinary.com/dlazh2zmf/image/upload/v1707748756/urztorbljjj6pvhwnrvi.jpg',
    imageAlt: 'Django',
  },
  // More products...
]

export default function Services() {
  return (
    <div className="bg-amber-200">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Services</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}



