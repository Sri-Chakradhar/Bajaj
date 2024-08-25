
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function FilterDemo() {
    const [selectedType, setSelectedType] = useState(null);
    const Type = [
        { name: 'Number', code: 'N' },
        { name: 'Alphabets', code: 'Al' },
        { name: 'Highest lowercase alphabet', code: 'high' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedType} onChange={(e) => setSelectedType(e.value)} options={Type} optionLabel="name" 
                filter placeholder="Select" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}