import { FC, Fragment } from 'react'

import { Container, Row, Col } from '@bootstrap-styled/v4';

import Header from '../Components/PostCard/Header'
import Post from '../Components/PostCard/Post'

const App: FC = () => {

    return (
        <Fragment>
            <Header />
            <Container className="py-2 w-auto">
                <Row>
                    <Col className="text-center">
                        <Post />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
};

export default App