import React, { PropsWithChildren } from 'react'
import { Card, CardContent } from '../ui/card'
import PageHeader from '../ui/page-header'
type Props = {
  title: string
}
const PageContainer = ({ children, title }: Props & PropsWithChildren) => {
  
  return (
    <Card className='w-full px-2 md:px-3'>
      <PageHeader variant='compuse' title={title} />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default PageContainer