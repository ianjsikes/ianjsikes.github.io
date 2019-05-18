import styled from 'styled-components'

export const BoxStyle = height => {
  let style = `border: 2px solid black;
  border-radius: 4px;
  box-shadow: `

  const shadows = Array.from(Array(height)).map((_, i) => {
    let x = i * 2 + 1
    return `${x}px ${x}px 0px black`
  })

  return `${style} ${shadows.join(', ')};`
}

export const Box = styled.div`
  ${BoxStyle(3)}
`

export const Button = styled.button`
  font-family: 'Fira Code';
  font-size: 0.9rem;
  text-decoration: underline;
  color: black;
  background-color: white;
  padding: 0.3rem 0.6rem;
  ${BoxStyle(2)}

  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }

  &:focus,
  &:hover {
    background-color: black;
    color: white;
  }
`
