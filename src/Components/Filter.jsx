import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Breadcrumb } from 'semantic-ui-react'

import { countAllTasks, countActiveTasks, countCompleteTasks } from '../store/taskReducer'

function Filter({ filter, onFilterChange, options }) {
    const counts = [
        useSelector(countAllTasks),
        useSelector(countActiveTasks),
        useSelector(countCompleteTasks),
    ]

    function changeFilter(option) {
        return function (event) {
            onFilterChange(option);
        }
    }

    return (
        <div className='filter-container'>
            {'Show: '}
            <Breadcrumb>
                {
                    options.map((option, index) => 
                        <React.Fragment key={option}>
                            <Breadcrumb.Section 
                                active={filter === option} 
                                link={filter !== option} 
                                onClick={changeFilter(option)}
                            >
                                {`${option} (${counts[index]})`}
                            </Breadcrumb.Section>
                            {index <options.length - 1 && <Breadcrumb.Divider />}
                        </React.Fragment>)
                }
            </Breadcrumb>
        </div>
    )
};

export default Filter;