import React, { Component } from 'react';


export default function title ({Name,title})  {
    
        return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize font-wight-">
                        {Name} <strong className="text-bule">{title}</strong>
                    </h1>
                </div>
            </div>
        );
    }

