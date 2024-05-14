export type WeaponType = {
    id: string
    name: string
    desc: string
    type: string,
    dmg: number
    acc: number
    range: number
    fireRate: number
    mobility: number
    ctrl: number
}

export type WeaponBlueprint = {
    id: string
    mythic?: string[]
    legacy?: string[]
    legendary?: string[]
    epic?: string[]
}

export type gameModeType = {
    id: string
    name: string
    gameType: string
    type: string
    ranked: boolean
    timeLimited: boolean
    rules: string
    maps: Array<{
        id: string
        name: string
    }>
}

export type zombieModeType = {
    id: string
    name: string
    gameType: string
    timeLimited: boolean
    desc: string
    maps: Array<{
        id: string
        name: string
    }>
}

export type mapType = {
    id: string
    name: string
    desc?: string
    type?: string
}