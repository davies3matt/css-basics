import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
/** Styling */
import styled from 'styled-components';
import './styles.css';

const ContentWrapper = styled.div`
  height: 100%;
  background: #EDFDFB;
  min-height: 90vh;
  position: relative;
  left: 15%;
`;

const SideBar: React.FC = (props) => {
    const { children } = props;

    const history = useHistory();

    const directTo = (path: string) => {
        history.push(path);
    }

    return (
        <Fragment>
        <div className="sideBar">
            <h1 className="sideLink" onClick={() => directTo('/display')}>Display</h1>
            <h1 className="sideLink">Position</h1>
            <h1 className="sideLink">Float</h1>
        </div>
        <ContentWrapper>{children}</ContentWrapper>
        </Fragment>
    );
}

export default SideBar;