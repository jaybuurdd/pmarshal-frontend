import React from 'react';

const BasicCard = ({ title, fields, width, height, topPadding }) => {
    const cardStyle = {
        width: width || 'auto',
        height: height || 'auto'
    }
   
    const topPaddingStyle = {
        paddingTop: topPadding ? `${topPadding * 0.25}rem` : '0'
    }
    console.log(topPaddingStyle);
    return (
        // <div className={`${topPaddingStyle}`}>
        <div style={topPaddingStyle}>
            <div className='bg-custom-matt-white hover:bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out'
                style={cardStyle}
                >
                <h3 className='text-lg font-bold mb-2'>{ title }</h3>
                <div>
                { fields.map((field, index) => (
                    <div key={index} className='mb-1'>
                        <span className='font-semibold italic'>{ field.label }: </span>
                        <span className='font-semibold text-green-700 italic'>{ field.value }</span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default BasicCard;