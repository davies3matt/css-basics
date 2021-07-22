import React, { Fragment } from 'react';
/** Styled Components */
import { Heading, Text, TextCode , BoxInlineBlock, Box} from './styles';

const InlineBlock: React.FC = () => {
    return(
        <Fragment>
            <Heading>:inline-block</Heading>
            <ul style={{ marginTop: '20px'}}>
                <li>
                    <Text>
                        <TextCode>width</TextCode>
                        { ` and `}
                        <TextCode>height</TextCode>
                        {` properties can be set`}
                        
                    </Text>
                </li>
                <li>
                    <Text>
                        {`Unlike `}
                        <TextCode>:inline</TextCode>
                        {` elements. `}
                        <TextCode>top</TextCode>
                        {` and `}
                        <TextCode>bottom</TextCode>
                        {` `}
                        <TextCode>margin</TextCode>
                        {` and `}
                        <TextCode>padding</TextCode>
                        {` is respected`}
                    </Text>
                </li>
                <li>
                    <Text>
                        {` Taking up only the neccessary `}
                        <TextCode>width</TextCode>
                    </Text>
                </li>
                <Box
                    style={{
                        marginTop: '30px',
                        fontSize: '20px',
                        fontWeight: 250,
                    }}
                >
                    {`Hover over this `}
                    <TextCode>:inline</TextCode>
                    {` element to add `}
                    <TextCode>padding</TextCode>
                    {` and `}
                    <TextCode>margin</TextCode>
                    {` properties `}
                    <BoxInlineBlock>:hover over me!</BoxInlineBlock>
                    {` These properties are respected by `}
                    <TextCode>horizontal</TextCode>
                    {` and `}
                    <TextCode>vertical</TextCode>
                    { ` elements`}
                </Box>
            </ul>
            <div>
                <BoxInlineBlock>kinda</BoxInlineBlock>
                <BoxInlineBlock>shaky when you</BoxInlineBlock>
                <BoxInlineBlock>hover</BoxInlineBlock>
                <BoxInlineBlock>over these jeans</BoxInlineBlock>
                <BoxInlineBlock>you definetely know what i</BoxInlineBlock>
                <BoxInlineBlock>mean</BoxInlineBlock>
            </div>
        </Fragment>
    );
}

export default InlineBlock;