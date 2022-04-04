import React, {useState} from 'react'
import {ErrorMessage, Submit, ImageUploader} from './Components'
import {useForm} from "react-hook-form";

function CataractsPage() {
    const { register, handleSubmit, control, getValues, reset } = useForm();
    const [error, showError] = useState(false);
    const onSubmit = (values) =>{
        console.log('------>')
        console.log(values);
        console.log('<------')
        for (var key in values) {
            if (values[key]===undefined || values[key]===''){
                console.log(key);
                showError(true);
                showError(false); // this is to reinitialize to false
                return;
            }
        }
        reset();
        console.log(values)
        return;


        // values will be passed to Flask concurrently, not here

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="CataractsPage" style={{height:'75vh'}}>
                <ImageUploader name='cataracts' control={control} register={register}/>
                <Submit/>
                <ErrorMessage error={error}/>
            </div>
        </form>


    );

}

export default CataractsPage;