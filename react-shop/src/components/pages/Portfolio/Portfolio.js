import React from 'react';

function Portfolio()
{
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-center bg-gray-100 p-10">
                <h1>Main APP</h1>
            </div>
            <div className="flex flex-wrap justify-center justify-evenly bg-gray-100 p-10">
                <h1>Secondary APP 1</h1>
                <h1>Secondary APP 2</h1>
            </div>
            <div className="flex flex-wrap justify-center justify-evenly bg-gray-100 p-10">
                <h1>Secondary APP 3</h1>
                <h1>Secondary APP 4</h1>
            </div>
        </div>
    );
}

export default Portfolio;

