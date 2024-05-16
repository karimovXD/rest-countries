import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Space } from 'antd'
//components
import SearchInput from '../components/SearchInput'
import SelectRegion from '../components/SelectRegion'
import CountryCard from '../components/CountryCard'
//service
import { PostService } from '../service/PostService'

const SelectedRegion = () => {
    const { title } = useParams();

    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleGetSelectedCountry = async () => {
        try {
            const response = await PostService.selectRegion(title);
            setSelectedCountry(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetSelectedCountry();
    }, [])

    return (
        <section className='w-full h-auto xxl:w-[1440px] m-auto px-5 pt-14'>
            <Space className='w-full flex justify-between' wrap>
                <SearchInput />
                <SelectRegion />
            </Space>
            <div className='w-full flex items-start justify-center gap-5 xxl:justify-between flex-wrap pt-14'>{
                selectedCountry?.map((item, i) => {
                    return <CountryCard country={item} key={i} />
                })
            }</div>
        </section>
    )
}

export default SelectedRegion