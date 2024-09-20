import Paper from '@mui/material/Paper';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import Header from "../../components/admin/Header";
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../config/axios.config';
import { IUser } from '../../interface';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'img', headerName: 'Image', width: 130, renderCell: (params: GridCellParams) => <img className='w-[80px] h-full' src={params.value as string} alt="user" /> }, // Assuming img is a URL
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'job', headerName: 'Job', width: 130 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'educationalDegree', headerName: 'Educational Degree', width: 180 },
];

const paginationModel = { page: 0, pageSize: 5 };

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const getAllUsers = async () => {
        try {
            const { data, status } = await axiosInstance.get("/auth/getAllusers", {
                withCredentials: true,
            });
            if (status === 200) {
                setUsers(data.data.users);
            }
        } catch (error) {
            console.error("Error fetching users", error);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    // Convert the users to the required rows format
    const rows = users.map((user, index) => ({
        id: index + 1,
        img: user.photo || '',
        name: user.name,
        address: user.country,
        job: user.job,
        phoneNumber: user.phone,
        educationalDegree: user.Educationaldegree,
    }));

    return (
        <div>
            <Header />
            <div className="px-4">
                <Paper sx={{ height: 600, width: '100%' }} elevation={0}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        rowHeight={80}
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
        </div>
    );
}

export default Users;
