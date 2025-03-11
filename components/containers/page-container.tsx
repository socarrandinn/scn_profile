'use client'
import React, { PropsWithChildren } from 'react'
import { motion } from "framer-motion";
import { Card, } from '../ui/card'
import PageHeader from '../ui/page-header'
type Props = {
  title: string
}
const PageContainer = ({ children, title }: Props & PropsWithChildren) => {

  return (
    <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className='w-full h-auto overflow-y-scroll my-4 customScroll'>
      <Card className='w-full px-2 md:px-3 overflow-hidden'>
        <PageHeader variant='compuse' title={title} className='fade-line-bottom' />
        {children}
      </Card>
    </motion.div>
  )
}

export default PageContainer