import styled from 'styled-components';

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="loader" />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
   
    .loader {
        width: fit-content;
        font-size: 40px;
        font-family: monospace;
        font-weight: bold;
        text-transform: uppercase;
        color: #3bee3e00;
        
        -webkit-text-stroke: 1px #3bee3e;
        background: linear-gradient(90deg, #3bee3e00 33%, #3bee3e 0 67%, #3bee3e00 0) 100%/300%
            100% no-repeat text;
        animation: l12 4s steps(14) infinite;
    }
    .loader:before {
        content: "Loading";
    }
    @keyframes l12 {
        to {
            background-position: 0;
        }
    }
`;

export default Loader;
