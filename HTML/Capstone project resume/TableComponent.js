import React from 'react';

const TableComponent = ({ data }) => {
    return (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Email</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Status</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Roll No</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Remarks</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.name}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.email}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.status}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.roll_no}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.remarks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
