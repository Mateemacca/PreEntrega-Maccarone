
import Layout from "../../components/Layout/Layout";
import './home.css'
export default function Home() {
  return (
   <div className=" overflow-hidden">
<Layout>  
    <div className='text-white overflow-y-hidden'>
      <div className="page-container align-middle h-full flex mx-auto my-48 flex-col contenedor-texto-blest  ">
        <div className="flex justify-center align-middle top-0"></div>
        <div className="text-white font-extrabold text-9xl tracking-widest flex justify-center align-middle text-center items-center mx-5 we-are-blest-text dark:text-black top-0">
          <h1>
            WE. ARE. <strong>BLEST</strong>
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            src="imgs/blestlogoblanco.png"
            className="w-64 mt-[2%] dark:hidden blest-image"
            alt=""
          />
          <img
            src="imgs/blestlogodarkmode.png"
            alt="Logo Oscuro"
            className="blest-image  mt-[2%] w-64 logo hidden dark:block dark:p-0"
          />
        </div>
      </div>
    </div>
    
    </Layout>
    </div>
  );
}
