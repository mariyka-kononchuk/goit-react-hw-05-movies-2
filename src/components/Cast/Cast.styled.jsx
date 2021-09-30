import styled from '@emotion/styled'

  export const List = styled.ul`
    margin:0;
    margin-top:10px;
    padding:0;
    display: grid;
    width: 1000px;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-auto-rows: 320px;
    grid-gap: 12px; 
    padding: 0;
    list-style: none;  
  `
export const Image = styled.img`
padding:10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    outline: none;
     margin-bottom:6px;
   
  width: 100%;
  height: 260px;
  object-fit: contain;
  `
  export const Name = styled.p`
    margin-bottom: 5px;

    font-weight: 600;
    font-size: 18px;
    line-height: 1.175;
    color: #b86b82; 
  `

  export const Character = styled.p`
    margin-bottom: 5px;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.175;
    color: #504c4c; 
  `

   export const CharacterStyle = styled.span`
  
    font-style: italic;
  `