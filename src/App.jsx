
import './App.css'

function App() {

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center' >
          <a href='#' className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>ShinCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href='#home' className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href='#About' className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href='#Skills' className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href='#Blog' className=' hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>

      <section className='text-gray-700 ' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>Hi! <br/> I'm Shincode <br/> Web Dveloper</h1>
            <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error minima nulla alias expedita vero nam temporibus, magni similique. Repellendus, reprehenderit!</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src='./img/icon.jpg' alt='' />
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px5 py-24 mx-auto'>
          <div className='text-center mb-20 '>
            <h1 className='trext-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Nostrum eius veniam, omnis cupiditate repellendus iusto accusantium provident exercitationem sapiente eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Est, eligendi eius odit dignissimos saepe totam ad perferendis ipsa distinctio nobis at sapiente veritatis?
              Quaerat ducimus laborum repellendus. Quam placeat optio veritatis aliquid quia sit assumenda? 
              Architecto nemo adipisci facere quo fugit explicabo, eius cumque quibusdam soluta nostrum quasi vitae dolorem nobis dicta ducimus minus doloribus labore porro veritatis? 
              Pariatur nulla tempora hic dolorum eius cupiditate, dignissimos perferendis doloremque fugiat fuga nisi delectus similique eum consectetur saepe quos voluptas sequi adipisci sit commodi dolor, aut tempore a quia. Repudiandae, molestiae ab a numquam iste maxime totam odit atque nostrum eum dolores?
            </p>
          
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8' >
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Praesentium ipsam quod neque excepturi eum inventore optio consequuntur dignissimos illum quia.
                  </p>
                  <a href='#' className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8' >
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Praesentium ipsam quod neque excepturi eum inventore optio consequuntur dignissimos illum quia.
                  </p>
                  <a href='#' className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8' >
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Praesentium ipsam quod neque excepturi eum inventore optio consequuntur dignissimos illum quia.
                  </p>
                  <a href='#' className='flex mt-3 text-green-500 items-center'>
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px5 py-24 mx-auto flex flex-wrap'>
          {/* left-side */}
          <div className='lg:w-1/2 mb-10 lg:mb-0 w-full flex justify-center'>
            <img src='./img/pc.jpg' alt='' className="rounded  object-cover p-4 " />
          </div>
          {/* right-side */}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2' >
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10'>My Skills</h1>
            <div>
              <h2>HTML</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className=' bg-green-500 text-xs leading-none py-1 text-center text-white'
                style={{width: "85%"}}
                >
                  85%
                </div>
              </div>
              <h2>CSS</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className=' bg-green-500 text-xs leading-none py-1 text-center text-white'
                style={{width: "75%"}}
                >
                  75%
                </div>
              </div>
              <h2>JavaScript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className=' bg-green-500 text-xs leading-none py-1 text-center text-white'
                style={{width: "85%"}}
                >
                  65%
                </div>
              </div>
              <h2>HTML</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className=' bg-green-500 text-xs leading-none py-1 text-center text-white'
                style={{width: "85%"}}
                >
                  85%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App