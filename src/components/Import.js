import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from 'material-ui/core'
import { MoreVert } from '@material-ui/icons';

const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = [ 'delete'];


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
                    {props.makes.map((make, index) => (
                        <TableRow key={make.id}>
                            <TableCell component='th' scope='row'>
                                {make.MakeId}
                            </TableCell>

                            <TableCell>{make['MakeName']}</TableCell>
                            <TableCell>{make['VehicleTypeName']}</TableCell>
                            <TableCell>
                                <Meau index={index} />
                            </TableCell>
                        </TableRow>
                    ))};
                </TableBody>
            </Table>

            <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
				{options.map((option) => (
					<MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
						{option}
					</MenuItem>
				))};
			</Menu>
        </Container>
    );
};

export default Import