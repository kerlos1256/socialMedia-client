export interface authUser {
    id: number,
    uuid: string,
    email: string,
    username: string,
    iat: number,
    exp: number
    authed: any
}