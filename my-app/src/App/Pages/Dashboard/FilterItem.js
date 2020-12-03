import React, { Component } from 'react'; //import React Component

export class FilterItem extends Component {
    render() {
        let filterTitle = this.props.title; 
        let filterId = this.props.id;
        
        let filterOptions = this.props.options.map((filterOption) => {
        return <option key={filterOption} value={filterOption}>{filterOption} </option>
        });

        return (
            <div className='filter-item'>
                <h4>{filterTitle}</h4>
                <select className={filterId} defaultValue='all' key='all'>
                    <option value='all'>
                        {this.props.name}
                    </option>
                    {filterOptions}
                </select>
            </div>
        );
    }
}