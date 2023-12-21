export interface ITabItem {
    id: number
    name: string
    value: any
    attrs?: any
}

export interface ITabProps {
    list: ITabItem[]
    onChange: (item: ITabItem) => void
    current: ITabItem
}