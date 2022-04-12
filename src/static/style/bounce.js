import { keyframes } from 'styled-components';

const bounce = keyframes`
    0% {
    transform: translateX(0);
    }
    100% {
    transform: translateX(15px);
    }
`;

export default bounce;
