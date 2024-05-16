import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Skeleton, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons'
//components
import CountryCard from '../components/CountryCard';
//service
import { PostService } from '../service/PostService';

const SearchedCountry = () => {
    const { title } = useParams();
    const [searchedCountry, setSearchedCountry] = useState(null);

    const handleGetSearchedCountry = async () => {
        try {
            const response = await PostService.searchCountry(title);
            setSearchedCountry(response)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetSearchedCountry();
    }, [])

    return (
        <div>{
            searchedCountry ?
                <section className='w-full h-auto xxl:w-[1440px] m-auto px-5 pt-14'>
                    <Link to='/'>
                        <Button icon={<LeftOutlined />} size='large' className='font-semibold'>Back</Button>
                    </Link>
                    <div className='w-full flex items-start justify-center gap-5 xxl:justify-between flex-wrap pt-14'>{
                        searchedCountry?.map((item, i) => {
                            return <CountryCard country={item} key={i} />
                        })
                    }</div>
                </section> :
                <Skeleton />
        }</div>
    )
};

export default SearchedCountry;