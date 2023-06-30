import Image from 'next/image';

export default function Home() {
   return (
      <div>
         <div className='mainbody pt-10'>
            <h1 className="text-white text-5xl font-semibold text-center font-poppins text-normal leading-normal">Check your financial health</h1>
            <p className="text-white text-center text-1xl font-poppins font-normal">Use WeathoMeter to get a free report <br></br> card for your finances- within minutes!</p>
            <button className="btn-1 text-white text-sm font-semibold rounded-full bg-orange-500 px-3 py-1 mt-10 border-none">
               Get Started
            </button>
            <div className='container-1 relative'>
               <div className='container-2 pl-5 pr-10'>
                  <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-4">
                     <div className="pt-14">
                        <div className='box-2 flex'>
                           <Image src="/images/checkbox.png" alt="" width={30} height={30} priority />
                           <p className='pl-1 text-white text-2xl font-semibold font-poppins'>Expected Retirement Age</p>
                        </div>
                        <div className="border-t-2 border-white-500 pt-5 mt-2 ml-9"></div>
                        <div className='box-2 flex'>
                           <Image src="/checkbox.png" alt="" width={30} height={30} priority />
                           <p className='pl-2 text-white text-2xl font-semibold font-poppins'>Identify Mistakes</p>
                        </div>
                        <div className="border-t-2 border-white-500 mt-2 ml-9"></div>
                     </div>
                     <div className='col-span-1'>
                        <Image className='img-1' src="/mobile.png" alt="" width={400} height={550} priority />
                     </div>
                     <div className="pt-14">
                        <div className='box-2 flex'>
                           <Image src="/checkbox.png" alt="" width={30} height={30} priority />
                           <p className='pl-2 text-white text-2xl font-semibold font-poppins'>Personalised Road Map</p>
                        </div>
                        <div className="border-t-2 border-white-500 pt-5 mt-2 ml-9"></div>
                        <div className='box-2 flex'>
                           <Image src="/checkbox.png" alt="" width={30} height={30} priority />
                           <p className='pl-2 text-white text-2xl font-semibold font-poppins'>Tips To Improve</p>
                        </div>
                        <div className="border-t-2 border-white-500 mt-2 ml-9"></div>
                     </div>
                  </div>
               </div>

               <div className="container-3 relative">
                  <Image className="img-2" src="/wave.svg" alt="" width={1500} height={100} priority />
                  <div className="text-overlay">
                     <h1 className="text-white text-5xl font-semibold text-center font-poppins text-normal leading-normal">How it Works?</h1>
                     <Image className="img-3" src="/image-1.png" alt="" width={900} height={300} priority />
                     <div className='box-10'>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                           <div className="para">
                              <p className="text-white text-center text-1xl font-poppins font-normal">Answer few <br></br>questions</p>
                           </div>
                           <div className="para">
                              <p className="text-white text-center text-1xl font-poppins font-normal">Register using <br></br>phone and OTP</p>
                           </div>
                           <div className="para">
                              <p className="text-white text-center text-1xl font-poppins font-normal">Get report and <br></br>personal roadmap</p>
                           </div>
                        </div>
                     </div>
                     <button className="btn-2 text-white text-sm font-semibold rounded-full bg-orange-500 px-3 py-1 mt-10 border-none">
                        Get Started
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
