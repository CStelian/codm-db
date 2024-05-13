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