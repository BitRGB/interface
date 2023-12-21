import styled from "styled-components";
import EmptyTable from "components/emptyTable";
import { ICON_RGBS } from "assets";
import { BottomTab, ITabItem, Pagination } from "components";
import { ALL_MINT_CORD_TYPE, TABLE_PAGE_SIZE } from "config";
import { useEffect, useState } from "react";
import { useApplicationState } from "store/application";
import { useGetMintList, useMintState } from "store/mint";
import { computeBtcDollar, formatStats } from "utils";
import { dateUtcFormat } from "utils/date";


export default () => {
    const { btcPrice, pubkey } = useApplicationState()
    const [tab, setTab] = useState(ALL_MINT_CORD_TYPE[0])
    const [page, setPage] = useState(1)
    const { recordList } = useMintState()
    const onGetMintRecord = useGetMintList()

    useEffect(() => {
        let params: any = { page, size: TABLE_PAGE_SIZE }
        if (tab.value == "my") {
            params.userPubKey = pubkey
        }
        onGetMintRecord(params)
    }, [page, tab])

    const handlePageChange = (p: number) => {
        setPage(p)
    }
    const handleTabChange = (tab: ITabItem) => {
        setTab(tab)
    }

    const getTotalPay = (amount: string, price: string, count = "1") => {
        const a = Number(amount)
        const p = Number(price)
        const re = Number(count)
        const total = p * a * re
        const dollar = computeBtcDollar(btcPrice, total)
        return {
            total: formatStats(total),
            dollar
        }
    }
    const isMynoConnectWallet = () => {
        if (tab.value == "my" && !pubkey) {
            return true
        }
        return false
    }
    return (
        <Wrapper>
            <SearchWrapper>
                <BottomTab list={ALL_MINT_CORD_TYPE} onChange={handleTabChange} current={tab} />
            </SearchWrapper>
            <Table>
                <TableHeader>
                    <Column>
                        <Lable>RGB-20</Lable>
                    </Column>
                    <Column>
                        <Lable>Pay</Lable>
                    </Column>
                    <Column>
                        <Lable>Amount</Lable>
                    </Column>
                    <Column>
                        <Lable>Price</Lable>
                    </Column>
                    <Column>
                        <Lable>Repeat Mint</Lable>
                    </Column>
                    <ColumnRight>
                        <Lable>Time</Lable>
                    </ColumnRight>
                </TableHeader>
            </Table>
            <Body>
                {
                    isMynoConnectWallet() ? <EmptyTable /> :
                        <>
                            {
                                recordList.dataList.length == 0 ? <EmptyTable /> :
                                    <>
                                        {
                                            recordList.dataList.map(item => {
                                                const content = JSON.parse(item.RawContent)
                                                const total = getTotalPay(content.amount, content.price, content.count)
                                                return (
                                                    <Row>
                                                        <Column>
                                                            <PhoneLable>RGB-20</PhoneLable>
                                                            <AlignCenter>
                                                                <TokenIcon src={ICON_RGBS} />
                                                                <Text>RGBS</Text>
                                                            </AlignCenter>
                                                        </Column>
                                                        <Column>
                                                            <PhoneLable>Pay</PhoneLable>
                                                            <Container>
                                                                <Text>{total.total} Sats</Text>
                                                                <Dollar>～ {total.dollar}</Dollar>
                                                            </Container>
                                                        </Column>
                                                        <Column>
                                                            <PhoneLable>Amount</PhoneLable>
                                                            <Text>{formatStats(content.amount)} RGBS</Text>
                                                        </Column>
                                                        <Column>
                                                            <PhoneLable>Price</PhoneLable>
                                                            <Text>{formatStats(content.price)} Sats</Text>
                                                        </Column>

                                                        <Column>
                                                            <PhoneLable>Repeat Mint</PhoneLable>
                                                            <Text>x  {content.count || 0}</Text>
                                                        </Column>
                                                        <ColumnRight>
                                                            <PhoneLable>Time</PhoneLable>
                                                            <Text>{dateUtcFormat("YYYY-mm-dd HH:MM:SS", item.createTime)}</Text>
                                                        </ColumnRight>
                                                    </Row>
                                                )
                                            })
                                        }
                                        <Pager>
                                            <Pagination page={page} total={recordList.total} size={TABLE_PAGE_SIZE} onPageChange={handlePageChange} />
                                        </Pager>
                                    </>
                            }
                        </>
                }

            </Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 30px;
    border-radius: 8px;
    border: solid 1px rgba(255,255,255,0.1);
    background-color:rgba(25,25,25,0.1);
    width: 1000px;
    box-sizing: border-box;
    padding:15px 30px 30px;
    @media screen and (max-width:960px){
        width:100%;
        padding:20px 15px;
    }
`
const SearchWrapper = styled.div`
    margin-top: 20px;
    height: 40px;
`
const Table = styled.div`
    margin-top: 20px;
`
const TableHeader = styled.div`
    box-sizing: border-box;
    padding:0 20px;
    display: flex;
    align-items: center;
    @media screen and (max-width:960px){
        display: none;
    }
`
const Column = styled.div`
    flex:1;
    @media screen and (max-width:960px){
        display: flex;
        justify-content: space-between;
        flex:initial;
        width:100%;
    }
`
const Body = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap:15px;
`
const Row = styled.div`
    box-sizing: border-box;
    padding:20px;
    border: solid 1px rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width:960px){
        flex-direction: column;
        gap:15px;
        align-items: flex-start;
    }
`
const ColumnRight = styled(Column)`
    text-align: right;
`
const Lable = styled.span`
    font-size: 14px;
    color:#999;
`
const PhoneLable = styled(Lable)`
    display: none;
    @media screen and (max-width:960px){
        display: block;
    }
`
const Text = styled.span`
    font-size: 14px;
    color: #feffff;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:6px;
    @media screen and (max-width:960px){
        align-items: flex-end;
    }
`
const AlignCenter = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`
const TokenIcon = styled.img`
    width:30px;
    height:30px;
`
const Dollar = styled.span`
    font-size: 12px;
    color:#999;
`
const Pager = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
`