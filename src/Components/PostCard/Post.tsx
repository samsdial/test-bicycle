import React, {useEffect, useState, Fragment} from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks/useTypedSelector'
import { fetchPosts } from '../../store/actions/action-creator/postActions';
import { Row, Col } from '@bootstrap-styled/v4';

import Aside from './Aside';
import Paginate from './Paginate'
import Loader from '../inc/Loader'
import PostCard from './PostCard'

const Posts = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((state) => state.PostReducers);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangeSearch = (e: any) => {
		if(e.target.value.length > 0) {
			setCurrentPage(1);
		}
		setSearch(e.target.value);
	}

    useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

    const dataBike =  posts?.bikes

    const postPerPage = 11;
    const totalPosts = dataBike?.length || 0;

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    const filterPosts = dataBike?.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <Row>
            <Col md={4} lg={3}>
                <Aside search={search} setSearch={setSearch} onChange={handleChangeSearch}/>
            </Col>
            {loading ? (
                <Loader />
            ) : (
                <Col>
                    <Row>
                        {totalPosts > 0 ? (
                            <Col>    
                                {filterPosts?.map((post) => (
                                    <PostCard post={post} key={post.id}  />
                                ))}
                            </Col>    
                        ):(
                            <Col>    
                                No se encuentran busqueda
                            </Col>
                        )}
                    </Row>
                    <Row>
                        <Col className="text-center">
                            {totalPosts > postPerPage && (
                                <Paginate
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    totalPosts={totalPosts}
                                    postPerPage={postPerPage}
                                />
                            )}
                        </Col>
                    </Row>
                </Col>
            )}
        </Row>
    );
}

export default Posts;
