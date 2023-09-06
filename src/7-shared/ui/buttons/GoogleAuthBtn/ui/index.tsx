import React from 'react'
import google from './img/google.svg?url'
import s from './index.module.scss'
import { config } from '@shared/config/commonConfig'

interface IGoogleAuthBtn {}

const credentialLink = `${config.url.client}/api/auth/google`

const GoogleAuthBtn: React.FC<IGoogleAuthBtn> = (props) => {
  return (
    <button
      className={s.btn}
      onClick={() => { credentialLink && window.location.assign(credentialLink) }}
    >
      <img src={google} alt="" className={s.ico} />
      <span>искать с Google</span>
    </button>
  )
}

export default GoogleAuthBtn
