
import React, { useMemo } from 'react'
import styled from 'styled-components'

export interface PageItemProps {
    active?: boolean,
    disabled?: boolean,
    name: string,
    onPageClick?(page: string, e: React.MouseEvent<HTMLAnchorElement>): void
}
export interface PaginationProps {
    page: number,
    size: number,
    total: number,
    onPageChange?(page: number): void
}

const PageItem: React.FC<PageItemProps> = ({ active = false, disabled, name, onPageClick }: PageItemProps) => {
    const Component = active || disabled ? ItemSpan : ItemAnchor;
    const handleClick = (size: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        onPageClick && onPageClick(size, e);
    }
    return (
        <ItemContainer>
            {
                (active || disabled) ? <ItemSpan active={active}>{name}</ItemSpan> : <ItemAnchor onClick={(e: any) => handleClick(name, e)}>{name}</ItemAnchor>
            }
        </ItemContainer>

    )
}

function getTotalPage(size: number, total: number) {
    let page: number = 0;
    if (total % size == 0) {
        page = parseInt((total / size).toString())
    } else {
        page = parseInt((total / size).toString()) + 1
    }
    return page
}
function getPaging(totalPage: number, page: number) {
    const arr: PageItemProps[] = [];
    if (totalPage <= 0 || page < 1) {
        return arr
    }
    let firstDisabled = false;
    let lastDisabled = false;
    let isLoadEllipsis = false;
    const showItemCount = 5;
    let start = page - 2 < 0 ? 1 : page - 2;
    start = start === 0 ? 1 : start;
    let end = start + showItemCount;
    end = end > totalPage ? (totalPage + 1) : end;
    start = end - showItemCount <= 0 ? 1 : end - showItemCount

    if (page == 1) {
        firstDisabled = true
    } else {
        firstDisabled = false
    }
    if (end > showItemCount && (end - 1) < totalPage) {
        isLoadEllipsis = true
    } else {
        isLoadEllipsis = false
    }
    let endDisabled = true
    if (page == end - 1) {
        endDisabled = true
    } else {
        endDisabled = false
    }
    arr.push({ name: '<', disabled: firstDisabled, })
    if (start > 2) {
        arr.push({ name: '1', active: false })
        arr.push({ name: '...', disabled: true })
    }
    for (let i = start; i < end; i++) {
        let active = i === page ? true : false
        arr.push({ name: i.toString(), active })
    }
    if (isLoadEllipsis) {
        arr.push({ name: '...', disabled: true })
        arr.push({ name: (totalPage).toString(), active: false })
    }
    arr.push({ name: '>', disabled: endDisabled })
    return arr
}
export const Pagination: React.FC<PaginationProps> = ({ page = 1, size = 10, total = 0, onPageChange }) => {
    const totalPage = useMemo(() => {
        return getTotalPage(size, total)
    }, [size, total])
    const PageList = useMemo(() => {
        const arr = getPaging(totalPage, page)
        return arr
    }, [page, totalPage])
    const handlePageChange = (name: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        let currentPage = page
        switch (name) {
            case '<<':
                currentPage = 1
                break
            case '<':
                currentPage = page - 1;
                break;
            case '>':
                currentPage = page + 1;
                break;
            case '>>':
                currentPage = totalPage
                break
            default:
                currentPage = parseInt(name)
                break;
        }
        onPageChange && onPageChange(currentPage)
    }
    return (
        <PaginationContainer>
            {
                PageList && PageList.map((item: PageItemProps, index: number) => {
                    return (
                        <PageItem {...item} key={`pagination-${index}`} onPageClick={handlePageChange} />
                    )
                })
            }
        </PaginationContainer>
    )
}
const PaginationContainer = styled.ul`
    display:flex;
    list-style:none;
    margin:0;
    padding:0;
`
const ItemContainer = styled.li`
   & span,& a{
       display:inline-block;
       width: 30px;
       line-height: 30px;
       height: 30px;
       text-align:center;
       margin: 0 2px 0 0;
   }
`

const ItemAnchor = styled.a`
    color:#fff;
    cursor: pointer;
    font-size:12px;
`
const ItemSpan = styled.span<{ active: boolean }>`
    font-size:12px;
    border-radius: 8px;
    ${({ active }) => active ? `background-color: #105dff` : ""};
    color:${({ active }) => active ? "#fff" : "#6f8193"};
`

