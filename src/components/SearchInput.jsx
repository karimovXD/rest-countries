import React from 'react';
import { Input, message } from 'antd'
import { PostService } from '../service/PostService';
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
    const navigate = useNavigate();

    const handleSearchCountry = async e => {
        try {
            if (e.length < 2) return
            const response = await PostService.searchCountry(e);
            navigate(`/country/${e}`);
        } catch (error) {
            console.log(error);
            message.error('Country not found!')
        }
    }

    return (
        <Input.Search allowClear className='w-auto xs:w-[330px]' size='large' onSearch={handleSearchCountry} placeholder='Search for a country...' />
    )
}

export default SearchInput