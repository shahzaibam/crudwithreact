import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr colspan="3"><td>Esta vacio</td></tr> : data.map(el => <CrudTableRow key={el.id} el={el}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default CrudTable;
