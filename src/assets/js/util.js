const removeByIndex = (arr, index) => (index !== -1) ? (arr.splice(index, 1)) : false
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0; const v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export { removeByIndex, uuidv4 }
