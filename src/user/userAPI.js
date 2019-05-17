import { 
  signin, 
  signinWithGoogle,
  signinWithFacebook,
  signinWithTwitter,
  signup,
  signout,
  onAuthStateChanged,
  getUser,
  updateProfile,
  resetPwd
} from '../user/userFirebase'

let USER_API = {}


USER_API.signinUser = async (login, pwd) => {
  const user = await signin(login, pwd)
  return convertUser(user)
}

USER_API.signinWithGoogle = async () => {
  const user = await signinWithGoogle()
  return convertUser(user)
}

USER_API.onAuthStateChanged = callbackFn => {
  return onAuthStateChanged(callbackFn)
}

USER_API.signinWithFacebook = async () => {
  const user = await signinWithFacebook()
  return convertUser(user)
}

USER_API.signinWithTwitter = async () => {
  const user = await signinWithTwitter()
  return convertUser(user)
}

USER_API.signupUser = async (login, pwd) => {
  return await signup(login, pwd)
}

USER_API.signout = async () => {
  return await signout()
}

USER_API.fetchProfile = async(email) => {
  return await getUser(email)
} 

USER_API.updateProfile = async (firstName, lastName) => {
  const name = displayName(firstName, lastName)
  return await updateProfile(name)
}

USER_API.resetPwd = async (email) => {
  return await resetPwd(email)
}

// FIXME
USER_API.filterUser = user => {
  console.log(user)
  
  // return {
  //   uid: user.uid,
  //   email: user.email,
  //   name: user.displayName,
  //   photo: user.photoURL,
  //   goal: user.goal,
  //   home: user.home,
  //   events: user.events
  // }
  return user
}

const convertUser = userDB => USER_API.filter(userDB.user)

const displayName = (firstName, lastName) => {
  return firstName + ' ' + lastName
}

export default USER_API