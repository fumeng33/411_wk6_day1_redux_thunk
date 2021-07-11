import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';

const Import = (props) => {
    // fill out this component
    return (
        <Container>
            <br />
            <Button
                variant='contained'
                color='primary'
                onClick={props.fetchMakes}
            >Import</Button>

            <br />
            <h2>COUNT: {props.make.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.makes.map((make, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <Button aria-controls={`${index}-simple-menu`} aria-haspopup='true' onClick={() => props.removeMake(index)}>DELETE</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })};
                </TableBody>
            </Table>
        </Container>
    );
};

export default Import