const displayFlex = (direction: string, justify: string, align: string) => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`

const inlineSpace = (value: string) => `
  margin-right: ${value};
  &:last-child {
    margin-right: 0;
  }
`

export default { displayFlex, inlineSpace }
