import React from 'react';

const CrudTableRow = ({el}) => {
    return (
        <tr>
            <th>{el.name}</th>
            <th>{el.age}</th>
            <th>
                <button>Editar</button>
                <button>Borrar</button>
            </th>
        </tr>
    );
};

export default CrudTableRow;
