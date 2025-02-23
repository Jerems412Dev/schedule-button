import { useState } from 'react'
import './App.css'
import { CalendarDays, ChevronDown, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="relative w-full h-screen flex flex-row items-center justify-center bg-[#fefefe]">
        <div className="relative w-full h-fit flex flex-col items-center justify-center">
          <div className={"max-lg:w-[80%] absolute z-10 w-[25%] h-fit flex flex-col items-center justify-between rounded-3xl border-1 border-[#aeaeb6] bg-[#fefefe] px-2 py-2 " + (show ? "gap-y-5" : "gap-y-16")}>
            <div className="w-full flex flex-row items-center justify-start px-1 py-3">
              <input type="text" className="border-none bg-transparent outline-none text-black placeholder- text-[1.3rem] font-[550]" placeholder="What's up?" />
            </div>
            <div className="relative w-full h-fit flex flex-col items-center justify-center gap-y-2">
                  {!show && 
                  <motion.div 
                    className="w-full flex flex-row items-center justify-end gap-x-2"
                  >
                    <motion.button 
                      onClick={() => setShow(!show)}
                      initial={{ x: 90, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 90, opacity: 0 }}
                      transition={{ duration: 0.7 , type: 'spring', bounce: 0.4 }}
                      className="bg-[#f0eff6] text-[#85858e] rounded-full p-2.5 hover:text-black hover:bg-[#d2d1dc] cursor-pointer outline-none">
                      <CalendarDays size={20} />
                    </motion.button>
                    <motion.button className="bg-black text-white rounded-full px-10 py-1.5 text-lg cursor-pointer outline-none">
                      Post
                    </motion.button>
                  </motion.div>
                  }
                  {show &&
                  <motion.div 
                    className="w-full flex flex-row items-center overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 30 }}
                      animate={{ y: 0 }}
                      exit={{ y: 30 }}
                      transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                      className="w-full flex flex-row items-center justify-between bg-[#f0f0f7] text-[#85858e] rounded-full gap-x-1 pr-4"
                    >
                      <motion.div 
                        className="w-[95%] flex flex-row items-center bg-white rounded-3xl border-1 border-[#aeaeb6]"
                      >
                        <div className="w-[50%] flex flex-row items-center justify-between border-r-1 border-r-[#aeaeb6] py-2 px-2 text-[#85858e] text-sm text-nowrap">
                          <p>25, Dec 2024</p>
                          <ChevronDown size={20} />
                        </div>
                        <div className="w-[50%] flex flex-row items-center justify-between py-2 px-2 text-[#85858e] text-sm text-nowrap">
                          <p>9:30 AM</p>
                          <ChevronDown size={20} />
                        </div>
                      </motion.div>
                      <motion.button
                        onClick={() => setShow(!show)}
                      >
                        <X 
                          size={20} 
                          strokeWidth={2.5} 
                        />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                  }
                  {show &&
                  <motion.button 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
                    className="w-full flex items-center justify-center bg-black text-white rounded-full py-1.5 text-lg cursor-pointer outline-none"
                  >
                    Schedule
                  </motion.button>
                  }
            </div>
          </div>
          <AnimatePresence mode="sync" initial={false}>
            {show && <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 85 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              className="max-lg:w-[80%] absolute z-0 w-[25%] flex flex-row items-center justify-center bg-[#f6f5fa] rounded-3xl border-1 border-[#aeaeb6] text-[#85858e] text-sm pt-12 pl-1 pr-1 pb-1"
            >
              Will be posted on 25 Dec, 9:30AM
            </motion.div>}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default App
