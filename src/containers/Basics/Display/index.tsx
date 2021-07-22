import React, { useEffect, useState } from 'react';
/** Utils */
import { DisplayTypes } from '../../../utils/constants';
/** Styling */
import './styles.css'
/** Styled Componenets */
import { Heading, Box, Text, TextCode, Button } from './styles';
/** Components */
import Block from './Block';
import Inline from './Inline';
import InlineBlock from './InlineBlock';

const Display: React.FC = () => {

    // states
    const [ displayType, setDisplayType ] = useState(DisplayTypes.INLINE);

    useEffect(() => {
        
        Object.values(DisplayTypes).map(type => {
            const button = document.getElementById(type);
            if(button && type === displayType) {
                button.classList.add('active');
            } else {
                button?.classList.remove('active');
            } 
            return null;
        });
    }, [displayType])

    return (
        <React.Fragment>
            <Box
                style={{
                    marginLeft: '25px',
                    padding: '20px'
                }}
            >
                <Heading>Display</Heading>
                <Text style={{marginTop: '50px'}}>
                    {`The `}
                    <TextCode>display</TextCode> 
                    {` property specifies the display behavior (the type of rendering box) of an element`}
                </Text>
                <Button 
                    id={DisplayTypes.INLINE} 
                    style={{ marginTop: "20px"}}
                    onClick={() => setDisplayType(DisplayTypes.INLINE)}
                    >
                    :inline
                </Button>
                <Button 
                    id={DisplayTypes.INLINE_BLOCK} 
                    style={{ marginTop: "20px", marginLeft: "20px"}}
                    onClick={() => setDisplayType(DisplayTypes.INLINE_BLOCK)}
                    >
                    :inline-block
                </Button>
                <Button 
                    id={DisplayTypes.BLOCK} 
                    style={{ marginTop: "20px", marginLeft: "20px"}}
                    onClick={() => setDisplayType(DisplayTypes.BLOCK)}
                    >
                    :block
                </Button>
                <Box style={{marginTop: '25px'}}>
                    {displayType === DisplayTypes.BLOCK && <Block/>}
                    {displayType === DisplayTypes.INLINE && <Inline/>}
                    {displayType === DisplayTypes.INLINE_BLOCK && <InlineBlock/>}
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default Display;