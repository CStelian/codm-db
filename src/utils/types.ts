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

export type alchemyStarsModeType = {
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

export type perkType = {
    id: string
    name: string
    tier: string
    desc: string
}

export type PatchNoteType = {
    season: number
    type: string
    title: string
    patchNotes: Array<{
        item: string
        changes: Array<{
            title: string
            type: string
        }>
    }>
}

export type MapType = {
    id: string
    name: string    
    type: string
    releaseYear: number
    releaseDate?: Date | undefined
    released: boolean
    pointsOfInterest: string[]
}

export type OperatorType = {
    id: string
    name: string
    mode: string
    type?: string
    active?:  {
        title: string
        desc: string
    }
    passive?: {
        title: string
        desc: string
    }
    desc: string
}