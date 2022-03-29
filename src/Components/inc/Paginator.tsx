import React from 'react'
import styled from 'styled-components'
import { classNames } from '../../utils/classes'
import { Card } from '@bootstrap-styled/v4'
import { omit } from 'ramda'

// type definition
export type PaginatorEntityProps = {
    className?: string
} & React.ComponentProps<typeof Card>


const PaginatorEntity = styled(
    (attrs: PaginatorEntityProps): JSX.Element => <Card {...omit(['state'], attrs)} />
).attrs(props => ({
    className: classNames(props.className)
}))`
    && {
        border: 0px solid transparent;
        /*box-shadow: 0px 3px 7px 0px #DCDCDC;
        min-width: 350px;
        border-bottom: 0px; */
        /* margin-bottom: 15px; */
        .pagination { 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5rem;
            border-radius: 0.6rem;
            background: #ffffff;
            box-shadow: 0px 3px 7px 0px #DCDCDC;
            .page-item {
                display: flex;
                justify-content: center;
                margin: 0.8rem;
                align-items: center;
                &.active {
                    color: #ffffff;
                    background: #23adad;
                    font-weight: 600;
                    border: 1px solid #23adad;
                    .page-link  {
                        background: transparent;
                        border: 0px solid transparent;
                        width: 2rem;
                        height: 2rem;
                        color: #ffffff;
                        cursor: pointer;
                    }
                }
                &.disabled {
                    .page-link  {
                        color: silver;
                        cursor: not-allowed;
                    }
                }
                .page-link  {
                    background: transparent;
                    border: 0px solid transparent;
                    width: 2rem;
                    height: 2rem;
                    font-size: 1rem;
                    color: #23adad;
                    cursor: pointer;
                }
            }
        }
    }
`
export default PaginatorEntity
