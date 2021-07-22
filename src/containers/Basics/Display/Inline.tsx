import React, { Fragment } from 'react';
/** Styled Componenets */
import { Text, TextCode, Box, BoxInline, Heading } from './styles';

const Inline: React.FC = () => {

    return(
        <Fragment>
            <Heading>:inline</Heading>
            <ul style={{marginTop: '20px'}}>
                <li>
                    <Text>
                        {`Most elements have a default `}
                        <TextCode>display</TextCode> 
                        {` value of `}
                        <TextCode>:inline</TextCode>
                    </Text>
                </li>
                <li>
                    <Text>
                        <TextCode>width</TextCode>
                        {` and `}
                        <TextCode>height</TextCode>
                        {` properties have no effect on `}
                        <TextCode>:inline</TextCode>
                        { `elements`}
                    </Text>
                </li>
                <li>
                    <Text>
                        <TextCode>:inline</TextCode>
                        {` elements accept `}
                        <TextCode>padding</TextCode>
                        {` and `}
                        <TextCode>margin</TextCode>
                        {` properties. But will only push away other elements horizontally`}
                    </Text>
                </li>
                <Box
                    style={{
                        marginTop: '80px',
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
                    <BoxInline>:hover over me!</BoxInline>
                    {` These properties are respected only by `}
                    <TextCode>horizontal</TextCode>
                    { ` elements`}
                </Box>
                <li>
                <Box
                    style={{
                        marginTop: '80px',
                        fontSize: '20px',
                        fontWeight: 250,
                    }}
                >
                    <Text>
                    <TextCode>:inline</TextCode>
                    {` elements are great for lining up elements `}
                    <TextCode>horizontally</TextCode>
                    {` and will always take up only the necessary `}
                    <TextCode>width</TextCode>
                    {` + `}
                    <TextCode>padding</TextCode>
                    {` and `}
                    <TextCode>margin</TextCode>
                    </Text>
                </Box>
                <Box
                    style={{
                        marginTop: '80px',
                        fontSize: '20px',
                        fontWeight: 250,
                    }}
                >
                    <BoxInline>yo</BoxInline>
                    <BoxInline>greasy beans</BoxInline>
                    <BoxInline>kill</BoxInline>
                    <BoxInline>skinny jeans</BoxInline>
                    <BoxInline>you definetely know what i</BoxInline>
                    <BoxInline>mean</BoxInline>
                </Box>
                </li>
            </ul>
        </Fragment>
    );
}

export default Inline;