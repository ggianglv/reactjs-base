export const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Giang' })
    }, 1000)
  })
}
