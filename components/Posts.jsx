import Image from "next/image";

export default async function Posts() {

    console.log('Getting Post');
    const response = await fetch('http://127.0.0.1:8000/api/news', { cache: 'no-store' });
    const posts = await response.json();
    console.log('Done Getting Posts');
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="container mx-auto mt-8">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                   <h2  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h2>
                    <p  className="text-gray-500 font-mono">{post.updated_at}</p>
                   <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                       <div className="relative mt-8 flex items-center gap-x-4">
                         <Image src={"https://res.cloudinary.com/dlazh2zmf/" + post.image} alt="" className="w-full h-auto mb-8" height={200} width={200}/>
    
                         </div>
                    </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 font-mono">{post.description}</p>
                </div>
                
                  
               
              </article>
            ))}
          </div>
        </div>
      </div>
    )
}


