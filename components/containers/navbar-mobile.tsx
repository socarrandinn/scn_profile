import React from 'react'
import { DrawerDemo } from './drawer-menu'
import { ModeToggle } from '../ui/mode-toggle'
import { useTranslation } from 'react-i18next'

const NavarMobile = () => {
  const { t } = useTranslation('common')
  return (
    <div className='flex lg:hidden justify-between items-center'>
      <h1>
        {t('porfolio')}
      </h1>
      <div className='flex flex-row gap-1'>
        <ModeToggle />
        <DrawerDemo />
      </div>
    </div>
  )
}

export default NavarMobile