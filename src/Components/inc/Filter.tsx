import React from 'react'
import styled from 'styled-components'
import { classNames } from '../../utils/classes'
import { Card } from '@bootstrap-styled/v4'
import { omit } from 'ramda'

// type definition
export type FilterEntityProps = {
    className?: string
} & React.ComponentProps<typeof Card>


const FilterEntity = styled(
    (attrs: FilterEntityProps): JSX.Element => <Card {...omit(['state'], attrs)} />
).attrs(props => ({
    className: classNames(props.className)
}))`
    && {
        border: 0px solid transparent;
        box-shadow: 0px 3px 7px 0px #DCDCDC;
        /*box-shadow: 0px 3px 7px 0px #DCDCDC;
        min-width: 350px;
        border-bottom: 0px; */
        /* margin-bottom: 15px; */
    }
`
export default FilterEntity
