import React from "react";

function UserInput () {
    return (
        <div>
        <form className='user-data-form'>
        <input className='user-data-input'
          name="name"
          placeholder="Имя"
          
        />
        <input className='user-data-input'
          name="surname"
          placeholder="Фамилия"
        />
        <input className='user-data-input'
          name="patronymic"
          placeholder="Отчество"
        />
        <input className='user-data-input'
          name="address"
          placeholder="Адрес"
        />
        </form>
        </div>
    )
}

export default UserInput;