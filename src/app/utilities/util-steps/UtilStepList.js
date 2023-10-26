import React from 'react';
import format from 'date-fns/format';
import { useDispatch, useSelector } from 'react-redux';
import { openEditUtilStepDialog, removeUtilStep, selectUtilSteps } from './store/utilStepSlice';
import MuiTable from '@/components/core/Table/MuiTable';
import { Typography } from '@mui/material';
import SvgIcon from '@/components/core/SvgIcon';
import { Box, IconButton, Button } from '@mui/material';

function UtilStepList(props) {
	const dispatch = useDispatch()
	const data = useSelector(selectUtilSteps);
	const isLoading = useSelector(({ utilStepApp }) => utilStepApp.utilSteps.isLoading);

	const columns = React.useMemo(
		() => [
			{
				header: 'Id',
				accessorKey: 'id',
				size: 60,
			},
			{
				header: 'Name',
				accessorKey: 'name',
				size: 120,
			},
			{
				header: 'Entity',
				accessorKey: 'entity',
				size: 120,
			},
			{
				header: 'Created At',
				accessorKey: 'created_at',
				sortable: true,
				Cell: ({ cell }) => (
					<span>{cell.getValue() && format(new Date(cell.getValue()), 'dd-MM-y hh:mm:ss')}</span>
				),
			},
		],
		[]
	);

	if (data.length == 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="text.secondary" variant="h5">
					There are no utilSteps!
				</Typography>
			</div>
		)
	}

	return (
		<MuiTable
			isLoading={isLoading}
			data={data}
			columns={columns}
			renderRowActions={({ row, table }) => (
				<Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
					<IconButton
						color="secondary"
						onClick={(ev) => {
							ev.stopPropagation();
							dispatch(openEditUtilStepDialog(row.original));
						}}
					>
						<SvgIcon size={20}>heroicons-outline:pencil-alt</SvgIcon>
					</IconButton>
					<IconButton
						color="error"
						onClick={(ev) => {
							ev.stopPropagation();
							dispatch(removeUtilStep(row.original.id));
						}}
					>
						<SvgIcon size={20}>heroicons-outline:trash</SvgIcon>
					</IconButton>
				</Box>
			)}
		/>
	);
}

export default UtilStepList;
