import React, {useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const datadb = [
    {
        id: 1,
        name: "Superman",
        age: "25"
    },

    {
        id: 2,
        name: "Spiderman",
        age: "19"
    },

    {
        id: 3,
        name: "Capitan America",
        age: "40"
    },

    {
        id: 4,
        name: "Hulk",
        age: "22"
    },

    {
        id: 5,
        name: "Batman",
        age: "21"
    },

]

const CrudApp = () => {

    const [db, setDb] = useState(datadb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now;
        setDb([...db, data])
        console.log(data)
    };

    const updateData = (data) => {};
    
    const deleteData = (id) => {};

    return (
        <div>
            <h1>Crud App</h1>

            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} deleteData={deleteData}/>
        </div>
    );
};

export default CrudApp;
