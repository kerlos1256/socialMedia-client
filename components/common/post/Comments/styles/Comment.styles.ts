import styled from "styled-components";

export const CommentContainer = styled.div`
  /* background-color: #005000; */
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  border-radius: 0.2rem;
  box-shadow: 0px 6px 10px -4px grey;
`;

export const UserContainer = styled.div`
  /* background-color: #fff; */
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UserImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
`;

export const UserInfo = styled.div``;

export const CommentBody = styled.div`
  display: flex;
  align-items: center;
`;
