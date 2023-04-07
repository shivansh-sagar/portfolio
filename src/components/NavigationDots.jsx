import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
          {['home', 'about', 'work','skill','testimonials','contact'].map((item) =>(
                <a 
                href={`#${item}`}
                key={item }
                className='app__navigation-dot'
                style={active=== item ? {backgroundColor:'#313BAC'} : {}}
                />
              ))}
    </div>
  )
}

export default NavigationDots