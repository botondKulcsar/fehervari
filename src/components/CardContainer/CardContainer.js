import React from 'react'

import { RiHeartPulseLine } from 'react-icons/ri'
import { RiPsychotherapyLine } from 'react-icons/ri'
import { MdOutlinePsychology } from 'react-icons/md'
import { MdOutlineMedication } from 'react-icons/md'
import './CardContainer.css'

import Card from '../Card/Card'

const CardContainer = () => {
  const items = [
    {
      icon: <RiHeartPulseLine />,
      title: 'Kardiológia',
      content: '0745 372 390',
      to: '/cardiology'
    },
    {
      icon: <RiPsychotherapyLine />,
      title: 'Pszihiátria',
      content: '0743 992 618',
      to: '/psychiatry'
    },
    {
      icon: <MdOutlinePsychology />,
      title: 'Pszichológia',
      content: '0720 020 840',
      to: '/cardiology'
    },
    {
      icon: <MdOutlineMedication />,
      title: 'Belgyógyászat',
      content: '0745 329 753',
      to: '/internalmed'
    }
  ]
  return (
    <div className='card-container'>
      {items.map(item => (
        <Card
          key={item.title}
          icon={item.icon}
          title={item.title}
          content={item.content}
          to={item.to}
        />
      ))}
    </div>
  )
}

export default CardContainer
