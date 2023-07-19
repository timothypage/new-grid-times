import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { COLORS, QUERIES } from '../../constants'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Logo from '../Logo'
import Button from '../Button'

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <ActionGroupRight>
          <SubscribeButton>Subscribe</SubscribeButton>
          <Link>Already A Subscriber?</Link>
        </ActionGroupRight>
      </MainHeader>
    </header>
  )
}

const Link = styled.div`
  font-size: ${14/16}rem;
  font-style: italic;
  text-decoration: underline;
  text-align: center;
`;

const StyledLogo = styled(Logo)`
  grid-area: middle;
`;

const SubscribeButton = styled(Button)`
  align-self: center;
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`

const ActionGroupRight = styled(DesktopActionGroup)`
  justify-self: end;
  align-self: center;

  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  padding-top: 16px;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;

  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    margin-top: 16px;
    margin-bottom: 72px;
    grid-template-columns: 1fr auto 1fr;
  }
`

export default Header
