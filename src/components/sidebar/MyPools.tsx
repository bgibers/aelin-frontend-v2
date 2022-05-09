import React, { useState } from 'react'
import styled from 'styled-components'

import { Filters } from '../pureStyledComponents/common/Filters'
import { TabButton } from '@/src/components/pureStyledComponents/buttons/Button'
import CollapsibleBlock from '@/src/components/sidebar/CollapsibleBlock'
import Pool from '@/src/components/sidebar/Pool'
import { RequiredConnection } from '@/src/hooks/requiredConnection'

const MoreButton = styled(TabButton)`
  border-color: ${({ theme: { colors } }) => colors.textColor};
  color: ${({ theme: { colors } }) => colors.textColor};
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0 0 0;
`

const MyPools: React.FC = ({ ...restProps }) => {
  const [activeFilter, setActiveFilter] = useState<'invested' | 'sponsored' | 'funded' | undefined>(
    'invested',
  )
  const pools = [
    {
      color: 'green',
      name: 'Kwenta DAO',
      href: 'pool/kovan/0xd357ef5070637a862268f9601ab8d60c7c5c0241',
      notifications: 0,
    },
    {
      color: 'yellow',
      name: 'Nukevaults.com',
      href: 'pool/kovan/0xd357ef5070637a862268f9601ab8d60c7c5c0241',
      notifications: 2,
    },
    {
      color: 'blue',
      name: 'Sheldon.1',
      href: 'pool/kovan/0xd357ef5070637a862268f9601ab8d60c7c5c0241',
      notifications: 0,
    },
  ]

  return (
    <CollapsibleBlock title={'My pools'} {...restProps}>
      <Filters justifyContent="space-between">
        <TabButton
          isActive={activeFilter === 'invested'}
          onClick={() => {
            setActiveFilter('invested')
          }}
        >
          Invested (4)
        </TabButton>
        <TabButton
          isActive={activeFilter === 'sponsored'}
          onClick={() => {
            setActiveFilter('sponsored')
          }}
        >
          Sponsored (0)
        </TabButton>
        <TabButton
          isActive={activeFilter === 'funded'}
          onClick={() => {
            setActiveFilter('funded')
          }}
        >
          Funded (0)
        </TabButton>
      </Filters>
      <RequiredConnection text={`You must be logged to see the pools you ${activeFilter} in`}>
        <>
          {pools.map(({ color, href, name, notifications }, index) => (
            <Pool color={color} href={href} key={index} notifications={notifications}>
              {name}
            </Pool>
          ))}
          <ButtonContainer>
            <MoreButton>See more</MoreButton>
          </ButtonContainer>
        </>
      </RequiredConnection>
    </CollapsibleBlock>
  )
}

export default MyPools
