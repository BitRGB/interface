import styled from "styled-components";
import { ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from 'usehooks-ts'
import { ARROW_SEL_DOWN } from "../../assets";

export interface ISelectItem {
    id: number
    name: string
    value: string
    [key: string]: any
}


interface ISelectProps {
    list: ISelectItem[]
    current?: ISelectItem
    onSelectChange: (item: ISelectItem) => void
    fontSize?: number
    background?: string
    right?: (item: ISelectItem | undefined) => ReactNode
}

export const Select = ({ list, current, onSelectChange, fontSize = 14, background = "transparent", right }: ISelectProps) => {
    const [open, setOpen] = useState(false)
    const SelecteRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(SelecteRef, () => setOpen(false))
    const handleToggleOptionMenu = () => {
        setOpen(!open)
    }
    const handleSelectChange = (item: any) => {
        onSelectChange(item)
        setOpen(false)
    }
    return (
        <Wrapper ref={SelecteRef} >
            <Current onClick={handleToggleOptionMenu} background={background}>
                <Text fontSize={fontSize}>{current?.name}</Text>
                <FlexCenter>
                    {right?.(current)}
                    <Icon className={open ? "up" : ""} src={ARROW_SEL_DOWN} />
                </FlexCenter>

            </Current>

            {
                open && <OptionMenu>
                    {
                        list.map(item => {
                            return (
                                <Item
                                    fontSize={fontSize}
                                    key={`menu_selected_${item.id}_${item.value}`}
                                    onClick={() => handleSelectChange(item)}
                                >
                                    {item.name}
                                    {right?.(item)}
                                </Item>
                            )
                        })
                    }
                </OptionMenu>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    position: relative;
`
const Current = styled.div<{ background: string }>`
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding:0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
    background: ${({ background }) => background};
`
const Text = styled.span<{ fontSize: number }>`
    color: #fefefe;
    text-transform: capitalize;
    font-size: ${({ fontSize }) => fontSize}px;
`
const Icon = styled.img`
    width:16px;
    height:16px;
    transition: all 0.3s linear;
    &.up{
        transform: rotate(180deg);
    }
`
const OptionMenu = styled.div`
    position: absolute;
    top:54px;
    width:100%;
    z-index: 1000;
    left:0;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: #141c25;
    box-sizing: border-box;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap:20px;
`

const Item = styled.div<{ fontSize: number }>`
    cursor: pointer;
    color: #fefefe;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${({ fontSize }) => fontSize}px;
`
const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    gap:15px;
`