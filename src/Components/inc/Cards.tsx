import React from 'react'
import styled from 'styled-components'
import { classNames } from '../../utils/classes'
import { Card } from '@bootstrap-styled/v4'
import { omit } from 'ramda'

// type definition
export type CardEntityProps = {
    className?: string
} & React.ComponentProps<typeof Card>


const CardEntity = styled(
    (attrs: CardEntityProps): JSX.Element => <Card {...omit(['state'], attrs)} />
).attrs(props => ({
    className: classNames(props.className)
}))`
    && {
        border: 0px solid #DCDCDC;
        box-shadow: 0px 3px 7px 0px #DCDCDC;
        min-width: 350px;
        border-bottom: 0px;
        margin-bottom: 15px;
        ul { 
            list-style-type: none;
            padding: 0; 
            margin: 0;
            
        }
        img { 
            width: 150px;
            margin: 12px;
            background: #f7f7f9;
        }
        .link {
            color: #FFFFFF !important;
        }
        .btn-more {
            color: #FFFFFF !important;
            font-weight: bold;
        }
        .card{
            &-header:first-child {
                border-radius: 0;
            }
            &-title {
                color: #23adad; 
                margin-bottom: 0.3rem;
            }
            &-subtitle { 
                color: #C0C0C0; 
            }
            &-block { 
                padding: 10px 0;
                margin: 0 10px;
                border-top: 0px solid transparent;
            }
            &-text{
                margin: 0;
                color: #808080;
                font-size: 15px;
            }
            &-icon {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                span { 
                    background-color: #00CED1;
                    width: 100px;
                    height: 91px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    margin: -45px;
                    z-index: 1;
                }
            }
        }
    }
`
export default CardEntity
