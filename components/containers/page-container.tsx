
import React, { PropsWithChildren } from 'react'
import { motion } from "framer-motion";
import { Card, } from '../ui/card'
import PageHeader from '../ui/page-header'
type Props = {
  title: string
}
const PageContainer = ({ children, title }: Props & PropsWithChildren) => {

  return (
    <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className='w-full h-auto my-4'>
      <Card className='w-full px-2 md:px-3 max-h-[84vh] overflow-y-scroll customScroll mr-4 pr-4'>
        <PageHeader variant='compuse' title={title} className='fade-line-bottom' />
        {children}
      </Card>
    </motion.div>
  )
}

export default PageContainer