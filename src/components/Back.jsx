import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons';


const Back = ({ children }) => {
    return (
        <Link to='/'>
            <Button icon={<LeftOutlined />} size='large' className='font-semibold'>{children}</Button>
        </Link>
    )
}

export default Back;