export interface User {
    id: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    gender: string
    password: string
    profileImage: string
    carLicenceFrontImage: string
    carLicenceBackImage: string
    personalLicenceFrontImage: string
    personalLicenceBackImage: string
    carImages: string[]
    roleList: string[]
    completedRegistrationSteps: number[]
  }

  export interface UserFilters {
    phoneNumber: string
    email: string
    gender: string
    role: string
  }