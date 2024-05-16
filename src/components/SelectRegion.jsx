import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Select } from 'antd';

const SelectRegion = () => {
    const navigate = useNavigate();

    const handleSelectRegion = async (title) => {
        if (title === 'all') {
            navigate('/')
        } else {
            navigate(`/region/${title}`)
        }
    }

    return (
        <Select
            defaultValue="All"
            style={{ width: 120 }}
            size='large'
            placeholder='Filter by Region'
            onChange={handleSelectRegion}
            options={[
                { value: 'all', label: 'All' },
                { value: 'africa', label: 'Africa' },
                { value: 'america', label: 'America' },
                { value: 'asia', label: 'Asia' },
                { value: 'europe', label: 'Europe' },
                { value: 'oceania', label: 'Oceania' },
            ]}
        />
    )
}

export default SelectRegion