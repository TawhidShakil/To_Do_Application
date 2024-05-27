import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'

const BulkController = ({ clearSelected, clearCompleted, clearReset }) => (
    <ButtonGroup>
        <Button color='danger' onClick={clearSelected}>Clear Selected</Button>
        <Button color='danger' onClick={clearCompleted}>Clear Completed</Button>
        <Button color='danger' onClick={clearReset}>Reset</Button>
    </ButtonGroup>
)

BulkController.propTypes = {
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    clearReset: PropTypes.func.isRequired
}

export default BulkController
