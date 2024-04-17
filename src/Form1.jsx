import React, { PureComponent } from 'react';

class Form1 extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            lang_ua: false,
            lang_en: false,
            selectedCity: '',
            description: '',
            errors: {
                userName: '',
                email: '',
                selectedCity: '',
                description: ''
            },
            submittedData: []
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleCheckChange = (e) => {
        this.setState({[e.target.name]: e.target.checked});
    };

    handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === 'userName') {
            this.validateName(value);
        } else if (name === 'email') {
            this.validateEmail(value);
        } else if (name === 'selectedCity') {
            this.validateCity(value);
        } else if (name === 'description') {
            this.validateDescription(value);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            const { userName, email, lang_ua, lang_en, selectedCity, description } = this.state;
            const newData = {
                userName,
                email,
                languages: `UA: ${lang_ua ? "Yes" : "No"}, EN: ${lang_en ? "Yes" : "No"}`,
                selectedCity,
                description
            };
            this.setState(prevState => ({
                submittedData: [...prevState.submittedData, newData]
            }));
        }
    };

    validateName = (name) => {
        let errorMessage = name.length < 3 ? 'Имя должно содержать больше 3 символов' : '';
        this.setState(prevState => ({
            errors: { ...prevState.errors, userName: errorMessage }
        }));
    };

    validateEmail = (email) => {
        let errorMessage = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ? '' : 'Неверный адрес электронной почты';
        this.setState(prevState => ({
            errors: { ...prevState.errors, email: errorMessage }
        }));
    };

    validateCity = (city) => {
        let errorMessage = city === '' ? 'Выберите город' : '';
        this.setState(prevState => ({
            errors: { ...prevState.errors, selectedCity: errorMessage }
        }));
    };

    validateDescription = (description) => {
        let errorMessage = description.trim().length === 0 ? 'Описание не может быть пустым' : '';
        this.setState(prevState => ({
            errors: { ...prevState.errors, description: errorMessage }
        }));
    };

    validateForm = () => {
        const { errors } = this.state;
        for (let key in errors) {
            if (errors[key] !== '') return false;
        }
        return true;
    };

    render() {
        const { userName, email, selectedCity, description, submittedData, errors } = this.state;
        return (
            <>
                <h2>Form1</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        placeholder='Имя' 
                    />
                    {errors.userName && <p style={{ color: 'red' }}>{errors.userName}</p>}

                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        placeholder='Email' 
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                    <hr />

                    <input 
                        type="checkbox"
                        id="lang_ua"
                        name="lang_ua"
                        checked={this.state.lang_ua}
                        onChange={this.handleCheckChange}
                    />
                    <label htmlFor="lang_ua">UA</label>

                    <input 
                        type="checkbox"
                        name="lang_en"
                        id="lang_en"
                        checked={this.state.lang_en}
                        onChange={this.handleCheckChange} 
                    />
                    <label htmlFor="lang_en">EN</label>

                    <select value={selectedCity} onChange={this.handleChange} onBlur={this.handleBlur} name="selectedCity">
                        <option value="">Выберите город</option>
                        <option value="odesa">Одесса</option>
                        <option value="kyiv">Киев</option>
                       <option value="lviv">Львов</option>
                       <option value="dnipro">Днепр</option>
</select>

                    {errors.selectedCity && <p style={{ color: 'red' }}>{errors.selectedCity}</p>}

                    <textarea
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        placeholder="Какой-то текст :)"
                        style={{ width: '100%', height: '100px' }}
                    ></textarea>
                    {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

                    <button type="submit">Отправить</button>
                </form>

                <div>
                  <h2>Отправленные данные:</h2>
                   {submittedData.map((data, index) => (
                    <div key={index}>
            <p>Имя: {data.userName}</p>
            <p>Email: {data.email}</p>
            <p>Языки: {data.languages}</p>
            <p>Город: {data.selectedCity}</p>
            <p>Описание: {data.description}</p>
        </div>
    ))}
</div>

                <hr />
            </>
        );
    }
}

export default Form1;
