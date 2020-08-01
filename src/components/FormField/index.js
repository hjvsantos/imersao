import React from 'react';

function FormField({titulo, type, name, value, onChange}){
return(
    <div>
        <label>
            {titulo} 
            <input
            type = {type}
            name = {name}
            value={value}
            onChange = {onChange}
              />
        </label>
        </div>
)
}

export default FormField;