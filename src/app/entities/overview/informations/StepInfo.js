import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';

function StepInfo(props) {
    const data = props.data;
    const statuses = props.statuses;
    const priorities = props.priorities;

    if (!data) {
        return null
    }

    return (
        <CardContent>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">UID</Typography>
                <Typography className="font-medium" color="text.secondary">{data.uid}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Name</Typography>
                <Typography className="font-medium" color="text.secondary">{data.name}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Project</Typography>
                <Typography className="font-medium" color="text.secondary">{data.project}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Episode</Typography>
                <Typography className="font-medium" color="text.secondary">{data.episode}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Sequence</Typography>
                <Typography className="font-medium" color="text.secondary">{data.sequence}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Asset</Typography>
                <Typography className="font-medium" color="text.secondary">{data.asset}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Status</Typography>
                <Typography className="font-medium" color="text.secondary">{statuses && statuses[data.status]?.name}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Priority</Typography>
                <Typography className="font-medium" color="text.secondary">{priorities && priorities[data.priority]?.name}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Description</Typography>
                <Typography className="font-medium" color="text.secondary">{data.description}</Typography>
            </div>
            <div className="mb-24">
                <Typography className="font-bold mb-4 text-15">Created Date</Typography>
                <Typography className="font-medium" color="text.secondary">{data.created_at && format(new Date(data.created_at), 'dd-MM-y hh:mm:ss')}</Typography>
            </div>

        </CardContent>
    );
}
export default StepInfo;
