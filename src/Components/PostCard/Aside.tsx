import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { 
    InputGroup, 
    Input,
    CardBlock,
    CardTitle,
} from '@bootstrap-styled/v4'
import { searchPosts } from '../../store/actions/action-creator/postActions';
import FilterEntity from '../inc/Filter'

interface AsideProps {
    search: any
    onChange: any
    setSearch: any
}

const Aside: React.FC<AsideProps> = ({ search, setSearch, onChange }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchPosts(search));
    }, [dispatch, search]) 
    
    return (
        <FilterEntity>
            <CardBlock className="text-left">
                <CardTitle tag="h4" className="mb-2 mr-5">Filtro:</CardTitle>
                <InputGroup className="w-75 group-search w-100">
                    <Input pattern="[#]" className="group-search-input" type="text" placeholder="Buscar..." value={search}
                            onChange={onChange}/>
                </InputGroup>
            </CardBlock>
        </FilterEntity>
    );
};

export default Aside


