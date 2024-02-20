import React from 'react'

const Profile = () => {
  return (
    <section className="pt-10 overflow-hidden bg-amber-200 md:pt-0 sm:pt-16 2xl:pt-16 font-mono">
    <div className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">

                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                 Hey 👋 I am Ebenezer Ayaaba
                 A passionate web developer with a drive to craft seamless and impactful digital experiences. 
                 I combine my skills in frontend development React, Next.js, Bootstrap, Tailwind CSS 
                 to design engaging and user-friendly interfaces that capture attention. 
                 On the backend, I use Django to create robust and scalable web applications, 
                 ensuring smooth operations and data management.
                 I optimize code and use best practices to ensure your website or application runs flawlessly. 
                 Need a custom website ? I'm your guy!
                </p>
                

                 <span className="md:mb-12 lg:mb-0 bg-amber-200">
                   <img src="https://res.cloudinary.com/dlazh2zmf/image/upload/v1706631618/zr6kgi6luvryza1chuzq.png"
                   classNameName="w-full rounded shadow-lg dark:shadow-black/80" alt="" />
                </span>

        </div>
    </div>
</section>
  )
}

export default Profile