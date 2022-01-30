function userProfile(data) {
  // console.log('DATA::::::', data)
  return {
    id: data.id,
    age: data.age,
    citizen: data.citizen,
    email: data.email,
    fullname: data.fullname,
    location: data.location
  };
}
  
module.exports = userProfile;