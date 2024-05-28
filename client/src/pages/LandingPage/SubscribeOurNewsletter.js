import React from 'react'
import { motion } from 'framer-motion';

function SubscribeOurNewsletter() {
  return (
    <motion.div  className="w-full h-auto mx-auto px-2  pb-20 md:px-10 bg-[#F5F2EA] flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 text-start w-full mt-16">
     <div>
      <h1 className="font-medium text-2xl lg:text-3xl">Subscribe Our Newsletter</h1>
      <h2 className="mt-3 pe-24">Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</h2>
     </div>
    </div>
  </motion.div>

  )
}

export default SubscribeOurNewsletter
