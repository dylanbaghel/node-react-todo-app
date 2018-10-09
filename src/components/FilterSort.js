import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByASC, sortByDSC } from './../actions/filterAction';

const FilterSort = (props) => {
    return (
        <div className="d-flex justify-content-between">
            <div className="form-group w-75">
                <input
                    type="text"
                    placeholder="Search Todo...."
                    onChange={(e) => {
                        let text = e.target.value;
                        props.setTextFilter(text.trim());
                    }}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <select className="form-control" onChange={(e) => {
                    if (e.target.value === 'asc') {
                        props.sortByASC();
                    } else if (e.target.value === 'dsc') {
                        props.sortByDSC();
                    }
                }}>
                    <option value="asc">A-Z</option>
                    <option value="dsc">Z-A</option>
                </select>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByASC: () => dispatch(sortByASC()),
        sortByDSC: () => dispatch(sortByDSC())
    };
};

export default connect(undefined, mapDispatchToProps)(FilterSort);