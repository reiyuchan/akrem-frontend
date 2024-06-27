const ignoreNaN = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const charCode = e.which || e.keyCode
  const charStr = String.fromCharCode(charCode)

  // If the character is a digit, pre its input
  if (!/\d/.test(charStr) && !e.ctrlKey && e.key !== 'Backspace') {
    e.preventDefault()
    return
  }
}

export default ignoreNaN
