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
    season: number | string
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

export type ApiData = {
    definitions: Record<
      string,
      {
        description?: string
        origin?: string
        options?: { value: any; label?: string }[]
      }
    >
    hints?: { key: string; text: string }[]
    overrideEncryptionMode?: "plaintext" | "encrypted"
}

export type ScorestreakType = {
    id: string
    name: string
    score: number
    persistenceTier: string
    desc: string
}

export type KillstreakType = {
    id: string
    name: string
    kills: number
    desc: string
}

export type ThrowableType = {
    id: string
    name: string
    type: string
    desc: string
}

export type WildcardType = {
    id: string
    name: string
    description: string
    unlockedAt: string
    price: string
}

export type gameRankType = {
    id: string
    name: string
    type: string
    minPoints: number
    maxPoints?: number
    subRanks: Array<{
        name: string
        minPoints: number
        maxPoints?: number
    }>
}

export type EliteMissionType = {
    id: string
    name: string
    startDate: string
    endDate: string
    noOfSeasons: number
    seasons: Array<{
        season: number
        name: string
        startDate: string
        endDate: string
    }>  
    reward: {
        type: string
        id: string
        name: string
    }
    requirement: string
}

