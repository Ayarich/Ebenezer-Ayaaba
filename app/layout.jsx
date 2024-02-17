import '@styles/global.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';


export const metadata = {
    title: "Ebenezer Ayaaba",
    description: 'Profile'
}

const Rootlayout = ( {children} ) => {
  return (
    <html lang = "en">
      <body>
        <Nav />
       <div className = "main">
       </div>
       <main className='app'>
        
          {children}
       </main>
       <Footer />
      </body>
    </html>
  )
}

export default Rootlayout