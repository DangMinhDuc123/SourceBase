import styled from 'styled-components'
import theme from '../../theme'


export const AppWrapper = styled.div`
  .btn {
    font-weight: ${theme.fontWeightBold};
    font-size: ${theme.fontSizeMedium};
    line-height: 1.5;
    border-radius: ${theme.borderRadiusMedium};
    padding: .375rem .75rem;
  }

  .btn-primary {

    background: ${theme.blue};
    color: ${theme.white};
  
    ${theme.transitionFade()}
  }

  .btn-secondary {
    background: ${theme.grey};
    color: ${theme.white};
    ${theme.transitionFade()}
  }

  .btn-success {
    background: ${theme.green};
    color: ${theme.white};
    ${theme.transitionFade()}
  }

  .btn-danger {
    background: ${theme.red};
    color: ${theme.white};
    ${theme.transitionFade()}
  }

  .btn-warning {
    background: ${theme.yellow};
    color: ${theme.white};
    ${theme.transitionFade('fade-out')}
  }

  .btn-info {
    background: ${theme.blue1};
    color: ${theme.white};
    ${theme.transitionFade('fade-out')}
  }

  .btn-dark {
    background: ${theme.black1};
    color: ${theme.white};
    ${theme.transitionFade('fade-out')}
  }
  `


