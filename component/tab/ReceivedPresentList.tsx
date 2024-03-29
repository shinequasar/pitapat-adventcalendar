import { Flex } from "../../styles/styledComponentModule";
import styled from "styled-components";
import Card from "../receivedPresents/Card";
import { useEffect, useState } from "react";
import PresentService from "../../api/PresentService";
import {useRouter} from "next/router";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`;
const PrepareingContainer = styled.div`
  margin: 0 auto;
`
const PrepareingHeader = styled.h3`
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 2px 10px;
`;
const Img = styled.img`
  width: 150px;
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 14px;
`;

const ReceivedPresentList = () => {
  const router = useRouter();
  const [receivedPresentList, setReceivedPresentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initReceivedPresentList = async () => {
      try {
        const res = await PresentService.getLoggedUserPresentList();
        setReceivedPresentList(res.data.data.content);
        // console.log(res.data.data.content, ">>>>받은선물리스트");
      }catch (e){
        console.log(e)
        // alert("로그인이 필요합니다✨")
        router.push('/login')
      }
      setIsLoading(false);
    };
    initReceivedPresentList();
  }, []);

  return (
    <TabFlex>
      {isLoading ?
        <PrepareingContainer>
          <Img src="/assets/image/character/spinner.gif" alt="로딩하얀코"/>
          <PrepareingHeader>선물 불러오는중...</PrepareingHeader>
        </PrepareingContainer> :
        <>
          {receivedPresentList.length > 0 ? receivedPresentList.map((present) => (
          <Card
            key={present.id}
            id={present.id}
            date={present.receivedDate}
            from={present.nickname}
            contents={present.contents}
            thumbnail={present.imageURL}
            type={"RECEIVED"}
            isRead={present.isRead}
          />
        )) :
          (<PrepareingContainer>
            <Img src="/assets/image/character/face_cry.png" alt="울고있는하얀코"/>
            <PrepareingHeader>받은선물이 없습니다</PrepareingHeader>
          </PrepareingContainer>
          )
        }
        </>
      }
    </TabFlex>
  );
};
export default ReceivedPresentList;
