const userAuth = (userData) => {
  if (userData.email === 'admin@gmail.com' && userData.password === 'admin') return true
  return false
}

export {userAuth}