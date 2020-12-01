import React, { Component } from 'react'; //import React Component

export class FilterItem extends Component {
    render() {
        let filterTitle = this.props.title; 
        
        let filterOptions = this.props.options.map((filterOption) => {
            return <option value={filterOption}>{filterOption}</option>
        });

        return (
            <div className='filter-item'>
                <h2>{filterTitle}</h2>
                <select name={this.props.name}>
                    <option value='none' selected disabled hidden>
                        {this.props.name}
                    </option>
                    {filterOptions}
                </select>
            </div>
        );
    }
}