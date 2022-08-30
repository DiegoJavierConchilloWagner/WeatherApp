import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body {        
        height: 100vh;
        font-family: ${({ theme }) => theme.fonts.primary};
        color: ${({ theme }) => theme.colors.typography.primary};
        background: ${({ theme }) => theme.colors.gradientBackground.background} no-repeat, ${({ theme }) =>
	theme.colors.gradientBackground.repeat} repeat;
    }

    
    main{
        padding: 0 16px;
    }
`;
