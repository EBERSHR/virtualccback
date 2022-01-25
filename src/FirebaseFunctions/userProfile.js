function userProfile(data) {
    return {
      age: data.age,
      citizen: data.citizen,
      email: data.email,
      fullName: data.fullName,
      location: data.location
    };
  }
  
  export default userProfile;