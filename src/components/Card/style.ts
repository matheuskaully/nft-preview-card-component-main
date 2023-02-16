import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.cardBG};
  padding-top: 20px;

  p, span {
    color: ${({ theme }) => theme.colors.softBlue};
    font-weight: 300;
    font-size: 1.6rem;
  }

  h2, #author-name {
    color: ${({ theme }) => theme.colors.white};
  }

  h2 {
    font-weight: 600;
    padding-bottom: 16px;
  }

  #value-and-day {
    border-bottom: 1px solid ${({ theme }) => theme.colors.softBlue};
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    
    div {
      display: flex;
      align-items: center;

      img {
        padding-right: 5px;
      }
    }

    #value {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.cyan};
    }
  }

  #author {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 8px;
    p, span {
      font-size: 1.4rem;
    }

    img {
      width: 30px;
      border: 1px solid ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      margin-right: 12px;
    }
  }
  
  #img-source {
    width: 260px;
    border-radius: 8px;
    margin: auto;
  }

  #card-inf {
    padding: 20px;
  }
`