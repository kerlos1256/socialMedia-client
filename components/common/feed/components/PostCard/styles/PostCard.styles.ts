import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const PostCardContainer = styled.div`
  margin-bottom: 1rem;
  box-shadow: 0px 6px 10px -4px grey;
`;

export const PostBodyContainer = styled.div`
  margin-left: 0.5rem;
  padding: 0.5rem;
`;

export const PostDelete = styled.div`
  cursor: pointer;
  padding: 0.5rem;
`;

export const ReactionsContainer = styled.div`
  /* background-color: salmon; */
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
`;

export const CommentsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding-left: 0.5rem;
  cursor: pointer;
  font-size: 1.4rem;
`;

export const PostUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 6px 8px -4px #93b5c6;
`;

export const PostUserImg = styled.img`
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  height: 90%;
  width: auto;
`;

export const PostUserInfo = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0.5rem;
`;

export const ReactionsCon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

export const EmojisContainer = styled.div`
  display: flex;
  /* background-color: aqua; */
  width: fit-content;
  clip-path: inset(0% 0% 0% 80%);
  transition: clip-path 0.2s linear;
  &:hover {
    clip-path: inset(0% 0% 0% 0%);
  }
`;

export const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin: 0.2rem;
  cursor: pointer;
`;

export const ReactionsLength = styled.div<{ reacted: boolean }>`
  color: ${(props) => (props.reacted ? "blue" : "black")};
`;
