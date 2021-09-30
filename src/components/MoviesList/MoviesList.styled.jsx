import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

export const List = styled.ul`
    margin:0;
    margin-top: 10px;
    padding:0;
    display: grid;
    width: 1000px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-auto-rows: 325px;
    grid-gap: 12px; 
    padding: 0;
    list-style: none;
    
    
  `
export const Item = styled.li`
    margin-bottom:0px;
    padding:7px;

    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.12), 2px 2px 2px 2px rgba(0, 0, 0, 0.06),
      2px 4px 6px rgba(0, 0, 0, 0.16);
    outline: none;
  `

export const Image = styled.img`
    margin-bottom:6px;
`
export const StyledLink = styled(Link)`
    font-weight: 600;
    font-size: 14px;
    line-height: 1.175;
    color: #524e4e;

    
  `