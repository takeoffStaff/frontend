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

const stackSpace = (value: string) => `
	margin-bottom: ${value};
	&:last-child {
		margin-bottom: 0;
	}
`

export default { displayFlex, inlineSpace, stackSpace }
