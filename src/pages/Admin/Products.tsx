import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaTimes, FaTrashAlt } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi2';
import { useDeleteProductMutation, useEditProductMutation, useGetProductsQuery } from '../../app/features/ProductsSlice';
import Header from "../../components/admin/Header";
import { IProduct } from '../../interface';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 2.5
};


interface IFormInput {
    name: string,
    description: string,
    place: string
    amount: number,
    price: number,
    photo: string[]
}



const paginationModel = { page: 0, pageSize: 5 };

const Products = () => {
    const { data } = useGetProductsQuery({ category: "" });
    const [editProduct] = useEditProductMutation()
    const [deleteProduct] = useDeleteProductMutation()
    const [editedProduct, setEditedProduct] = useState<IProduct | null>(null);
    const [openEditModel, setOpenEditModel] = React.useState(false);
    const [openDeleteModel, setOpenDeleteModel] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>()

    // Handle Edit Product Model
    const handleOpenEditModel = () => setOpenEditModel(true);
    const handleCloseEditModel = () => {
        setOpenEditModel(false);
        setEditedProduct(null);
    };


    // Handle Delet Product Model
    const handleOpenDeleteModel = () => setOpenDeleteModel(true);
    const handleCloseDeleteModel = () => {
        setOpenDeleteModel(false)
        setEditedProduct(null);
    }


    const handleEditClick = (product: IProduct) => {
        setEditedProduct(product)
        handleOpenEditModel(); // Open the modal
    };

    const handleDeleteClick = (product: IProduct) => {
        setEditedProduct(product)
        handleOpenDeleteModel(); // Open the modal
    };


    const onEditSubmit: SubmitHandler<IFormInput> = async (formData) => {
        if (editedProduct) {
            try {
                await editProduct({
                    id: editedProduct._id,
                    product: formData
                })
                toast.success("Product edited successfully", {
                    duration: 2000,
                    position: "top-right"
                })
                handleCloseEditModel();
            } catch (error) {
                toast.error("Problem with edit product", {
                    duration: 2000,
                    position: "top-right"
                })
            }
        }
    }

    const confirmDeletion = async () => {
        if (editedProduct) {
            try {
                await deleteProduct({ id: editedProduct._id })
                toast.success("Product deleted successfully", {
                    duration: 2000,
                    position: "top-right"
                })
                handleCloseDeleteModel();
            } catch (error) {
                toast.error("Problem with delete product", {
                    duration: 2000,
                    position: "top-right"
                })
            }
        }
    }

    useEffect(() => {
        if (editedProduct) {
            // Reset the form with the edited product's data when it changes
            reset({
                name: editedProduct.name,
                amount: editedProduct.amount,
                price: editedProduct.price,
                description: editedProduct.description,
                place: editedProduct.place,
            });
        }
    }, [editedProduct, reset]);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'No', width: 70 },
        { field: 'img', headerName: 'Image', width: 130, renderCell: (params: GridCellParams) => <img className='w-[80px] h-full' src={params.value as string} alt="product-photo" /> }, // Assuming img is a URL
        { field: 'name', headerName: 'Product Name', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'sellerName', headerName: 'Seller Name', width: 150 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 180 },
        {
            field: 'action', headerName: '', width: 120, renderCell: (params: GridCellParams) => (
                <div className='flex items-center gap-3 h-full justify-center'>
                    <button className='p-3 rounded-md bg-teal-600 text-white' onClick={() => handleEditClick(params.value as IProduct)}><HiPencil /></button>
                    <button className='p-3 rounded-md bg-red-600 text-white' onClick={() => handleDeleteClick(params.value as IProduct)}><FaTrashAlt /></button>
                </div>
            )
        },
    ];

    // Convert the users to the required rows format
    const rows = data?.data?.products.map((product: IProduct, index: number) => ({
        id: index + 1,
        img: product.photo[0] || '',
        name: product.name,
        amount: product.amount,
        price: product.price,
        sellerName: product.user?.name,
        phoneNumber: product.user?.phone,
        action: product
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
                        disableRowSelectionOnClick
                    />
                </Paper>
                <Modal
                    open={openEditModel}
                    onClose={handleCloseEditModel}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="modal-title flex items-center justify-between mb-6">
                            <h3 className='text-2xl'>Edit Modal</h3>
                            <button className='text-gray-300 text-lg p-1 rounded-sm hover:text-gray-500 hover:bg-gray-100' onClick={handleCloseEditModel}><FaTimes /></button>
                        </div>
                        <div className='modal-body'>
                            <form action="" className='space-y-5' onSubmit={handleSubmit(onEditSubmit)}>
                                <div className='form-row'>
                                    <label htmlFor="phone" className="block text-teal-800 text-lg font-bold mb-3 text-right">اسم المنتج</label>
                                    <input
                                        type="text"
                                        className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right "
                                        placeholder="اسم المنتج"
                                        {...register("name",
                                            {
                                                required: "برجاء ادخال اسم المنتج"
                                            })}
                                    />
                                    {errors.name && <p className='text-sm text-red-600 mt-1 text-right'>{errors.name.message}</p>}
                                </div>
                                <div className='form-row'>
                                    <label htmlFor="phone" className="block text-teal-800 text-lg font-bold mb-3 text-right">وصف المنتج</label>
                                    <textarea
                                        rows={5}
                                        className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right resize-none"
                                        placeholder="وصف المنتج"
                                        {...register("description",
                                            {
                                                required: "برجاء ادخال وصف المنتج"
                                            })}
                                    />
                                    {errors.description && <p className='text-sm text-red-600 mt-1 text-right'>{errors.description.message}</p>}
                                </div>
                                <div className='form-row'>
                                    <label htmlFor="phone" className="block text-teal-800 text-lg font-bold mb-3 text-right">مكان المنتج</label>
                                    <input
                                        type="text"
                                        className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right "
                                        placeholder="مكان المنتج"
                                        {...register("place",
                                            {
                                                required: "برجاء ادخال مكان المنتج"
                                            })}
                                    />
                                    {errors.place && <p className='text-sm text-red-600 mt-1 text-right'>{errors.place.message}</p>}
                                </div>
                                <div className='form-row'>
                                    <label htmlFor="phone" className="block text-teal-800 text-lg font-bold mb-3 text-right">سعر المنتج</label>
                                    <input
                                        type="number"
                                        className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right "
                                        placeholder="سعر المنتج"
                                        {...register("price",
                                            {
                                                required: "برجاء ادخال سعر المنتج"
                                            })}
                                    />
                                    {errors.price && <p className='text-sm text-red-600 mt-1 text-right'>{errors.price.message}</p>}
                                </div>
                                <div className='form-row'>
                                    <label htmlFor="phone" className="block text-teal-800 text-lg font-bold mb-3 text-right">كمية المنتج</label>
                                    <input
                                        type="number"
                                        className="w-full py-2 px-2 focus:outline-none rounded-[10px] border border-teal-700 text-right"
                                        placeholder="كمية المنتج"
                                        {...register("amount",
                                            {
                                                required: "برجاء ادخال كمية المنتج"
                                            })}
                                    />
                                    {errors.amount && <p className='text-sm text-red-600 mt-1 text-right'>{errors.amount.message}</p>}
                                </div>
                                <div className="flex gap-5 !mt-8">
                                    <button className='px-6 py-2 bg-green-600 text-white rounded-md'>Save Changes</button>
                                    <button className='px-6 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-600 hover:text-white'
                                        onClick={handleCloseEditModel}>Cancel</button>
                                </div>
                            </form>


                        </div>
                    </Box>
                </Modal>
                <Modal
                    open={openDeleteModel}
                    onClose={handleCloseDeleteModel}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="modal-title flex items-center justify-between mb-6">
                            <h3 className='text-2xl'>Delete Modal</h3>
                            <button className='text-gray-300 text-lg p-1 rounded-sm hover:text-gray-500 hover:bg-gray-100' onClick={handleCloseDeleteModel}><FaTimes /></button>
                        </div>
                        <div className='modal-body'>
                            <p className='text-lg'>Are you sure to delete <span className='font-medium text-xl mx-2'>({editedProduct?.name})</span> ?</p>
                            <div className="flex gap-5 mt-8">
                                <button className='px-6 py-2 bg-red-600 text-white rounded-md'
                                    onClick={confirmDeletion}>Yes</button>
                                <button className='px-6 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-600 hover:text-white'
                                    onClick={handleCloseDeleteModel}>Cancel</button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default Products;
