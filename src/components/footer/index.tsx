import React from 'react'
import * as S from './styles/footer'

const Footer = () => {
  return (
    <S.Footer>
      Made with &#9829; by Emilio Castro{'  '}.{'  '}
      <a
        href='https://github.com/emicastro/recursion-tree-visualizer'
        target='_blank'
        referrerPolicy="no-referrer"
        >
          Github
        </a>
    </S.Footer>
  )
}

export default Footer