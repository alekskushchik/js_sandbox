import React from 'react';

export default class CountrySelect extends React.Component {
    constructor() {
        super();
        this.state = {
            country: [
                {}
            ],
            item: 0,
        };
        this.getCountriesList();
    }
    getCountriesList() {
        fetch('https://restcountries.eu/rest/v2/all',{
            method: 'GET',
        })
            .then(response => response.json())
            .then(response => {

                this.setState({
                    country: response,
                });
                this.loadList();
            });
    }
    loadList(){
        let result = [];
        for (let i = 0; i < this.state.country.length; i += 1){

            result.push(
                <li key={i}>
                    <div>
                        <img src={this.state.country[i]['flag']}></img>
                    </div>
                    {this.state.country[i]['name']}<br/>
                    Capital: {this.state.country[i]['capital']}
                </li>)
        }
        return result;
    }
    render() {
        return (
            <ul style={{height: `${this.props.height}`}}>
                {this.loadList()}
            </ul>
        );
    }
}
