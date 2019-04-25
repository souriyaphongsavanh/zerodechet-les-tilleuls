import React from 'react'

import IconMail from '../common-ui/IconMail'
import InputPretty from '../common-ui/InputPretty'
import Button from '../common-ui/Button'

export const ResetPwdHeader = () => {

  return (
    <div className="reset-pwd__header">
      <h1 className='h1'>Réinitialiser le mot de passe</h1>
      <p>Saisissez l'e-mail asocié à votre compte. Nous vous enverrons un lien par e-mail pour réinitialiser votre mot de passe</p>
    </div>
  )
}

export const ResetPwdContent = () => {

  return (
    <div className="reset-pwd__content">
      <div className="content__grid">
        <InputPretty 
          type='email'
          placeholder='e-mail'><IconMail /></InputPretty>
        
        <a href='#' className='link'><Button raised={true} lgTxt={true}>Envoyer le lien de réinitialisation</Button></a>
      </div>
    </div>
  )
}