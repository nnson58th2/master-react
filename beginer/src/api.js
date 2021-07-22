// export const getUserApi = () =>
//   Promise.resolve({
//     name: 'Alan Walker',
//     age: 23
//   })

export const getUserApi = () => Promise.reject(new Error('Lỗi server'))
