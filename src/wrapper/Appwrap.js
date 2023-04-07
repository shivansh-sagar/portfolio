import React from 'react';
import { NavigationDots, SocialMedia} from '../components';

const Appwrap = (Components, idName, classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
            <Components/>

            <div className='copyright'>
                <p className='p-text'>@2023 Shivanshu</p>
                <p className='p-text'>All rights reserved</p>

            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default Appwrap