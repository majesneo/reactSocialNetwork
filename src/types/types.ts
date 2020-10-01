export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type photosType = {
    small: string | null
    large: string | null
}
export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: boolean
    fullName: string
    contacts: contactsType
    photos: photosType
}
export type peoplesDataType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed:boolean
}
export type dialogsData = {
    id: number
    name: string
    imageUrl: string
}
export type messagesDataMe = {
    id: number
    message: string
}
export type messagesDataYou = {
    id: number
    message: string
}
export type postDataType = {
    id: number
    message: string
    like: number
}
