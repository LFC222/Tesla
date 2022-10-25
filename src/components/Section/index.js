import React from 'react'
import 
{
    Wrap,
    Buttons,
    ItemText,
    DownArrow,
    LeftButton,
    RightButton,
    ButtonGroup,
} from './styles'


function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {
                    rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section